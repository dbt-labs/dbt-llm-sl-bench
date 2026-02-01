"""Helper utility functions for the benchmark tool."""

import pandas as pd

from llm_bench.config.base import BaseConfig
from llm_bench.models.answers import SQLAnswer
from llm_bench.services.database import DatabaseService


def execute_query_and_update_answer(
    answer: SQLAnswer, query_text: str, config: BaseConfig
) -> tuple[bool, pd.DataFrame]:
    """Legacy function - Execute a query and update the SQLAnswer object with results"""
    db_service = DatabaseService(config)
    result = db_service.execute_query(str(query_text))
    answer.data = result.data
    return result.success, result.data
