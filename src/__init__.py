"""
LLM Benchmark Tool - Top-level package.

This package provides a modular benchmarking framework for testing LLM query generation
across different strategies (Semantic Layer, MCP, and SQL).

For ease of use, key components are re-exported from the llm_bench subpackage.
You can import directly from llm_bench for explicit imports:
    from llm_bench.config import BaseConfig

Or use the convenience imports from this package:
    from src import BaseConfig
"""

# Re-export key components from llm_bench for convenience
from llm_bench import (
    BaseConfig,
    BenchmarkError,
    BenchmarkRunner,
    BenchmarkServices,
    ComparisonError,
    ComparisonResult,
    ComparisonService,
    ConfigurationError,
    ConfigurationManager,
    DatabaseConnectionError,
    DatabaseExecutionResult,
    DatabaseService,
    MCPConfig,
    QueryGenerationError,
    QueryGenerationResult,
    QueryGenerationService,
    QueryRequest,
    QueryResult,
    SemanticLayerConfig,
    SQLAnswer,
    SQLAnswerRequest,
    SQLConfig,
    VisualizationService,
    __version__,
    config,
    config_manager,
    run_matrix_benchmark,
    run_single_benchmark,
    validate_configs,
)


__all__ = [
    "BaseConfig",
    "BenchmarkError",
    "BenchmarkRunner",
    "BenchmarkServices",
    "ComparisonError",
    "ComparisonResult",
    "ComparisonService",
    "ConfigurationError",
    "ConfigurationManager",
    "DatabaseConnectionError",
    "DatabaseExecutionResult",
    "DatabaseService",
    "MCPConfig",
    "QueryGenerationError",
    "QueryGenerationResult",
    "QueryGenerationService",
    "QueryRequest",
    "QueryResult",
    "SQLAnswer",
    "SQLAnswerRequest",
    "SQLConfig",
    "SemanticLayerConfig",
    "VisualizationService",
    "__version__",
    "config",
    "config_manager",
    "run_matrix_benchmark",
    "run_single_benchmark",
    "validate_configs",
]
