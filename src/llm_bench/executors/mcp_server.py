"""MCP server configuration for optional MCP integration."""

from dataclasses import dataclass
from typing import Optional

from pydantic_ai.mcp import MCPServer, MCPServerStdio, MCPServerStreamableHTTP


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

    def create_server(self) -> Optional["MCPServer"]:
        """Create an MCP server instance based on configuration."""
        if self.server_type == "stdio" and self.command:
            return MCPServerStdio(command=self.command, args=self.args or [], tool_prefix=self.tool_prefix)
        if self.server_type == "http" and self.url:
            return MCPServerStreamableHTTP(
                url=self.url,
                tool_prefix=self.tool_prefix,
                headers=self.headers,
                timeout=float(self.timeout),  # Connection timeout in seconds
                read_timeout=float(self.timeout),  # Read timeout in seconds
            )
        return None
