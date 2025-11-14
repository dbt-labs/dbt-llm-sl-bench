"""Unit tests for storage operations."""

import pandas as pd
import pytest

from src.llm_bench.models import SQLAnswer
from src.llm_bench.storage import save_sql_answer


class TestStorageOperations:
    """Tests for database storage operations"""

    def test_save_sql_answer_success(self, temp_database, sample_sql_answer):
        """Test successfully saving an SQLAnswer"""
        # Should not raise an exception
        save_sql_answer(sample_sql_answer, temp_database)

        # Verify the data was saved
        import duckdb
        conn = duckdb.connect(temp_database)
        result = conn.execute("SELECT COUNT(*) FROM sql_answers").fetchone()
        conn.close()

        assert result[0] == 1

    def test_save_sql_answer_with_data(self, temp_database):
        """Test saving SQLAnswer with DataFrame data"""
        df = pd.DataFrame({"count": [42], "total": [1000]})
        answer = SQLAnswer(
            challenge_text="Test",
            method="sql",
            model="gpt-5",
            data=df,
            is_successful=True
        )

        save_sql_answer(answer, temp_database)

        # Verify
        import duckdb
        conn = duckdb.connect(temp_database)
        result = conn.execute("SELECT data_json FROM sql_answers").fetchone()
        conn.close()

        assert result[0] is not None

    def test_save_sql_answer_with_token_usage(self, temp_database):
        """Test saving SQLAnswer with token usage"""
        answer = SQLAnswer(
            challenge_text="Test",
            method="sql",
            model="gpt-5",
            token_usage={"input_tokens": 100, "output_tokens": 50}
        )

        save_sql_answer(answer, temp_database)

        # Verify
        import duckdb
        conn = duckdb.connect(temp_database)
        result = conn.execute("SELECT token_usage FROM sql_answers").fetchone()
        conn.close()

        assert result[0] is not None

    def test_save_multiple_answers(self, temp_database):
        """Test saving multiple SQLAnswers"""
        answers = [
            SQLAnswer(
                challenge_text=f"Question {i}",
                method="sql",
                model="gpt-5"
            )
            for i in range(3)
        ]

        for answer in answers:
            save_sql_answer(answer, temp_database)

        # Verify
        import duckdb
        conn = duckdb.connect(temp_database)
        result = conn.execute("SELECT COUNT(*) FROM sql_answers").fetchone()
        conn.close()

        assert result[0] == 3

    def test_save_answer_creates_table(self, temp_database):
        """Test that saving creates the table if it doesn't exist"""
        answer = SQLAnswer(
            challenge_text="Test",
            method="sql",
            model="gpt-5"
        )

        save_sql_answer(answer, temp_database)

        # Verify table exists
        import duckdb
        conn = duckdb.connect(temp_database)
        tables = conn.execute("SHOW TABLES").fetchall()
        conn.close()

        table_names = [t[0] for t in tables]
        assert "sql_answers" in table_names

    def test_save_answer_all_fields(self, temp_database):
        """Test that all SQLAnswer fields are saved"""
        answer = SQLAnswer(
            challenge_text="Test question",
            method="sql",
            model="gpt-5",
            timing=1.5,
            sql="SELECT * FROM table",
            is_successful=True,
            error="",
            prompt="Test prompt",
            is_correct=True,
            comparison_error="",
            iteration=2,
            library="pydantic-ai"
        )

        save_sql_answer(answer, temp_database)

        # Verify all fields
        import duckdb
        conn = duckdb.connect(temp_database)
        result = conn.execute("""
            SELECT challenge_text, method, model, timing, sql, is_successful,
                   prompt, is_correct, iteration, library
            FROM sql_answers
        """).fetchone()
        conn.close()

        assert result[0] == "Test question"
        assert result[1] == "sql"
        assert result[2] == "gpt-5"
        assert result[3] == 1.5
        assert result[4] == "SELECT * FROM table"
        assert result[5] is True
        assert result[6] == "Test prompt"
        assert result[7] is True
        assert result[8] == 2
        assert result[9] == "pydantic-ai"
