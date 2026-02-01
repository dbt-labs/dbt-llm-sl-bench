"""
Simplified benchmark entry point using the modular framework.

This script provides a clean interface for running benchmarks with different
configurations and strategies.
"""

import argparse
import sys
import warnings

import nest_asyncio
from loguru import logger

from llm_bench.config import MCPConfig, ModelName, SemanticLayerConfig, SQLConfig
from llm_bench.runners import run_matrix_benchmark


# Apply nest_asyncio for async compatibility
nest_asyncio.apply()
warnings.filterwarnings("ignore")


def setup_logging(debug: bool = False):
    """Configure logging with timestamps to both stdout and file."""
    logger.remove()  # Remove default handler

    # Detailed format with timestamps and thread info
    log_format = (
        "<green>{time:YYYY-MM-DD HH:mm:ss.SSS}</green> | "
        "<cyan>{thread.name}</cyan> | "
        "<level>{level: <8}</level> | "
        "<level>{message}</level>"
    )

    # Simpler format for file output (colors don't work well in files)
    file_format = "{time:YYYY-MM-DD HH:mm:ss.SSS} | {thread.name} | {level: <8} | {message}"

    level = "DEBUG" if debug else "INFO"

    # Add stdout handler
    logger.add(sys.stdout, level=level, format=log_format, colorize=True)

    # Add file handler
    logger.add("bench.log", level=level, format=file_format, rotation="10 MB", retention="7 days", compression="zip")

    logger.info(f"Logging initialized at {level} level")
    logger.info("Logs are being written to: bench.log")
    return logger


def create_model_matrix(strategy: str, models: list[ModelName] | None = None, libraries: list[bool] | None = None):
    """Create multiple configs for different models and libraries for a single strategy

    Args:
        strategy: Strategy name ('semantic_layer', 'mcp', or 'sql')
        models: List of model names to test (default: [ModelName.GPT_5])
        libraries: List of bool for use_pydantic_ai (default: [True, False])

    Returns:
        List of configurations
    """
    if models is None:
        models = [ModelName.GPT_5]
    if libraries is None:
        libraries = [True, False]  # Both pydantic-ai and openai-sdk

    configs = []
    strategy_class = {"semantic_layer": SemanticLayerConfig, "mcp": MCPConfig, "sql": SQLConfig}[strategy]

    for model in models:
        for use_pydantic in libraries:
            configs.append(strategy_class(model_name=model, use_pydantic_ai=use_pydantic))

    return configs


def create_strategy_matrix(models: list[ModelName] | None = None, libraries: list[bool] | None = None):
    """Create configs for all strategies with different models and libraries

    Args:
        models: List of model names to test
        libraries: List of bool for use_pydantic_ai

    Returns:
        List of configurations covering all strategies
    """
    configs = []
    for strategy in ["semantic_layer", "mcp", "sql"]:
        configs.extend(create_model_matrix(strategy, models, libraries))
    return configs


