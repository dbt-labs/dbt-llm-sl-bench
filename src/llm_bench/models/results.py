"""Result dataclasses for various benchmark operations."""

from dataclasses import dataclass

import pandas as pd


@dataclass
class QueryGenerationResult:
    """Result of query generation with all relevant data"""

    success: bool
    query: str
    error: Exception | None
    prompt: str
    timing: float
    token_usage: dict | None
    model_name: str | None = None

    @classmethod
    def success_result(
        cls, query: str, prompt: str, timing: float, token_usage: dict | None = None, model_name: str | None = None
    ) -> "QueryGenerationResult":
        """Create a successful query generation result."""
        return cls(True, query, None, prompt, timing, token_usage, model_name)

    @classmethod
    def error_result(cls, error: Exception, prompt: str, timing: float) -> "QueryGenerationResult":
        """Create a failed query generation result."""
        return cls(False, "", error, prompt, timing, None)


@dataclass
class DatabaseExecutionResult:
    """Result of database query execution"""

    success: bool
    data: pd.DataFrame
    error: str | None = None

    @classmethod
    def success_result(cls, data: pd.DataFrame) -> "DatabaseExecutionResult":
        """Create a successful database execution result."""
        return cls(True, data)

    @classmethod
    def error_result(cls, error: str) -> "DatabaseExecutionResult":
        """Create a failed database execution result."""
        return cls(False, pd.DataFrame(), error)


@dataclass
class ComparisonResult:
    """Result of query result comparison"""

    is_equivalent: bool
    error: str | None = None

    @classmethod
    def success_result(cls, is_equivalent: bool) -> "ComparisonResult":
        """Create a successful comparison result."""
        return cls(is_equivalent)

    @classmethod
    def error_result(cls, error: str) -> "ComparisonResult":
        """Create a failed comparison result."""
        return cls(False, error)
