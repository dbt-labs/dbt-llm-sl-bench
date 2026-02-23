"""Benchmark runner for managing benchmark execution with retry logic and result collection."""

import concurrent.futures
import threading
import time
from dataclasses import dataclass
from typing import Any

import pandas as pd
from loguru import logger

from llm_bench.config.base import BaseConfig
from llm_bench.config.manager import config_manager
from llm_bench.factories.answer_factory import SQLAnswerFactory
from llm_bench.models.answers import SQLAnswer
from llm_bench.models.requests import QueryRequest, SQLAnswerRequest
from llm_bench.services.comparison import ComparisonService
from llm_bench.services.database import DatabaseService
from llm_bench.services.query_generation import QueryGenerationService
from llm_bench.services.visualization import insert_line_break
from llm_bench.storage.database import save_sql_answer
from llm_bench.utils.challenge_loader import load_challenges_from_ttl


@dataclass
class BenchmarkServices:
    """Container for benchmark dependencies"""

    config: BaseConfig
    database_service: DatabaseService
    query_service: QueryGenerationService
    comparison_service: ComparisonService
    factory: SQLAnswerFactory


class BenchmarkRunner:
    """Manages benchmark execution with retry logic and result collection"""

    def __init__(self, services: BenchmarkServices) -> None:
        self.services = services
        self.sql_answers_list = []
        self.strategy = getattr(services.config, "strategy", None)
        self.batch_id = 0  # Will be set at the start of each benchmark run

    def _generate_query_with_retry(
        self, strategy: str, question: str, iteration: int, context: dict[str, Any] | None = None, max_retries: int = 5
    ) -> SQLAnswer:
        """Generate a query with retry logic and maximum retry limit"""
        retry_count = 0
        logger.debug(f"Starting query generation for: {question[:50]}... (strategy: {strategy})")

        while retry_count < max_retries:
            try:
                logger.debug(f"Creating query request (attempt {retry_count + 1}/{max_retries})")
                request = QueryRequest(question, context)

                logger.debug(f"Calling query service for {strategy} strategy...")
                result = self.services.query_service.generate_query(strategy, request)

                # Use the cleaner factory method
                answer = self.services.factory.from_query_result(question, strategy, result, iteration, self.batch_id)

                if result.success:
                    logger.debug(f"Query generation successful on attempt {retry_count + 1}")
                    return answer
                retry_count += 1
                if retry_count < max_retries:
                    logger.warning(
                        f"Retrying {strategy} generation due to error: {result.error} (attempt {retry_count}/{max_retries})"
                    )
                    time.sleep(self.services.config.retry_delay)
                else:
                    logger.error(
                        f"Max retries ({max_retries}) reached for {strategy} generation. Returning failed result."
                    )
                    return answer

            except Exception as e:
                retry_count += 1
                if retry_count < max_retries:
                    logger.warning(f"Exception in {strategy} generation: {e} (attempt {retry_count}/{max_retries})")
                    time.sleep(self.services.config.retry_delay)
                else:
                    logger.error(f"Max retries ({max_retries}) reached for {strategy} generation due to exceptions.")
                    # Return a failed answer
                    error_request = SQLAnswerRequest(
                        challenge_text=question,
                        method=strategy,
                        success=False,
                        query_or_error=e,
                        timing=0.0,
                        prompt="",
                        token_usage=None,
                        iteration=iteration,
                        batch_id=self.batch_id,
                    )
                    return self.services.factory.create_answer(error_request)

        # This should never be reached due to loop logic, but satisfy type checker
        raise RuntimeError("Unexpected code path: max retries exceeded without returning")

    def _execute_and_compare_query(self, answer: SQLAnswer, gold_df: pd.DataFrame) -> None:
        """Execute query and compare results"""
        if not answer.is_successful:
            logger.warning(f"Not comparing {answer.method} query as generation failed")
            answer.is_correct = False
            return

        try:
            # Execute query using database service
            logger.debug(f"Executing {answer.method} query...")
            exec_result = self.services.database_service.execute_query(answer.sql)
            answer.data = exec_result.data

            if exec_result.success and not gold_df.empty:
                logger.debug(f"Comparing {answer.method} results...")
                comparison_result = self.services.comparison_service.compare_query_results(gold_df, exec_result.data)
                if comparison_result.error:
                    answer.comparison_error = comparison_result.error
                    answer.is_correct = False
                    logger.info(f"  ❌ {answer.method} - {comparison_result.error}")
                else:
                    logger.info(f"  {'✅' if comparison_result.is_equivalent else '❌'} {answer.method}")
                    answer.is_correct = comparison_result.is_equivalent
            else:
                logger.warning(f"Not comparing {answer.method} query as execution failed")
                if exec_result.error:
                    answer.comparison_error = exec_result.error
                answer.is_correct = False

        except Exception as e:
            answer.comparison_error = str(e)
            answer.is_correct = False
            logger.error(f"  ❌ {answer.method} - {e!s}")

    def _process_single_challenge(self, args: tuple) -> dict[str, Any]:
        """Process a single challenge - designed to be called in parallel"""
        i, row, strategy, metric_context, results_lock = args

        invocation_timestamp = time.time()
        title = row["title"]
        challenge_text = row["challenge_text"]
        gold_query_text = row["gold_query_text"]

        logger.info("")
        logger.info(f"[Iteration {i}] Processing {strategy}: {challenge_text}")

        # Execute gold query
        logger.debug(f"[Iteration {i}] Executing gold query...")
        gold_result = self.services.database_service.execute_query(str(gold_query_text))
        gold_df_success, gold_df = gold_result.success, gold_result.data
        logger.debug(f"[Iteration {i}] Gold query executed: success={gold_df_success}")

        # Generate query for the specific strategy
        if strategy == "semantic_layer" and not metric_context:
            raise ValueError("metric_context is required for semantic_layer strategy")

        logger.debug(f"[Iteration {i}] Generating query with retry logic...")
        answer = self._generate_query_with_retry(strategy, challenge_text, i, metric_context)

        # Execute and compare query
        if gold_df_success:
            logger.debug(f"[Iteration {i}] Executing and comparing generated query...")
            self._execute_and_compare_query(answer, gold_df)

        # Save results (thread-safe)
        logger.debug(f"[Iteration {i}] Saving results to database...")
        try:
            # save_sql_answer now has its own internal locking
            save_sql_answer(answer, self.services.config.database_file)
            with results_lock:
                self.sql_answers_list.append(answer)
            logger.debug(f"[Iteration {i}] Challenge processing complete")
        except Exception as e:
            logger.error(f"[Iteration {i}] CRITICAL: Failed to save results to database: {e}")
            logger.error(f"[Iteration {i}] Challenge: {challenge_text}")
            logger.error(f"[Iteration {i}] This result will be lost!")
            # Re-raise to make the failure visible
            raise

        # Return result row as dict
        return {
            "title": title,
            "challenge_text": challenge_text,
            "display_text": insert_line_break(challenge_text),
            "invocation_timestamp": invocation_timestamp,
            "iteration_num": i,
            "strategy": strategy,
            "model": answer.model,
            "library": self.services.config.library_name,
            "gold_query_text": gold_query_text,
            "generated_query_text": answer.sql if answer.is_successful else str(answer.error),
            # timings
            "generation_timing": answer.timing,
            # dataframes
            "gold_query_df": gold_df.to_string() if gold_df_success else "",
            "generated_df": answer.data.to_string() if not answer.data.empty else "",
            # results
            "is_result_equivalent": answer.is_correct,
            "comparison_exception": answer.comparison_error,
            "prompt": answer.prompt,
        }

    def run_benchmark(
        self,
        filtered_challenges: pd.DataFrame,
        metric_context: dict[str, str] | None = None,
        max_workers: int | None = None,
        parallel: bool = True,
        batch_id: int | None = None,
    ) -> tuple[list[SQLAnswer], pd.DataFrame]:
        """Run the benchmark for the specific strategy configured

        Args:
            filtered_challenges: DataFrame of challenges to process
            metric_context: Context for semantic layer strategy
            max_workers: Maximum number of parallel workers (None = auto, capped at 4)
            parallel: Whether to process challenges in parallel (default: True)
            batch_id: Optional batch_id to use (generated if None)
        """
        strategy = self.strategy
        if not strategy:
            raise ValueError("No strategy specified in config")

        # Use provided batch_id or generate new one
        if batch_id is not None:
            self.batch_id = batch_id
        else:
            # Generate batch_id as timestamp (milliseconds since epoch)
            self.batch_id = int(time.time() * 1000)
        logger.info(f"Starting benchmark run with batch_id: {self.batch_id}")

        # Determine max workers
        if max_workers is None:
            max_workers = min(len(filtered_challenges), 4)

        logger.info(f"Benchmark configuration: strategy={strategy}, parallel={parallel}, max_workers={max_workers}")

        # Create empty DataFrame with specified columns (list of str is valid for columns parameter)
        results_df = pd.DataFrame(  # type: ignore[call-arg]
            columns=[
                "title",
                "challenge_text",
                "display_text",
                "invocation_timestamp",
                "iteration_num",
                "strategy",
                "model",
                "library",
                # queries
                "gold_query_text",
                "generated_query_text",
                # timings
                "generation_timing",
                # dataframes
                "gold_query_df",
                "generated_df",
                # results
                "is_result_equivalent",
                "comparison_exception",
                "prompt",
            ]
        )

        # Create a lock for thread-safe operations
        results_lock = threading.Lock()

        # Process iterations sequentially, but challenges in parallel (if enabled)
        for i in range(self.services.config.number_of_iterations):
            logger.info("")
            logger.info("=" * 80)
            logger.info(
                f"Iteration {i}/{self.services.config.number_of_iterations - 1}: Processing {len(filtered_challenges)} challenges"
            )
            logger.info("=" * 80)

            if parallel and len(filtered_challenges) > 1:
                # Parallel processing of challenges
                logger.info(f"Processing challenges in parallel (max_workers={max_workers})")

                # Create list of (iteration, row, strategy, metric_context, lock) tuples
                challenge_args = [
                    (i, row, strategy, metric_context, results_lock) for _, row in filtered_challenges.iterrows()
                ]

                # Process challenges in parallel
                logger.debug(f"Submitting {len(challenge_args)} challenges to thread pool...")
                try:
                    with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
                        result_rows = list(executor.map(self._process_single_challenge, challenge_args))
                    logger.debug(f"All {len(result_rows)} challenges completed for iteration {i}")
                except Exception as e:
                    logger.error(f"CRITICAL: Exception during parallel challenge processing in iteration {i}: {e}")
                    logger.error(f"Exception type: {type(e).__name__}")
                    import traceback

                    logger.error(f"Traceback:\n{traceback.format_exc()}")
                    raise

                # Add results to dataframe
                results_df = pd.concat([results_df, pd.DataFrame(result_rows)], ignore_index=True)
            else:
                # Sequential processing (original behavior)
                logger.info("Processing challenges sequentially")
                for idx, row in enumerate(filtered_challenges.iterrows(), 1):
                    _, row = row
                    logger.debug(f"Processing challenge {idx}/{len(filtered_challenges)}...")
                    result_row = self._process_single_challenge((i, row, strategy, metric_context, results_lock))
                    results_df = pd.concat([results_df, pd.DataFrame([result_row])], ignore_index=True)

            logger.info(f"Iteration {i} completed. Total answers so far: {len(self.sql_answers_list)}")

        logger.info("=" * 80)
        logger.info(f"Benchmark run complete. Total answers: {len(self.sql_answers_list)}")
        logger.info("=" * 80)
        return self.sql_answers_list, results_df


