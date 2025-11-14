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

from src.llm_bench.config import MCPConfig, ModelName, SemanticLayerConfig, SQLConfig
from src.llm_bench.runners import run_matrix_benchmark
from src.llm_bench.utils.challenge_loader import load_challenges_from_ttl

# Apply nest_asyncio for async compatibility
nest_asyncio.apply()
warnings.filterwarnings("ignore")


def create_model_matrix(strategy: str, models: list[ModelName] = None, libraries: list[bool] = None):
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
    strategy_class = {
        'semantic_layer': SemanticLayerConfig,
        'mcp': MCPConfig,
        'sql': SQLConfig
    }[strategy]

    for model in models:
        for use_pydantic in libraries:
            configs.append(strategy_class(model_name=model, use_pydantic_ai=use_pydantic))

    return configs


def create_strategy_matrix(models: list[ModelName] = None, libraries: list[bool] = None):
    """Create configs for all strategies with different models and libraries

    Args:
        models: List of model names to test
        libraries: List of bool for use_pydantic_ai

    Returns:
        List of configurations covering all strategies
    """
    configs = []
    for strategy in ['semantic_layer', 'mcp', 'sql']:
        configs.extend(create_model_matrix(strategy, models, libraries))
    return configs


# Example configurations - customize as needed
if __name__ == "__main__":
    # Parse command line arguments
    parser = argparse.ArgumentParser(description='Run LLM benchmarks with configurable logging')
    parser.add_argument('--debug', action='store_true', help='Enable debug logging (shows detailed comparison logs)')
    args = parser.parse_args()

    # Configure loguru based on --debug flag
    logger.remove()  # Remove default handler
    if args.debug:
        # Debug mode: show all logs with detailed formatting
        logger.add(
            sys.stderr,
            level="DEBUG",
            format="<green>{time:YYYY-MM-DD HH:mm:ss}</green> | <level>{level: <8}</level> | <level>{message}</level>"
        )
        logger.info("Debug logging enabled")
    else:
        # Normal mode: only show errors and above
        logger.add(
            sys.stderr,
            level="ERROR",
            format="<red>{level}</red>: {message}"
        )

    # Option 1: Single strategy, single model
    # from src.config import semantic_config
    # sql_answers_list, results_df = run_single_benchmark(semantic_config)

    # Option 2: Run MCP strategy with Claude Sonnet 4.5
    example_configs = [
        # SemanticLayerConfig(model_name=ModelName.CLAUDE_SONNET_4_5, use_pydantic_ai=True),
        # MCPConfig(model_name=ModelName.CLAUDE_SONNET_4_5, use_pydantic_ai=True),
        # SQLConfig(model_name=ModelName.CLAUDE_SONNET_4_5, use_pydantic_ai=True)

        # SemanticLayerConfig(model_name=ModelName.GPT_5, use_pydantic_ai=True, number_of_iterations=10),
        # SQLConfig(model_name=ModelName.GPT_5, use_pydantic_ai=True, number_of_iterations=10)

        # SemanticLayerConfig(model_name=ModelName.GPT_5, use_pydantic_ai=True, number_of_iterations=5, selected_challenges=["What is the average time to settle a claim by policy number?"]),
        # MCPConfig(model_name=ModelName.GPT_5, use_pydantic_ai=True, number_of_iterations=5, selected_challenges=["What is the total amount of premiums that a policy holder has paid by policy number?"]),
        SemanticLayerConfig(model_name=ModelName.GPT_5, use_pydantic_ai=True, number_of_iterations=10, selected_challenges=["What is the total amount of premiums that a policy holder has paid by policy number?"])
    ]

    # Load challenges (optional - will be loaded automatically if not provided)
    # challenges = load_challenges_from_ttl("benchmark_questions.ttl", selected_challenges=None)

    # Run benchmarks in parallel (parallelizes across configs)
    # Note: Challenge processing within each config is also parallelized by default
    sql_answers_list, results_df = run_matrix_benchmark(example_configs, parallel=True, max_workers=10, parallel_challenges=True, challenge_max_workers=10)

    # Display results
    print(f"\n{'='*60}")
    print(f"Benchmark Complete!")
    print(f"Total answers generated: {len(sql_answers_list)}")
    print(f"Results shape: {results_df.shape}")
    print(f"{'='*60}")

    # Option 3: Full matrix - all strategies, multiple models
    # full_matrix = create_strategy_matrix(
    #     [ModelName.GPT_5, ModelName.CLAUDE_SONNET_4],
    #     [True, False]
    # )
    # sql_answers_list, results_df = run_matrix_benchmark(full_matrix, parallel=True, max_workers=6)

    # Visualize results (optional)
    # from src.llm_bench.services import VisualizationService
    # VisualizationService.render_results_chart(results_df)
