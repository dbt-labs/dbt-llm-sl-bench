"""Benchmark runner for managing benchmark execution with retry logic and result collection."""

import concurrent.futures
import threading
import time
from dataclasses import dataclass
from typing import Any, Dict, List, Tuple

import pandas as pd

from ..config.base import BaseConfig
from ..factories.answer_factory import SQLAnswerFactory
from ..models.answers import SQLAnswer
from ..models.requests import QueryRequest, SQLAnswerRequest
from ..services.comparison import ComparisonService
from ..services.database import DatabaseService
from ..services.query_generation import QueryGenerationService
from ..services.visualization import insert_line_break
from ..storage.database import save_sql_answer


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

    def __init__(self, services: BenchmarkServices):
        self.services = services
        self.sql_answers_list = []
        self.strategy = getattr(services.config, 'strategy', None)
        self.batch_id = 0  # Will be set at the start of each benchmark run

    def _generate_query_with_retry(self, strategy: str, question: str, iteration: int, context: Dict[str, Any] = None, max_retries: int = 5) -> SQLAnswer:
        """Generate a query with retry logic and maximum retry limit"""
        retry_count = 0

        while retry_count < max_retries:
            try:
                request = QueryRequest(question, context)
                result = self.services.query_service.generate_query(strategy, request)

                # Use the cleaner factory method
                answer = self.services.factory.from_query_result(question, strategy, result, iteration, self.batch_id)

                if result.success:
                    return answer
                else:
                    retry_count += 1
                    if retry_count < max_retries:
                        print(f"Retrying {strategy} generation due to error: {result.error} (attempt {retry_count}/{max_retries})")
                        time.sleep(self.services.config.retry_delay)
                    else:
                        print(f"Max retries ({max_retries}) reached for {strategy} generation. Returning failed result.")
                        return answer

            except Exception as e:
                retry_count += 1
                if retry_count < max_retries:
                    print(f"Exception in {strategy} generation: {e} (attempt {retry_count}/{max_retries})")
                    time.sleep(self.services.config.retry_delay)
                else:
                    print(f"Max retries ({max_retries}) reached for {strategy} generation due to exceptions.")
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
                        batch_id=self.batch_id
                    )
                    return self.services.factory.create_answer(error_request)

    def _execute_and_compare_query(self, answer: SQLAnswer, gold_df: pd.DataFrame) -> None:
        """Execute query and compare results"""
        if not answer.is_successful:
            print(f"Not comparing {answer.method} query as generation failed")
            answer.is_correct = False
            return

        try:
            # Execute query using database service
            exec_result = self.services.database_service.execute_query(answer.sql)
            answer.data = exec_result.data

            if exec_result.success and not gold_df.empty:
                print(f"Comparing {answer.method}")
                comparison_result = self.services.comparison_service.compare_query_results(gold_df, exec_result.data)
                if comparison_result.error:
                    answer.comparison_error = comparison_result.error
                    answer.is_correct = False
                    print(f"  ❌ - {comparison_result.error}")
                else:
                    print(f"  {'✅' if comparison_result.is_equivalent else '❌'}")
                    answer.is_correct = comparison_result.is_equivalent
            else:
                print(f"Not comparing {answer.method} query as execution failed")
                if exec_result.error:
                    answer.comparison_error = exec_result.error
                answer.is_correct = False

        except Exception as e:
            answer.comparison_error = str(e)
            answer.is_correct = False
            print(f"  ❌ - {str(e)}")

    def _process_single_challenge(self, args: Tuple) -> Dict[str, Any]:
        """Process a single challenge - designed to be called in parallel"""
        i, row, strategy, metric_context, results_lock = args

        invocation_timestamp = time.time()
        title = row["title"]
        challenge_text = row["challenge_text"]
        gold_query_text = row["gold_query_text"]

        print()
        print(f"Iteration {i} - {strategy}: {challenge_text}")

        # Execute gold query
        gold_result = self.services.database_service.execute_query(str(gold_query_text))
        gold_df_success, gold_df = gold_result.success, gold_result.data

        # Generate query for the specific strategy
        if strategy == 'semantic_layer' and not metric_context:
            raise ValueError("metric_context is required for semantic_layer strategy")

        answer = self._generate_query_with_retry(strategy, challenge_text, i, metric_context)

        # Execute and compare query
        if gold_df_success:
            self._execute_and_compare_query(answer, gold_df)

        # Save results (thread-safe)
        with results_lock:
            save_sql_answer(answer, self.services.config.database_file)
            self.sql_answers_list.append(answer)

        # Return result row as dict
        return {
            "title": title,
            "challenge_text": challenge_text,
            "display_text": insert_line_break(challenge_text),
            "invocation_timestamp": invocation_timestamp,
            "iteration_num": i,
            "strategy": strategy,
            "model": self.services.config.model_name.value,
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
            "prompt": answer.prompt
        }

    def run_benchmark(self, filtered_challenges: pd.DataFrame, metric_context: Dict[str, str] = None,
                     max_workers: int = None, parallel: bool = True, batch_id: int = None) -> Tuple[List[SQLAnswer], pd.DataFrame]:
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
        print(f"Starting benchmark run with batch_id: {self.batch_id}")

        # Determine max workers
        if max_workers is None:
            max_workers = min(len(filtered_challenges), 4)

        results_df = pd.DataFrame(
            columns=[
                "title", "challenge_text", "display_text", "invocation_timestamp", "iteration_num",
                "strategy", "model", "library",
                # queries
                "gold_query_text", "generated_query_text",
                # timings
                "generation_timing",
                # dataframes
                "gold_query_df", "generated_df",
                # results
                "is_result_equivalent",
                "comparison_exception",
                "prompt"
            ]
        )

        # Create a lock for thread-safe operations
        results_lock = threading.Lock()

        # Process iterations sequentially, but challenges in parallel (if enabled)
        for i in range(self.services.config.number_of_iterations):
            if parallel and len(filtered_challenges) > 1:
                # Parallel processing of challenges
                print(f"\n{'='*60}")
                print(f"Iteration {i}: Processing {len(filtered_challenges)} challenges in parallel (max_workers={max_workers})")
                print(f"{'='*60}")

                # Create list of (iteration, row, strategy, metric_context, lock) tuples
                challenge_args = [
                    (i, row, strategy, metric_context, results_lock)
                    for _, row in filtered_challenges.iterrows()
                ]

                # Process challenges in parallel
                with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
                    result_rows = list(executor.map(self._process_single_challenge, challenge_args))

                # Add results to dataframe
                results_df = pd.concat([
                    results_df,
                    pd.DataFrame(result_rows)
                ], ignore_index=True)
            else:
                # Sequential processing (original behavior)
                for _, row in filtered_challenges.iterrows():
                    result_row = self._process_single_challenge(
                        (i, row, strategy, metric_context, results_lock)
                    )
                    results_df = pd.concat([
                        results_df,
                        pd.DataFrame([result_row])
                    ], ignore_index=True)

        return self.sql_answers_list, results_df


