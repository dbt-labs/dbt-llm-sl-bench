"""Unit tests for provider model settings."""

from llm_bench.config.base import BaseConfig
from llm_bench.executors.prompt_executor import _build_model_settings


def _config(model_name: str, effort: str | None = None) -> BaseConfig:
    config = BaseConfig(model_name=model_name)
    config.reasoning_effort = effort
    return config


class TestBuildModelSettings:
    def test_anthropic_enables_prompt_caching(self) -> None:
        settings = _build_model_settings(_config("anthropic:claude-sonnet-5"))
        assert settings is not None
        assert settings.get("anthropic_cache") is True
        assert settings.get("anthropic_cache_tool_definitions") is True
        assert settings.get("anthropic_cache_instructions") is True
        assert "anthropic_effort" not in settings

    def test_anthropic_keeps_effort_with_caching(self) -> None:
        settings = _build_model_settings(_config("anthropic:claude-sonnet-5", "high"))
        assert settings is not None
        assert settings.get("anthropic_effort") == "high"
        assert settings.get("anthropic_cache") is True

    def test_openai_without_effort_has_no_settings(self) -> None:
        """OpenAI caches prompts automatically; nothing to set."""
        assert _build_model_settings(_config("openai:gpt-5.6-luna")) is None

    def test_openai_effort(self) -> None:
        settings = _build_model_settings(_config("openai:gpt-5.6-terra", "xhigh"))
        assert settings is not None
        assert settings.get("openai_reasoning_effort") == "xhigh"
