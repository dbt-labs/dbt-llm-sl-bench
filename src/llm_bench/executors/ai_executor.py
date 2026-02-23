"""AI executor for running prompts with optional MCP server support."""

import asyncio
import os
from dataclasses import asdict
from typing import Any, Optional

from loguru import logger
from pydantic_ai import Agent
from pydantic_ai.models import Model
from pydantic_ai.settings import ModelSettings

from llm_bench.config.base import BaseConfig
from llm_bench.executors.mcp_server import MCPServerConfig


class AIExecutor:
    """Executor for AI prompts with optional MCP server support and token tracking."""

    def __init__(
        self,
        model: Model,
        config: BaseConfig,
        api_key: str | None = None,
        mcp_config: Optional["MCPServerConfig"] = None,
        model_settings: ModelSettings | None = None,
    ) -> None:
        logger.debug(f"[AIExecutor] Initializing with model: {model}")
        self.model = model
        self.config = config
        self.api_key = api_key or os.getenv("OPENAI_API_KEY")
        self.mcp_config = mcp_config
        self.last_usage: dict[str, Any] | None = None
        self.last_model_name: str | None = None

        # Create toolsets for the agent
        toolsets = []
        if mcp_config:
            logger.debug("[AIExecutor] Creating MCP server from config...")
            mcp_server = mcp_config.create_server()
            if mcp_server:
                toolsets.append(mcp_server)
                logger.debug("[AIExecutor] MCP server added to toolsets")
            else:
                logger.warning("[AIExecutor] MCP server creation returned None")

        # Initialize the agent
        logger.debug(f"[AIExecutor] Creating agent with {len(toolsets)} toolset(s)")
        self.agent = Agent(
            model=self.model,
            output_type=str,
            toolsets=toolsets if toolsets else None,
            model_settings=model_settings,
            system_prompt="You are an assistant that returns SQL text to be executed. Only return the raw SQL code as it will be run verbatim. No code block, no markdown, no comments, no triple backticks.",
        )
        logger.debug("[AIExecutor] Agent initialized successfully")

    def execute_prompt_sync(self, prompt: str, timeout: int = 120) -> str:
        """Synchronous execution of prompt with timeout.

        Args:
            prompt: The prompt to execute
            timeout: Timeout in seconds (default: 120)
        """
        logger.debug(f"[AIExecutor] Starting synchronous prompt execution with model {self.model}")
        logger.debug(f"[AIExecutor] Prompt length: {len(prompt)} characters, timeout: {timeout}s")

        async def run_with_cancellation():
            """Async wrapper that supports proper cancellation."""
            logger.debug(f"[AIExecutor] Calling agent.run()... (timeout: {timeout}s)")
            return await self.agent.run(prompt)

        # Execute with timeout using asyncio (supports proper cancellation)
        try:
            result = asyncio.run(asyncio.wait_for(run_with_cancellation(), timeout=timeout))
            logger.debug("[AIExecutor] agent.run() completed successfully")
        except TimeoutError:
            logger.error(f"[AIExecutor] ⏱️ TIMEOUT after {timeout}s - task cancelled")
            raise TimeoutError(f"LLM request timed out after {timeout} seconds")
        except Exception as e:
            logger.error(f"[AIExecutor] ❌ Error during execution: {e}")
            raise

        # Store usage information if available
        if hasattr(result, "usage") and result.usage:
            self.last_usage = asdict(result.usage())
            logger.debug(f"[AIExecutor] Token usage captured: {self.last_usage}")
        else:
            self.last_usage = None
            logger.debug("[AIExecutor] No token usage information available")

        # Extract resolved model name from the last model response
        self.last_model_name = None
        for message in reversed(result.all_messages()):
            if hasattr(message, "kind") and message.kind == "response":
                self.last_model_name = message.model_name
                logger.debug(f"[AIExecutor] Resolved model name: {self.last_model_name}")
                break

        logger.debug(f"[AIExecutor] Execution complete, output length: {len(result.output)} characters")
        return result.output

    def get_token_usage(self) -> dict[str, Any] | None:
        """Get token usage from the last executed prompt."""
        return self.last_usage

    def get_model_name(self) -> str | None:
        """Get the resolved model name from the last executed prompt."""
        return self.last_model_name
