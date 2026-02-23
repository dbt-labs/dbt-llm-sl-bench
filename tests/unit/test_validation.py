"""Unit tests for configuration validation."""

import pytest

from llm_bench.config import BaseConfig, validate_configs


class TestValidateConfigs:
    """Tests for validate_configs()"""

    def test_valid_openai_model(self) -> None:
        """Valid OpenAI model passes validation"""
        configs = [BaseConfig(model_name="openai:gpt-4o")]
        validate_configs(configs)

    def test_valid_anthropic_model(self) -> None:
        """Valid Anthropic model passes validation"""
        configs = [BaseConfig(model_name="anthropic:claude-sonnet-4-5")]
        validate_configs(configs)

    def test_valid_reasoning_effort_openai(self) -> None:
        """Valid reasoning effort for OpenAI passes"""
        configs = [BaseConfig(model_name="openai:gpt-4o", reasoning_effort="high")]
        validate_configs(configs)

    def test_valid_reasoning_effort_anthropic(self) -> None:
        """Valid reasoning effort for Anthropic passes"""
        configs = [BaseConfig(model_name="anthropic:claude-sonnet-4-5", reasoning_effort="max")]
        validate_configs(configs)

    def test_missing_provider_prefix_fails(self) -> None:
        """Model name without provider prefix fails"""
        configs = [BaseConfig(model_name="gpt-5")]
        with pytest.raises(ValueError, match='must use "provider:model" format'):
            validate_configs(configs)

    def test_unknown_model_fails(self) -> None:
        """Unknown model name fails validation"""
        configs = [BaseConfig(model_name="openai:gpt-999-turbo")]
        with pytest.raises(ValueError, match="not in the PydanticAI known model registry"):
            validate_configs(configs)

    def test_invalid_reasoning_effort_openai(self) -> None:
        """Invalid reasoning effort for OpenAI fails"""
        configs = [BaseConfig(model_name="openai:gpt-4o", reasoning_effort="max")]
        with pytest.raises(ValueError, match='reasoning_effort "max" invalid for OpenAI'):
            validate_configs(configs)

    def test_invalid_reasoning_effort_anthropic(self) -> None:
        """Invalid reasoning effort for Anthropic fails"""
        configs = [BaseConfig(model_name="anthropic:claude-sonnet-4-5", reasoning_effort="xhigh")]
        with pytest.raises(ValueError, match='reasoning_effort "xhigh" invalid for Anthropic'):
            validate_configs(configs)

    def test_multiple_errors_collected(self) -> None:
        """Multiple errors are collected into one ValueError"""
        configs = [
            BaseConfig(model_name="no-prefix"),
            BaseConfig(model_name="openai:gpt-999-turbo"),
        ]
        with pytest.raises(ValueError, match="Configuration validation failed") as exc_info:
            validate_configs(configs)
        message = str(exc_info.value)
        assert "provider:model" in message
        assert "known model registry" in message

    def test_empty_config_list_passes(self) -> None:
        """Empty config list passes validation"""
        validate_configs([])
