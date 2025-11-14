"""
LLM Benchmark Tool - Top-level package.

This package provides a modular benchmarking framework for testing LLM query generation
across different strategies (Semantic Layer, MCP, and SQL).

For ease of use, key components are re-exported from the llm_bench subpackage.
You can import directly from src.llm_bench for explicit imports:
    from src.llm_bench.config import BaseConfig

Or use the convenience imports from this package:
    from src import BaseConfig
"""

# Re-export key components from llm_bench for convenience
from .llm_bench import (
    __version__,
    # Config
    BaseConfig,
    ConfigurationManager,
    MCPConfig,
    ModelName,
    SQLConfig,
    SemanticLayerConfig,
    config,
    config_manager,
    # Exceptions
    BenchmarkError,
    ComparisonError,
    ConfigurationError,
    DatabaseConnectionError,
    QueryGenerationError,
    # Models
    ComparisonResult,
    DatabaseExecutionResult,
    QueryGenerationResult,
    QueryRequest,
    QueryResult,
    SQLAnswer,
    SQLAnswerRequest,
    # Services
    ComparisonService,
    DatabaseService,
    QueryGenerationService,
    VisualizationService,
    # Runners
    BenchmarkRunner,
    BenchmarkServices,
    run_matrix_benchmark,
    run_single_benchmark,
)

__all__ = [
    "__version__",
    # Config
    "BaseConfig",
    "ModelName",
    "SemanticLayerConfig",
    "MCPConfig",
    "SQLConfig",
    "ConfigurationManager",
    "config_manager",
    "config",
    # Exceptions
    "BenchmarkError",
    "QueryGenerationError",
    "DatabaseConnectionError",
    "ConfigurationError",
    "ComparisonError",
    # Models
    "SQLAnswer",
    "QueryResult",
    "QueryRequest",
    "SQLAnswerRequest",
    "QueryGenerationResult",
    "DatabaseExecutionResult",
    "ComparisonResult",
    # Services
    "DatabaseService",
    "QueryGenerationService",
    "ComparisonService",
    "VisualizationService",
    # Runners
    "BenchmarkRunner",
    "BenchmarkServices",
    "run_single_benchmark",
    "run_matrix_benchmark",
]