def run_single_benchmark(config: BaseConfig, challenges: pd.DataFrame = None,
                        parallel_challenges: bool = True, max_workers: int = None, batch_id: int = None) -> Tuple[List[SQLAnswer], pd.DataFrame]:
    """Run benchmark with a specific configuration

    Args:
        config: Benchmark configuration
        challenges: DataFrame of challenges (loads from file if None)
        parallel_challenges: Whether to process challenges in parallel within each iteration
        max_workers: Maximum number of parallel workers for challenge processing
        batch_id: Optional batch_id to use for this run (generated if None)
    """
    from ..config.manager import config_manager
    from ..utils.challenge_loader import load_challenges_from_ttl

    if challenges is None:
        challenges = load_challenges_from_ttl(config.benchmark_questions_file, config.selected_challenges)

    # Setup metric context if needed for semantic layer
    metric_context = None
    if config.strategy == 'semantic_layer':
        db_service = DatabaseService(config)
        metrics_result = db_service.list_metrics()
        if metrics_result.success:
            metric_context = {
                'metric_details': metrics_result.data.to_string(),
                'dimension_details': db_service.list_dimensions_for_metrics(metrics_result.data).to_string(),
                'entity_details': db_service.list_entities_for_metrics(metrics_result.data).to_string()
            }

    # Create services and run benchmark
    services = config_manager.create_services(config)
    benchmark_runner = BenchmarkRunner(services)
    return benchmark_runner.run_benchmark(challenges, metric_context,
                                         max_workers=max_workers, parallel=parallel_challenges, batch_id=batch_id)


