"""Data models for the benchmark tool."""

from llm_bench.models.answers import QueryResult, SQLAnswer
from llm_bench.models.requests import QueryRequest, SQLAnswerRequest
from llm_bench.models.results import ComparisonResult, DatabaseExecutionResult, QueryGenerationResult


__all__ = [
    "ComparisonResult",
    "DatabaseExecutionResult",
    "QueryGenerationResult",
    "QueryRequest",
    "QueryResult",
    "SQLAnswer",
    "SQLAnswerRequest",
]
