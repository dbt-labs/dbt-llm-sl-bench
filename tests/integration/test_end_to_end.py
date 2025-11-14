"""Integration tests for end-to-end benchmark workflows."""

import pandas as pd
import pytest

from src.llm_bench.config import SQLConfig, ModelName
from src.llm_bench.runners import run_single_benchmark
from src.llm_bench.utils.challenge_loader import load_challenges_from_ttl


class TestEndToEndBenchmark:
    """Integration tests for complete benchmark workflows"""

    @pytest.mark.integration
    @pytest.mark.skip(reason="Requires API keys and actual database connection")
    def test_single_benchmark_sql_strategy(self, temp_database):
        """Test running a complete benchmark with SQL strategy"""
        config = SQLConfig(
            model_name=ModelName.GPT_5,
            use_pydantic_ai=True,
            number_of_iterations=1,
            database_file=temp_database,
            ddl_file="ACME_small.ddl",
            selected_challenges=["How many policies do we have?"]
        )

        # Create sample challenges
        challenges = pd.DataFrame({
            "title": ["Test Challenge"],
            "challenge_text": ["How many policies do we have?"],
            "gold_query_text": ["SELECT COUNT(*) FROM policies"],
            "gold_query_id": ["q1"]
        })

        # Run benchmark
        answers, results_df = run_single_benchmark(config, challenges)

        # Verify results
        assert len(answers) >= 1
        assert not results_df.empty
        assert "strategy" in results_df.columns
        assert results_df["strategy"].iloc[0] == "sql"

    @pytest.mark.integration
    def test_challenge_loading(self, mock_ttl_file):
        """Test loading challenges from TTL file"""
        challenges = load_challenges_from_ttl(mock_ttl_file)

        assert not challenges.empty
        assert "title" in challenges.columns
        assert "challenge_text" in challenges.columns
        assert "gold_query_text" in challenges.columns

    @pytest.mark.integration
    def test_challenge_filtering(self, mock_ttl_file):
        """Test loading and filtering challenges"""
        selected = ["How many policies do we have?"]
        challenges = load_challenges_from_ttl(mock_ttl_file, selected)

        # Should only include selected challenges
        assert len(challenges) <= 1
        if len(challenges) > 0:
            assert challenges["challenge_text"].iloc[0] in selected


class TestBenchmarkWorkflow:
    """Test the complete workflow without API calls"""

    def test_config_to_services_creation(self):
        """Test creating services from config"""
        from src.llm_bench.config import config_manager

        config = SQLConfig(model_name=ModelName.GPT_5)
        services = config_manager.create_services(config)

        assert services.config == config
        assert services.database_service is not None
        assert services.query_service is not None
        assert services.comparison_service is not None
        assert services.factory is not None

    def test_benchmark_runner_initialization(self):
        """Test initializing benchmark runner"""
        from src.llm_bench.config import config_manager
        from src.llm_bench.runners import BenchmarkRunner

        config = SQLConfig(model_name=ModelName.GPT_5)
        services = config_manager.create_services(config)
        runner = BenchmarkRunner(services)

        assert runner.services == services
        assert runner.strategy == "sql"
        assert runner.sql_answers_list == []

    def test_factory_creates_consistent_answers(self):
        """Test that factory creates answers with consistent config"""
        from src.llm_bench.config import BaseConfig, ModelName
        from src.llm_bench.factories import SQLAnswerFactory
        from src.llm_bench.models import SQLAnswerRequest

        config = BaseConfig(
            model_name=ModelName.CLAUDE_SONNET_4,
            use_pydantic_ai=False
        )
        factory = SQLAnswerFactory(config)

        request = SQLAnswerRequest(
            challenge_text="Test",
            method="sql",
            success=True,
            query_or_error="SELECT 1",
            timing=1.0
        )

        answer = factory.create_answer(request)

        # Verify config is applied
        assert answer.model == ModelName.CLAUDE_SONNET_4.value
        assert answer.library == "openai-sdk"
