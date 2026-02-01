"""LLM Benchmark Tool - A modular benchmarking framework for testing LLM query generation."""

__version__ = "1.0.0"

# Import key components for easier access
from llm_bench.config import (
    BaseConfig,
    ConfigurationManager,
    MCPConfig,
    ModelName,
    SemanticLayerConfig,
    SQLConfig,
    config,
    config_manager,
)
from llm_bench.exceptions import (
    BenchmarkError,
    ComparisonError,
    ConfigurationError,
    DatabaseConnectionError,
    QueryGenerationError,
)
from llm_bench.models import (
    ComparisonResult,
    DatabaseExecutionResult,
    QueryGenerationResult,
    QueryRequest,
    QueryResult,
    SQLAnswer,
    SQLAnswerRequest,
)
from llm_bench.runners import (
    BenchmarkRunner,
    BenchmarkServices,
    run_matrix_benchmark,
    run_single_benchmark,
)
from llm_bench.services import (
    ComparisonService,
    DatabaseService,
    QueryGenerationService,
    VisualizationService,
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
    "ModelName",
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
]
