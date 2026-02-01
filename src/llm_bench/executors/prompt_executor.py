"""Prompt execution functions supporting multiple AI libraries."""

from typing import Optional

from openai import OpenAI

from llm_bench.config.base import BaseConfig
from llm_bench.executors.ai_executor import AIExecutor
from llm_bench.executors.mcp_server import MCPServerConfig
from llm_bench.models.answers import QueryResult


# Initialize OpenAI client
client = OpenAI()


def get_pydantic_ai_model_name(model_name: str) -> str:
    """Convert model name to pydantic-ai format."""
    if model_name.startswith("gpt"):
        return f"openai:{model_name}"
    if model_name.startswith("claude"):
        return f"anthropic:{model_name}"
    raise ValueError(f"Invalid model name: {model_name}")


def execute_prompt_open_ai(prompt: str, config: BaseConfig) -> QueryResult:
    """Execute prompt using OpenAI SDK."""
    completion = client.chat.completions.create(
        model=config.model_name.value, messages=[{"role": "user", "content": prompt}]
    )
    return QueryResult(text=completion.choices[0].message.content)


def execute_prompt_pydantic_ai(
    prompt: str, config: BaseConfig, mcp_config: Optional["MCPServerConfig"] = None
) -> QueryResult:
    """Execute prompt using pydantic-ai."""
    model = get_pydantic_ai_model_name(config.model_name.value)
    executor = AIExecutor(model=model, config=config, mcp_config=mcp_config)
    result = executor.execute_prompt_sync(prompt, timeout=config.llm_timeout)
    token_usage = executor.get_token_usage()
    return QueryResult(text=result, usage=token_usage)


def execute_prompt(prompt: str, config: BaseConfig, mcp_config: Optional["MCPServerConfig"] = None) -> QueryResult:
    """Execute prompt using configured method (pydantic-ai or OpenAI SDK)."""
    if config.use_pydantic_ai:
        return execute_prompt_pydantic_ai(prompt, config=config, mcp_config=mcp_config)
    return execute_prompt_open_ai(prompt, config=config)
