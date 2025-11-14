"""LLM Benchmark Tool - A modular benchmarking framework for testing LLM query generation."""

__version__ = "1.0.0"

# Import key components for easier access
from .config import (
    BaseConfig,
    ConfigurationManager,
    MCPConfig,
    ModelName,
    SQLConfig,
    SemanticLayerConfig,
    config,
    config_manager,
)
from .exceptions import (
    BenchmarkError,
    ComparisonError,
    ConfigurationError,
    DatabaseConnectionError,
    QueryGenerationError,
)
from .models import (
    ComparisonResult,
    DatabaseExecutionResult,
    QueryGenerationResult,
    QueryRequest,
    QueryResult,
    SQLAnswer,
    SQLAnswerRequest,
)
from .runners import (
    BenchmarkRunner,
    BenchmarkServices,
    run_matrix_benchmark,
    run_single_benchmark,
)
from .services import (
    ComparisonService,
    DatabaseService,
    QueryGenerationService,
    VisualizationService,
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
