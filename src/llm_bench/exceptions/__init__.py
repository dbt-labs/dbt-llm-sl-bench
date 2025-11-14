"""Exception classes for the benchmark tool."""

from .errors import (
    BenchmarkError,
    QueryGenerationError,
    DatabaseConnectionError,
    ConfigurationError,
    ComparisonError,
)

__all__ = [
    "BenchmarkError",
    "QueryGenerationError",
    "DatabaseConnectionError",
    "ConfigurationError",
    "ComparisonError",
]
