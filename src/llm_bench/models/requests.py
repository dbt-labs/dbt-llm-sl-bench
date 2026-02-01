"""Request dataclasses for benchmark operations."""

from dataclasses import dataclass
from typing import Any


@dataclass
class QueryRequest:
    """Request object for query generation"""

    question: str
    context: dict[str, Any] | None = None


@dataclass
class SQLAnswerRequest:
    """Request object for creating SQL answers"""

    challenge_text: str
    method: str
    success: bool
    query_or_error: str | Exception
    timing: float
    prompt: str = ""
    token_usage: dict | None = None
    iteration: int = 0
    batch_id: int = 0