def run_matrix_benchmark(configs: List[BaseConfig], challenges: pd.DataFrame = None,
                         parallel: bool = True, max_workers: int = None,
                         parallel_challenges: bool = True, challenge_max_workers: int = None) -> Tuple[List[SQLAnswer], pd.DataFrame]:
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
    print(f"Matrix benchmark starting with shared batch_id: {batch_id}")

    if not parallel:
        # Sequential execution (original behavior)
        all_answers = []
        all_results = []

        for config in configs:
            print(f"\n{'='*50}")
            print(f"Running benchmark with {config.strategy} strategy using {config.model_name.value} ({config.library_name})")
            print(f"{'='*50}")

            answers, results = run_single_benchmark(config, challenges,
                                                   parallel_challenges=parallel_challenges,
                                                   max_workers=challenge_max_workers,
                                                   batch_id=batch_id)
            all_answers.extend(answers)
            all_results.append(results)

        # Combine all results into a single DataFrame
        combined_results = pd.concat(all_results, ignore_index=True) if all_results else pd.DataFrame()
        return all_answers, combined_results

    else:
        # Parallel execution
        from concurrent.futures import ThreadPoolExecutor

        # Determine max workers (default to number of configs, but cap at reasonable limit)
        if max_workers is None:
            max_workers = min(len(configs), 4)  # Cap at 4 to avoid overwhelming the system

        print(f"\n{'='*60}")
        print(f"Starting parallel execution with {max_workers} workers for {len(configs)} configurations")
        print(f"{'='*60}")

        def run_single_config(config_with_index):
            """Helper function to run a single config with thread-safe printing"""
            index, config = config_with_index
            thread_id = threading.get_ident()

            print(f"[Thread {thread_id}] Starting {config.strategy} with {config.model_name.value} ({config.library_name})")

            try:
                answers, results = run_single_benchmark(config, challenges,
                                                       parallel_challenges=parallel_challenges,
                                                       max_workers=challenge_max_workers,
                                                       batch_id=batch_id)
                print(f"[Thread {thread_id}] Completed {config.strategy} with {config.model_name.value} - {len(answers)} answers generated")
                return index, answers, results
            except Exception as e:
                print(f"[Thread {thread_id}] ERROR in {config.strategy} with {config.model_name.value}: {str(e)}")
                return index, [], pd.DataFrame()

        # Execute in parallel
        all_answers = []
        all_results = []

        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            # Submit all tasks
            future_to_config = {
                executor.submit(run_single_config, (i, config)): config
                for i, config in enumerate(configs)
            }

            # Collect results in original order
            results_by_index = {}
            for future in concurrent.futures.as_completed(future_to_config):
                try:
                    index, answers, results = future.result()
                    results_by_index[index] = (answers, results)
                except Exception as e:
                    config = future_to_config[future]
                    print(f"Error in parallel execution for {config.strategy}: {e}")
                    results_by_index[len(results_by_index)] = ([], pd.DataFrame())

        # Combine results in original order
        for i in sorted(results_by_index.keys()):
            answers, results = results_by_index[i]
            all_answers.extend(answers)
            if not results.empty:
                all_results.append(results)

        print(f"\n{'='*60}")
        print(f"Parallel execution completed. Total answers: {len(all_answers)}")
        print(f"{'='*60}")

        # Combine all results into a single DataFrame
        combined_results = pd.concat(all_results, ignore_index=True) if all_results else pd.DataFrame()
        return all_answers, combined_results