# Example configurations - customize as needed
if __name__ == "__main__":
    # Parse command line arguments
    parser = argparse.ArgumentParser(description="Run LLM benchmarks with configurable logging")
    parser.add_argument("--debug", action="store_true", help="Enable debug logging (shows detailed comparison logs)")
    args = parser.parse_args()

    # Setup logging with timestamps and dual output
    setup_logging(debug=args.debug)
    logger.info("=" * 80)
    logger.info("Starting benchmark execution")
    logger.info("=" * 80)

    # Option 1: Single strategy, single model
    # from llm_bench.config import semantic_config
    # sql_answers_list, results_df = run_single_benchmark(semantic_config)

    # Option 2: Run MCP strategy with Claude Sonnet 4.5
    example_configs = [
        # SemanticLayerConfig(model_name=ModelName.CLAUDE_SONNET_4_5, use_pydantic_ai=True),
        # MCPConfig(model_name=ModelName.CLAUDE_SONNET_4_5, use_pydantic_ai=True),
        # SQLConfig(model_name=ModelName.CLAUDE_SONNET_4_5, use_pydantic_ai=True),
        # SemanticLayerConfig(model_name=ModelName.CLAUDE_OPUS_4_5, use_pydantic_ai=True),
        # MCPConfig(model_name=ModelName.CLAUDE_OPUS_4_5, use_pydantic_ai=True),
        # SQLConfig(model_name=ModelName.CLAUDE_OPUS_4_5, use_pydantic_ai=True)
        SQLConfig(model_name=ModelName.CLAUDE_OPUS_4_5, use_pydantic_ai=True, number_of_iterations=1),
        # SemanticLayerConfig(model_name=ModelName.CLAUDE_OPUS_4_5, use_pydantic_ai=True, number_of_iterations=20),
        # MCPConfig(
        #     model_name=ModelName.GPT_5_2,
        #     use_pydantic_ai=True,
        #     number_of_iterations=4,
        #     config_comment="DELETE - Local MCP with get_all_semantic_layer_config",
        # ),
        # SQLConfig(model_name=ModelName.GPT_5_2, use_pydantic_ai=True, number_of_iterations=4, ddl_file="ACME_enhanced.ddl", config_comment="SQL with the extra tables and enhanced ddl including schema name"),
        # SemanticLayerConfig(model_name=ModelName.CLAUDE_SONNET_4_5, use_pydantic_ai=True, number_of_iterations=10),
        # MCPConfig(model_name=ModelName.CLAUDE_SONNET_4_5, use_pydantic_ai=True, number_of_iterations=10),
        # SQLConfig(model_name=ModelName.CLAUDE_SONNET_4_5, use_pydantic_ai=True, number_of_iterations=10)
        # SemanticLayerConfig(model_name=ModelName.CLAUDE_OPUS_4_5, use_pydantic_ai=True, number_of_iterations=5, selected_challenges=["What is the average time to settle a claim by policy number?"]),
        # MCPConfig(model_name=ModelName.CLAUDE_OPUS_4_5, use_pydantic_ai=True, number_of_iterations=5, selected_challenges=["What is the total amount of premiums that a policy holder has paid by policy number?"]),
        # SQLConfig(model_name=ModelName.CLAUDE_OPUS_4_5, use_pydantic_ai=True, number_of_iterations=10, selected_challenges=["What is the average time to settle a claim by policy number?"])
    ]

    # Load challenges once and share across all configs (more efficient than loading per thread)
    from llm_bench.utils.challenge_loader import load_challenges_from_ttl

    logger.info("Pre-loading challenges from TTL file...")
    challenges = load_challenges_from_ttl("benchmark_questions.ttl", selected_challenges=None)
    logger.info(f"Loaded {len(challenges)} challenges")

    logger.info(f"Configured {len(example_configs)} benchmark configurations")
    for i, config in enumerate(example_configs, 1):
        logger.info(
            f"  Config {i}: {config.strategy} with {config.model_name.value} (library: {config.library_name}, iterations: {config.number_of_iterations})"
        )

    # Run benchmarks in parallel (parallelizes across configs)
    # Note: Challenge processing within each config is also parallelized by default
    # IMPORTANT: Reduced parallelism to avoid API rate limits and timeouts
    logger.info("Starting parallel benchmark execution...")
    logger.info("Parallel configs: True, max_workers: 3")
    logger.info("Parallel challenges: True, challenge_max_workers: 3")
    logger.warning(
        "⚠️  Reduced parallelism to avoid API rate limits (3 configs x 3 challenges = 9 concurrent API calls)"
    )

    sql_answers_list, results_df = run_matrix_benchmark(
        example_configs,
        challenges=challenges,  # Pass pre-loaded challenges to avoid redundant loading
        parallel=True,
        max_workers=3,
        parallel_challenges=True,
        challenge_max_workers=3,
    )

    # Display results
    logger.info("=" * 80)
    logger.info("Benchmark Complete!")
    logger.info(f"Total answers generated: {len(sql_answers_list)}")
    logger.info(f"Results shape: {results_df.shape}")
    logger.info("=" * 80)

    # Option 3: Full matrix - all strategies, multiple models
    # full_matrix = create_strategy_matrix(
    #     [ModelName.GPT_5, ModelName.CLAUDE_SONNET_4],
    #     [True, False]
    # )
    # sql_answers_list, results_df = run_matrix_benchmark(full_matrix, parallel=True, max_workers=6)

    # Visualize results (optional)
    # from llm_bench.services import VisualizationService
    # VisualizationService.render_results_chart(results_df)
