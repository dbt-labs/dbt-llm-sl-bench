"""Unit tests for factory classes."""

import pytest

from llm_bench.config import BaseConfig, ModelName
from llm_bench.factories import SQLAnswerFactory
from llm_bench.models import QueryGenerationResult, SQLAnswerRequest


class TestSQLAnswerFactory:
    """Tests for SQLAnswerFactory"""

    @pytest.fixture
    def factory(self):
        """Create a factory with test config"""
        config = BaseConfig(model_name=ModelName.GPT_5)
        return SQLAnswerFactory(config)

    def test_factory_initialization(self, factory) -> None:
        """Test factory initializes with config"""
        assert factory.config is not None
        assert factory.config.model_name == ModelName.GPT_5

    def test_create_answer_success(self, factory) -> None:
        """Test creating a successful answer"""
        request = SQLAnswerRequest(
            challenge_text="Test question",
            method="sql",
            success=True,
            query_or_error="SELECT * FROM table",
            timing=1.5,
            prompt="Test prompt",
            token_usage={"tokens": 100},
            iteration=0,
        )
        answer = factory.create_answer(request)

        assert answer.challenge_text == "Test question"
        assert answer.method == "sql"
        assert answer.model == "gpt-5"
        assert answer.is_successful is True
        assert answer.sql == "SELECT * FROM table"
        assert answer.error == ""

    def test_create_answer_failure(self, factory) -> None:
        """Test creating a failed answer"""
        error = ValueError("Test error")
        request = SQLAnswerRequest(
            challenge_text="Test question",
            method="sql",
            success=False,
            query_or_error=error,
            timing=0.5,
            prompt="Test prompt",
            iteration=0,
        )
        answer = factory.create_answer(request)

        assert answer.is_successful is False
        assert answer.sql == ""
        assert "Test error" in answer.error

    def test_create_semantic_layer_answer(self, factory) -> None:
        """Test creating semantic layer answer"""
        answer = factory.create_semantic_layer_answer(
            question="Test question",
            success=True,
            query_or_error="SELECT * FROM {{semantic_layer.query()}}",
            prompt="Test prompt",
            timing=2.0,
            iteration=1,
        )

        assert answer.method == "semantic_layer"
        assert answer.is_successful is True
        assert answer.iteration == 1

    def test_create_mcp_answer(self, factory) -> None:
        """Test creating MCP answer"""
        answer = factory.create_mcp_answer(
            question="Test question",
            success=True,
            query_or_error="MCP query result",
            prompt="Test prompt",
            timing=1.8,
            iteration=2,
        )

        assert answer.method == "mcp"
        assert answer.is_successful is True
        assert answer.iteration == 2

    def test_create_sql_answer(self, factory) -> None:
        """Test creating SQL answer"""
        answer = factory.create_sql_answer(
            question="Test question",
            success=True,
            query_or_error="SELECT COUNT(*) FROM policies",
            timing=1.2,
            iteration=0,
        )

        assert answer.method == "sql"
        assert answer.is_successful is True
        assert answer.prompt == ""  # SQL answers don't have prompts by default

    def test_from_query_result_success(self, factory) -> None:
        """Test creating answer from QueryGenerationResult"""
        query_result = QueryGenerationResult.success_result(
            query="SELECT * FROM table", prompt="Test prompt", timing=1.5, token_usage={"tokens": 100}
        )

        answer = factory.from_query_result(question="Test question", method="sql", result=query_result, iteration=3)

        assert answer.is_successful is True
        assert answer.sql == "SELECT * FROM table"
        assert answer.prompt == "Test prompt"
        assert answer.iteration == 3
        assert answer.token_usage == {"tokens": 100}

    def test_from_query_result_failure(self, factory) -> None:
        """Test creating answer from failed QueryGenerationResult"""
        error = ValueError("Query generation failed")
        query_result = QueryGenerationResult.error_result(error=error, prompt="Test prompt", timing=0.5)

        answer = factory.from_query_result(question="Test question", method="sql", result=query_result, iteration=0)

        assert answer.is_successful is False
        assert answer.sql == ""
        assert "Query generation failed" in answer.error

    def test_answer_includes_model_name(self, factory) -> None:
        """Test that created answers include model name"""
        request = SQLAnswerRequest(
            challenge_text="Test", method="sql", success=True, query_or_error="SELECT 1", timing=1.0
        )
        answer = factory.create_answer(request)

        assert answer.model == "gpt-5"