def run_single_benchmark(
    config: BaseConfig,
    challenges: pd.DataFrame | None = None,
    parallel_challenges: bool = True,
    max_workers: int | None = None,
    batch_id: int | None = None,
) -> tuple[list[SQLAnswer], pd.DataFrame]:
    """Run benchmark with a specific configuration

    Args:
        config: Benchmark configuration
        challenges: DataFrame of challenges (loads from file if None)
        parallel_challenges: Whether to process challenges in parallel within each iteration
        max_workers: Maximum number of parallel workers for challenge processing
        batch_id: Optional batch_id to use for this run (generated if None)
    """
    logger.info(f"Running single benchmark: {config.strategy} with {config.model_name.value} ({config.library_name})")

    if challenges is None:
        logger.debug("Loading challenges from file...")
        challenges = load_challenges_from_ttl(config.benchmark_questions_file, config.selected_challenges)
        logger.debug(f"Loaded {len(challenges)} challenges")
    elif config.selected_challenges:
        # Filter pre-loaded challenges if config has specific selections
        logger.debug(f"Filtering {len(challenges)} challenges to {len(config.selected_challenges)} selected challenges")
        challenges = challenges[challenges["challenge_text"].isin(config.selected_challenges)].copy()
        logger.debug(f"Filtered to {len(challenges)} challenges")

    # Setup metric context if needed for semantic layer
    metric_context = None
    if config.strategy == "semantic_layer":
        logger.debug("Setting up metric context for semantic layer...")
        db_service = DatabaseService(config)
        metrics_result = db_service.list_metrics()
        if metrics_result.success:
            metric_context = {
                "metric_details": metrics_result.data.to_string(),
                "dimension_details": db_service.list_dimensions_for_metrics(metrics_result.data).to_string(),
                "entity_details": db_service.list_entities_for_metrics(metrics_result.data).to_string(),
            }
            logger.debug("Metric context loaded successfully")
        else:
            logger.warning("Failed to load metric context")

    # Create services and run benchmark
    logger.debug("Creating services...")
    services = config_manager.create_services(config)
    benchmark_runner = BenchmarkRunner(services)
    logger.debug("Starting benchmark runner...")
    return benchmark_runner.run_benchmark(
        challenges, metric_context, max_workers=max_workers, parallel=parallel_challenges, batch_id=batch_id
    )


