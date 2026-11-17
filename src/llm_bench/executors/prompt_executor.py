"""Prompt execution functions using pydantic-ai."""

from typing import Optional

from pydantic_ai.models import Model, infer_model
from pydantic_ai.models.anthropic import AnthropicModel, AnthropicModelSettings
from pydantic_ai.models.openai import OpenAIResponsesModel, OpenAIResponsesModelSettings
from pydantic_ai.settings import ModelSettings

from llm_bench.config.base import BaseConfig
from llm_bench.executors.ai_executor import AIExecutor
from llm_bench.executors.mcp_server import MCPServerConfig
from llm_bench.models.answers import QueryResult


def _create_model(model_name: str) -> Model:
    """Create a pydantic-ai Model from a 'provider:model' string."""
    provider, bare_name = model_name.split(":", 1)
    if provider == "openai":
        return OpenAIResponsesModel(bare_name)
    if provider == "anthropic":
        return AnthropicModel(bare_name)
    return infer_model(model_name)


def _build_model_settings(config: BaseConfig) -> ModelSettings | None:
    """Build provider-specific model settings from config.

    Anthropic prompt caching is opt-in, so it's always enabled here: the MCP strategies resend the
    tool definitions, instructions and growing history on every turn. OpenAI caches automatically.
    """
    effort = config.reasoning_effort
    provider = config.model_name.split(":")[0]

    if provider == "anthropic":
        settings = AnthropicModelSettings(
            anthropic_cache=True,
            anthropic_cache_tool_definitions=True,
            anthropic_cache_instructions=True,
        )
        if effort is not None:
            settings["anthropic_effort"] = effort
        return settings
    if effort is None:
        return None
    if provider == "openai":
        return OpenAIResponsesModelSettings(openai_reasoning_effort=effort)
    return None


def execute_prompt_pydantic_ai(
    prompt: str, config: BaseConfig, mcp_config: Optional["MCPServerConfig"] = None
) -> QueryResult:
    """Execute prompt using pydantic-ai."""
    model = _create_model(config.model_name)
    model_settings = _build_model_settings(config)
    executor = AIExecutor(model=model, config=config, mcp_config=mcp_config, model_settings=model_settings)
    result = executor.execute_prompt_sync(prompt, timeout=config.llm_timeout)
    token_usage = executor.get_token_usage()
    model_name = executor.get_model_name()
    return QueryResult(text=result, usage=token_usage, model_name=model_name)


def execute_prompt(prompt: str, config: BaseConfig, mcp_config: Optional["MCPServerConfig"] = None) -> QueryResult:
    """Execute prompt using pydantic-ai."""
    return execute_prompt_pydantic_ai(prompt, config=config, mcp_config=mcp_config)
