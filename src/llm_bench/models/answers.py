"""Answer and result dataclasses for benchmark operations."""

import time
from dataclasses import dataclass, field

import pandas as pd


@dataclass
class SQLAnswer:
    """Result of a query generation and execution attempt."""

    challenge_text: str
    method: str
    model: str
    timing: float = 0
    sql: str = ""
    data: pd.DataFrame = field(default_factory=pd.DataFrame)
    token_usage: dict | None = None
    is_successful: bool = False
    error: str = ""
    prompt: str = ""
    is_correct: bool = False
    comparison_error: str = ""
    timestamp: float = field(default_factory=time.time)
    iteration: int = 0
    library: str = ""
    batch_id: int = 0  # Unique identifier for a benchmark run
    config_comment: str = ""  # Optional comment describing the configuration variant used


@dataclass
class QueryResult:
    """Result from AI model query execution."""

    text: str
    usage: dict | None = None
    model_name: str | None = None
