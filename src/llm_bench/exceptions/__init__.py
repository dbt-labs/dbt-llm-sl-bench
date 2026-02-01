"""Exception classes for the benchmark tool."""

from llm_bench.exceptions.errors import (
    BenchmarkError,
    ComparisonError,
    ConfigurationError,
    DatabaseConnectionError,
    QueryGenerationError,
)


__all__ = [
    "BenchmarkError",
    "ComparisonError",
    "ConfigurationError",
    "DatabaseConnectionError",
    "QueryGenerationError",
]
