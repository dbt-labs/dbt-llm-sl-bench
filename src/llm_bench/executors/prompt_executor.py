"""Prompt execution functions using pydantic-ai."""

from typing import Optional

from pydantic_ai.models import Model
from pydantic_ai.models.anthropic import AnthropicModel, AnthropicModelSettings
from pydantic_ai.models.openai import OpenAIResponsesModel, OpenAIResponsesModelSettings

from llm_bench.config.base import BaseConfig
from llm_bench.executors.ai_executor import AIExecutor
from llm_bench.executors.mcp_server import MCPServerConfig
from llm_bench.models.answers import QueryResult


OPENAI_REASONING_EFFORTS = {"none", "minimal", "low", "medium", "high", "xhigh"}
ANTHROPIC_REASONING_EFFORTS = {"low", "medium", "high", "max"}


def get_pydantic_ai_model(model_name: str, config: BaseConfig) -> Model:
    """Create a pydantic-ai model instance from a model name.

    If config.reasoning_effort is set, provider-specific model settings
    are passed to the model constructor.
    """
    settings = None
    effort = config.reasoning_effort

    if effort is not None:
        if model_name.startswith("gpt"):
            if effort not in OPENAI_REASONING_EFFORTS:
                raise ValueError(
                    f"Invalid reasoning_effort '{effort}' for OpenAI. Must be one of: {sorted(OPENAI_REASONING_EFFORTS)}"
                )
            settings = OpenAIResponsesModelSettings(openai_reasoning_effort=effort)
        elif model_name.startswith("claude"):
            if effort not in ANTHROPIC_REASONING_EFFORTS:
                raise ValueError(
                    f"Invalid reasoning_effort '{effort}' for Anthropic. Must be one of: {sorted(ANTHROPIC_REASONING_EFFORTS)}"
                )
            settings = AnthropicModelSettings(anthropic_effort=effort)

    if model_name.startswith("gpt"):
        return OpenAIResponsesModel(model_name, settings=settings)
    if model_name.startswith("claude"):
        return AnthropicModel(model_name, settings=settings)
    raise ValueError(f"Unsupported model name: {model_name}")


def execute_prompt_pydantic_ai(
    prompt: str, config: BaseConfig, mcp_config: Optional["MCPServerConfig"] = None
) -> QueryResult:
    """Execute prompt using pydantic-ai."""
    model = get_pydantic_ai_model(config.model_name.value, config)
    executor = AIExecutor(model=model, config=config, mcp_config=mcp_config)
    result = executor.execute_prompt_sync(prompt, timeout=config.llm_timeout)
    token_usage = executor.get_token_usage()
    model_name = executor.get_model_name()
    return QueryResult(text=result, usage=token_usage, model_name=model_name)


def execute_prompt(prompt: str, config: BaseConfig, mcp_config: Optional["MCPServerConfig"] = None) -> QueryResult:
    """Execute prompt using pydantic-ai."""
    return execute_prompt_pydantic_ai(prompt, config=config, mcp_config=mcp_config)
