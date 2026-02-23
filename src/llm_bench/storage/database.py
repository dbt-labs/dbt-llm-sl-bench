"""Database storage operations for benchmark results."""

import builtins
import contextlib
import json
import random
import threading
import time
from dataclasses import asdict

import duckdb
import pandas as pd
from loguru import logger

from llm_bench.models.answers import SQLAnswer


# Global lock for database writes to prevent concurrent access issues
_db_write_lock = threading.Lock()


def save_sql_answer(answer: SQLAnswer, database_file: str, max_retries: int = 10) -> None:
    """Save SQLAnswer to DuckDB database with retry logic for concurrent writes

    Uses a global lock to serialize database writes and prevent WAL corruption.
    """

    # Use global lock to prevent concurrent writes that can corrupt the WAL
    with _db_write_lock:
        conn = None
        for attempt in range(max_retries):
            try:
                conn = duckdb.connect(database_file)

                # Convert dataclass to dict, handle DataFrame separately
                answer_dict = asdict(answer)
                answer_dict["token_usage"] = json.dumps(answer.token_usage) if answer.token_usage else None
                answer_dict["data_json"] = answer.data.to_json(orient="records") if not answer.data.empty else None
                answer_dict.pop("data")  # Remove DataFrame object

                # Create DataFrame and let DuckDB handle the insertion
                answer_df = pd.DataFrame([answer_dict])  # noqa: F841 - used by DuckDB SQL via variable name
                conn.execute("CREATE TABLE IF NOT EXISTS sql_answers AS SELECT * FROM answer_df WHERE 1=0")
                conn.execute("alter table sql_answers alter token_usage type JSON")  # in case the first one was empty
                # Add cost column to existing tables that predate the pricing feature
                conn.execute("ALTER TABLE sql_answers ADD COLUMN IF NOT EXISTS cost DOUBLE")
                conn.execute("INSERT INTO sql_answers BY NAME SELECT * FROM answer_df")
                conn.close()
                logger.debug("Successfully saved SQLAnswer to database")
                return  # Success, exit function

            except Exception as e:
                if conn:
                    with contextlib.suppress(builtins.BaseException):
                        conn.close()

                error_msg = str(e).lower()

                # Check if it's a database busy/lock error
                if "could not set lock on file" in error_msg or "database is locked" in error_msg:
                    if attempt < max_retries - 1:
                        # Random delay between 0.1 and 2 seconds, increasing with attempts
                        delay = random.uniform(0.1, 0.5) * (attempt + 1)  # noqa: S311 - not cryptographic
                        logger.warning(
                            f"Database busy, retrying save_sql_answer in {delay:.2f}s "
                            f"(attempt {attempt + 1}/{max_retries})"
                        )
                        time.sleep(delay)
                        continue
                    logger.error(f"Failed to save SQLAnswer after {max_retries} attempts due to database locks")
                    raise e
                # Non-lock related error, don't retry
                logger.error(f"Error saving SQLAnswer: {e}")
                raise e
