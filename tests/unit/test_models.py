"""Unit tests for data models."""

import time

import pandas as pd

from llm_bench.models import (
    ComparisonResult,
    DatabaseExecutionResult,
    QueryGenerationResult,
    QueryRequest,
    QueryResult,
    SQLAnswer,
    SQLAnswerRequest,
)


class TestSQLAnswer:
    """Tests for SQLAnswer dataclass"""

    def test_sql_answer_creation(self, sample_sql_answer) -> None:
        """Test creating a SQLAnswer"""
        assert sample_sql_answer.challenge_text == "How many policies do we have?"
        assert sample_sql_answer.method == "sql"
        assert sample_sql_answer.model == "openai:gpt-5"
        assert sample_sql_answer.is_successful is True

    def test_sql_answer_defaults(self) -> None:
        """Test SQLAnswer default values"""
        answer = SQLAnswer(challenge_text="Test question", method="sql", model="gpt-5")
        assert answer.timing == 0
        assert answer.sql == ""
        assert answer.is_successful is False
        assert answer.error == ""
        assert answer.is_correct is False

    def test_sql_answer_with_data(self) -> None:
        """Test SQLAnswer with DataFrame data"""
        df = pd.DataFrame({"count": [42]})
        answer = SQLAnswer(challenge_text="Test", method="sql", model="gpt-5", data=df)
        assert not answer.data.empty
        assert answer.data["count"][0] == 42

    def test_sql_answer_timestamp(self) -> None:
        """Test SQLAnswer has a timestamp"""
        before = time.time()
        answer = SQLAnswer(challenge_text="Test", method="sql", model="gpt-5")
        after = time.time()
        assert before <= answer.timestamp <= after


class TestQueryResult:
    """Tests for QueryResult dataclass"""

    def test_query_result_creation(self, sample_query_result) -> None:
        """Test creating a QueryResult"""
        assert sample_query_result.text == "SELECT COUNT(*) FROM policies"
        assert sample_query_result.usage is not None
        assert sample_query_result.usage["input_tokens"] == 100

    def test_query_result_without_usage(self) -> None:
        """Test QueryResult without usage data"""
        result = QueryResult(text="SELECT * FROM table")
        assert result.text == "SELECT * FROM table"
        assert result.usage is None


class TestQueryRequest:
    """Tests for QueryRequest dataclass"""

    def test_query_request_creation(self) -> None:
        """Test creating a QueryRequest"""
        request = QueryRequest(question="How many rows?")
        assert request.question == "How many rows?"
        assert request.context is None

    def test_query_request_with_context(self) -> None:
        """Test QueryRequest with context"""
        context = {"metric_details": "test"}
        request = QueryRequest(question="Test?", context=context)
        assert request.context == context
        assert request.context is not None
        assert request.context["metric_details"] == "test"


class TestSQLAnswerRequest:
    """Tests for SQLAnswerRequest dataclass"""

    def test_sql_answer_request_creation(self) -> None:
        """Test creating a SQLAnswerRequest"""
        request = SQLAnswerRequest(
            challenge_text="Test question", method="sql", success=True, query_or_error="SELECT * FROM table", timing=1.5
        )
        assert request.challenge_text == "Test question"
        assert request.success is True
        assert request.query_or_error == "SELECT * FROM table"

    def test_sql_answer_request_with_error(self) -> None:
        """Test SQLAnswerRequest with error"""
        error = ValueError("Test error")
        request = SQLAnswerRequest(challenge_text="Test", method="sql", success=False, query_or_error=error, timing=0.5)
        assert request.success is False
        assert isinstance(request.query_or_error, ValueError)


class TestQueryGenerationResult:
    """Tests for QueryGenerationResult dataclass"""

    def test_query_generation_result_success(self, sample_query_generation_result) -> None:
        """Test successful QueryGenerationResult"""
        assert sample_query_generation_result.success is True
        assert sample_query_generation_result.query == "SELECT COUNT(*) FROM policies"
        assert sample_query_generation_result.error is None

    def test_query_generation_result_success_factory(self) -> None:
        """Test QueryGenerationResult.success_result factory"""
        result = QueryGenerationResult.success_result(
            query="SELECT * FROM table", prompt="Test prompt", timing=1.0, token_usage={"tokens": 100}
        )
        assert result.success is True
        assert result.query == "SELECT * FROM table"
        assert result.error is None
        assert result.timing == 1.0

    def test_query_generation_result_error_factory(self) -> None:
        """Test QueryGenerationResult.error_result factory"""
        error = ValueError("Test error")
        result = QueryGenerationResult.error_result(error=error, prompt="Test prompt", timing=0.5)
        assert result.success is False
        assert result.query == ""
        assert result.error == error
        assert result.token_usage is None


class TestDatabaseExecutionResult:
    """Tests for DatabaseExecutionResult dataclass"""

    def test_database_execution_result_success(self, sample_database_execution_result) -> None:
        """Test successful DatabaseExecutionResult"""
        assert sample_database_execution_result.success is True
        assert not sample_database_execution_result.data.empty
        assert sample_database_execution_result.error is None

    def test_database_execution_result_success_factory(self) -> None:
        """Test DatabaseExecutionResult.success_result factory"""
        df = pd.DataFrame({"col": [1, 2, 3]})
        result = DatabaseExecutionResult.success_result(df)
        assert result.success is True
        assert len(result.data) == 3
        assert result.error is None

    def test_database_execution_result_error_factory(self) -> None:
        """Test DatabaseExecutionResult.error_result factory"""
        result = DatabaseExecutionResult.error_result("Connection failed")
        assert result.success is False
        assert result.data.empty
        assert result.error == "Connection failed"


class TestComparisonResult:
    """Tests for ComparisonResult dataclass"""

    def test_comparison_result_success(self, sample_comparison_result) -> None:
        """Test successful ComparisonResult"""
        assert sample_comparison_result.is_equivalent is True
        assert sample_comparison_result.error is None

    def test_comparison_result_success_factory_true(self) -> None:
        """Test ComparisonResult.success_result with equivalent=True"""
        result = ComparisonResult.success_result(is_equivalent=True)
        assert result.is_equivalent is True
        assert result.error is None

    def test_comparison_result_success_factory_false(self) -> None:
        """Test ComparisonResult.success_result with equivalent=False"""
        result = ComparisonResult.success_result(is_equivalent=False)
        assert result.is_equivalent is False
        assert result.error is None

    def test_comparison_result_error_factory(self) -> None:
        """Test ComparisonResult.error_result factory"""
        result = ComparisonResult.error_result("Column mismatch")
        assert result.is_equivalent is False
        assert result.error == "Column mismatch"