def run_matrix_benchmark(
    configs: list[BaseConfig],
    challenges: pd.DataFrame | None = None,
    parallel: bool = True,
    max_workers: int | None = None,
    parallel_challenges: bool = True,
    challenge_max_workers: int | None = None,
) -> tuple[list[SQLAnswer], pd.DataFrame]:
    """Run benchmark with multiple configurations and combine results

    Args:
        configs: List of configurations to run
        challenges: DataFrame of challenges (loads from file if None)
        parallel: Whether to run configurations in parallel
        max_workers: Maximum number of parallel workers for configs (None = auto)
        parallel_challenges: Whether to process challenges in parallel within each config
        challenge_max_workers: Maximum workers for challenge processing (None = auto)
    """
    # Generate a single batch_id for all configs in this matrix run
    batch_id = int(time.time() * 1000)
    logger.info("=" * 80)
    logger.info(f"Matrix benchmark starting with shared batch_id: {batch_id}")
    logger.info(f"Number of configurations: {len(configs)}")
    logger.info("=" * 80)

    if not parallel:
        # Sequential execution (original behavior)
        logger.info("Running configurations sequentially")
        all_answers = []
        all_results = []

        for idx, config in enumerate(configs, 1):
            logger.info("")
            logger.info("=" * 80)
            logger.info(
                f"Config {idx}/{len(configs)}: {config.strategy} with {config.model_name.value} ({config.library_name})"
            )
            logger.info("=" * 80)

            answers, results = run_single_benchmark(
                config,
                challenges,
                parallel_challenges=parallel_challenges,
                max_workers=challenge_max_workers,
                batch_id=batch_id,
            )
            all_answers.extend(answers)
            all_results.append(results)
            logger.info(f"Config {idx}/{len(configs)} complete. Answers so far: {len(all_answers)}")

        # Combine all results into a single DataFrame
        logger.info("Combining all results...")
        combined_results = pd.concat(all_results, ignore_index=True) if all_results else pd.DataFrame()
        logger.info(f"Sequential execution complete. Total answers: {len(all_answers)}")
        return all_answers, combined_results

    # Parallel execution
    from concurrent.futures import ThreadPoolExecutor

    # Determine max workers (default to number of configs, but cap at reasonable limit)
    if max_workers is None:
        max_workers = min(len(configs), 4)  # Cap at 4 to avoid overwhelming the system

    logger.info("")
    logger.info("=" * 80)
    logger.info(f"Starting parallel execution with {max_workers} workers for {len(configs)} configurations")
    logger.info("=" * 80)

    def run_single_config(config_with_index):
        """Helper function to run a single config with thread-safe printing"""
        index, config = config_with_index
        thread_id = threading.get_ident()

        logger.info(
            f"[Thread-{thread_id}] Starting config {index + 1}/{len(configs)}: {config.strategy} with {config.model_name.value} ({config.library_name})"
        )

        try:
            answers, results = run_single_benchmark(
                config,
                challenges,
                parallel_challenges=parallel_challenges,
                max_workers=challenge_max_workers,
                batch_id=batch_id,
            )
            logger.info(
                f"[Thread-{thread_id}] ✅ Completed {config.strategy} with {config.model_name.value} - {len(answers)} answers generated"
            )
            return index, answers, results
        except Exception as e:
            logger.error(f"[Thread-{thread_id}] ❌ ERROR in {config.strategy} with {config.model_name.value}: {e!s}")
            logger.exception(e)
            return index, [], pd.DataFrame()

    # Execute in parallel
    all_answers = []
    all_results = []

    logger.debug(f"Creating thread pool and submitting {len(configs)} tasks...")
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        # Submit all tasks
        future_to_config = {executor.submit(run_single_config, (i, config)): config for i, config in enumerate(configs)}
        logger.debug(f"All {len(future_to_config)} tasks submitted to thread pool")

        # Collect results in original order
        results_by_index = {}
        completed_count = 0
        for future in concurrent.futures.as_completed(future_to_config):
            completed_count += 1
            logger.debug(f"Task {completed_count}/{len(future_to_config)} completed")
            try:
                index, answers, results = future.result()
                results_by_index[index] = (answers, results)
            except Exception as e:
                config = future_to_config[future]
                logger.error(f"Error in parallel execution for {config.strategy}: {e}")
                logger.exception(e)
                results_by_index[len(results_by_index)] = ([], pd.DataFrame())

    # Combine results in original order
    logger.debug("Combining results from all parallel executions...")
    for i in sorted(results_by_index.keys()):
        answers, results = results_by_index[i]
        all_answers.extend(answers)
        if not results.empty:
            all_results.append(results)

    logger.info("")
    logger.info("=" * 80)
    logger.info(f"Parallel execution completed. Total answers: {len(all_answers)}")
    logger.info("=" * 80)

    # Combine all results into a single DataFrame
    combined_results = pd.concat(all_results, ignore_index=True) if all_results else pd.DataFrame()
    return all_answers, combined_results
