"""MCP server configuration for optional MCP integration."""

from dataclasses import dataclass
from typing import Optional

from pydantic_ai.mcp import MCPToolset, StdioTransport
from pydantic_ai.toolsets import AbstractToolset


@dataclass
class MCPServerConfig:
    """Configuration for optional MCP server integration."""

    server_type: str = "stdio"  # "stdio", or "http"
    command: str | None = None
    args: list | None = None
    url: str | None = None
    tool_prefix: str | None = None
    headers: dict | None = None
    timeout: int = 60  # HTTP timeout in seconds for MCP requests

    def create_server(self) -> Optional["AbstractToolset"]:
        """Create an MCP server instance based on configuration."""
        toolset: AbstractToolset | None = None
        if self.server_type == "stdio" and self.command:
            toolset = MCPToolset(StdioTransport(command=self.command, args=self.args or []))
        elif self.server_type == "http" and self.url:
            toolset = MCPToolset(
                self.url,
                headers=self.headers,
                init_timeout=float(self.timeout),  # Connection timeout in seconds
                read_timeout=float(self.timeout),  # Read timeout in seconds
            )

        if toolset is not None and self.tool_prefix:
            toolset = toolset.prefixed(self.tool_prefix)
        return toolset
