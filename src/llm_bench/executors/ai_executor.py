"""AI executor for running prompts with optional MCP server support."""

import os
from dataclasses import asdict, dataclass
from typing import Any, Dict, Optional

from pydantic_ai import Agent

from ..config.base import BaseConfig
from .mcp_server import MCPServerConfig


class AIExecutor:
    """Executor for AI prompts with optional MCP server support and token tracking."""

    def __init__(self,
                 model: str,
                 config: BaseConfig,
                 api_key: Optional[str] = None,
                 mcp_config: Optional['MCPServerConfig'] = None) -> None:
        self.model = model
        self.config = config
        self.api_key = api_key or os.getenv("OPENAI_API_KEY")
        self.mcp_config = mcp_config
        self.last_usage: Optional[Dict[str, Any]] = None

        # Create toolsets for the agent
        toolsets = []
        if mcp_config:
            mcp_server = mcp_config.create_server()
            if mcp_server:
                toolsets.append(mcp_server)

        # Initialize the agent
        self.agent = Agent(
            model=self.model,
            output_type=str,
            toolsets=toolsets if toolsets else None,
            system_prompt="You are an assistant that returns SQL text to be executed. Only return the raw SQL code as it will be run verbatim. No code block, no markdown, no comments, no triple backticks."
        )

    def execute_prompt_sync(self, prompt: str) -> str:
        """Synchronous execution of prompt."""
        result = self.agent.run_sync(prompt)

        # Store usage information if available
        if hasattr(result, 'usage') and result.usage:
            self.last_usage = asdict(result.usage())
            print(f"Token usage captured: {self.last_usage}")
        else:
            self.last_usage = None

        return result.output

    def get_token_usage(self) -> Optional[Dict[str, Any]]:
        """Get token usage from the last executed prompt."""
        return self.last_usage
