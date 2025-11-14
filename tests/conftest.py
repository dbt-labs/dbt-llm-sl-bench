"""Pytest configuration and shared fixtures for benchmark tests."""

import pandas as pd
import pytest

from src.llm_bench.config import BaseConfig, MCPConfig, ModelName, SQLConfig, SemanticLayerConfig
from src.llm_bench.models import (
    ComparisonResult,
    DatabaseExecutionResult,
    QueryGenerationResult,
    QueryResult,
    SQLAnswer,
)


# Configuration Fixtures
@pytest.fixture
def base_config():
    """Basic configuration for testing"""
    return BaseConfig(
        model_name=ModelName.GPT_5,
        use_pydantic_ai=True,
        number_of_iterations=1,
        database_file="test_llm_bench.db",
        ddl_file="ACME_small.ddl",
        benchmark_questions_file="benchmark_questions.ttl"
    )


@pytest.fixture
def semantic_layer_config():
    """Semantic layer configuration for testing"""
    return SemanticLayerConfig(
        model_name=ModelName.GPT_5,
        use_pydantic_ai=True,
        number_of_iterations=1,
        database_file="test_llm_bench.db"
    )


@pytest.fixture
def mcp_config():
    """MCP configuration for testing"""
    return MCPConfig(
        model_name=ModelName.GPT_5,
        use_pydantic_ai=True,
        number_of_iterations=1,
        database_file="test_llm_bench.db"
    )


@pytest.fixture
def sql_config():
    """SQL configuration for testing"""
    return SQLConfig(
        model_name=ModelName.GPT_5,
        use_pydantic_ai=True,
        number_of_iterations=1,
        database_file="test_llm_bench.db"
    )


# Model Fixtures
@pytest.fixture
def sample_sql_answer():
    """Sample SQLAnswer for testing"""
    return SQLAnswer(
        challenge_text="How many policies do we have?",
        method="sql",
        model="gpt-5",
        timing=1.5,
        sql="SELECT COUNT(*) FROM policies",
        is_successful=True,
        library="pydantic-ai",
        iteration=0
    )


@pytest.fixture
def sample_query_result():
    """Sample QueryResult for testing"""
    return QueryResult(
        text="SELECT COUNT(*) FROM policies",
        usage={"input_tokens": 100, "output_tokens": 50}
    )


@pytest.fixture
def sample_query_generation_result():
    """Sample successful QueryGenerationResult"""
    return QueryGenerationResult.success_result(
        query="SELECT COUNT(*) FROM policies",
        prompt="Test prompt",
        timing=1.5,
        token_usage={"input_tokens": 100, "output_tokens": 50}
    )


@pytest.fixture
def sample_database_execution_result():
    """Sample successful DatabaseExecutionResult"""
    df = pd.DataFrame({"count": [42]})
    return DatabaseExecutionResult.success_result(df)


@pytest.fixture
def sample_comparison_result():
    """Sample successful ComparisonResult"""
    return ComparisonResult.success_result(is_equivalent=True)


# DataFrame Fixtures
@pytest.fixture
def sample_dataframe():
    """Sample DataFrame for testing"""
    return pd.DataFrame({
        "policy_id": [1, 2, 3],
        "amount": [100.0, 200.0, 300.0],
        "status": ["active", "active", "pending"]
    })


@pytest.fixture
def sample_gold_dataframe():
    """Sample gold standard DataFrame"""
    return pd.DataFrame({
        "count": [42],
        "total_amount": [1500.0]
    })


@pytest.fixture
def sample_challenges_dataframe():
    """Sample challenges DataFrame"""
    return pd.DataFrame({
        "title": ["Test Challenge 1", "Test Challenge 2"],
        "challenge_text": [
            "How many policies do we have?",
            "What is the total amount of premiums?"
        ],
        "gold_query_text": [
            "SELECT COUNT(*) FROM policies",
            "SELECT SUM(premium_amount) FROM premiums"
        ],
        "gold_query_id": ["q1", "q2"]
    })


# Mock Response Fixtures
@pytest.fixture
def mock_openai_response():
    """Mock OpenAI API response"""
    class MockChoice:
        def __init__(self, text):
            self.message = type('obj', (object,), {'content': text})()

    class MockCompletion:
        def __init__(self, text):
            self.choices = [MockChoice(text)]

    return MockCompletion("SELECT COUNT(*) FROM policies")


@pytest.fixture
def mock_pydantic_ai_response():
    """Mock pydantic-ai response"""
    class MockResult:
        def __init__(self, text):
            self.output = text
            self._usage = {"input_tokens": 100, "output_tokens": 50}

        def usage(self):
            return type('obj', (object,), self._usage)()

    return MockResult("SELECT COUNT(*) FROM policies")


# Context Fixtures
@pytest.fixture
def sample_metric_context():
    """Sample metric context for semantic layer queries"""
    return {
        'metric_details': "NAME: policy_count\nDESCRIPTION: Count of policies",
        'dimension_details': "NAME: policy_date\nDESCRIPTION: Policy date",
        'entity_details': "NAME: policy\nDESCRIPTION: Policy entity"
    }


# Cleanup Fixture
@pytest.fixture
def temp_database(tmp_path):
    """Temporary database file for testing"""
    db_file = tmp_path / "test_benchmark.db"
    yield str(db_file)
    # Cleanup happens automatically with tmp_path


@pytest.fixture
def mock_ddl_file(tmp_path):
    """Mock DDL file for testing"""
    ddl_content = """
    CREATE TABLE policies (
        policy_id INTEGER PRIMARY KEY,
        policy_number VARCHAR(50),
        premium_amount DECIMAL(10,2)
    );
    """
    ddl_file = tmp_path / "test.ddl"
    ddl_file.write_text(ddl_content)
    return str(ddl_file)


@pytest.fixture
def mock_ttl_file(tmp_path):
    """Mock TTL file for testing"""
    ttl_content = """
    @prefix QandA: <http://models.data.world/benchmarks/QandA#> .
    @prefix dct: <http://purl.org/dc/terms/> .
    @prefix dwt: <https://templates.data.world/> .
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

    <http://example.org/query1> a dwt:SqlQuery ;
        dct:title "Test Query 1" ;
        dct:description "How many policies do we have?" ;
        QandA:queryText "SELECT COUNT(*) FROM policies" .
    """
    ttl_file = tmp_path / "test_questions.ttl"
    ttl_file.write_text(ttl_content)
    return str(ttl_file)
