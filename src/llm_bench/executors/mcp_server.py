"""MCP server configuration for optional MCP integration."""

from dataclasses import dataclass
from typing import Optional

from pydantic_ai.mcp import MCPServer, MCPServerStdio, MCPServerStreamableHTTP


@dataclass
class MCPServerConfig:
    """Configuration for optional MCP server integration."""
    server_type: str = "stdio"  # "stdio", or "http"
    command: Optional[str] = None
    args: Optional[list] = None
    url: Optional[str] = None
    tool_prefix: Optional[str] = None
    headers: Optional[dict] = None

    def create_server(self) -> Optional['MCPServer']:
        """Create an MCP server instance based on configuration."""
        if self.server_type == "stdio" and self.command:
            return MCPServerStdio(
                command=self.command,
                args=self.args or [],
                tool_prefix=self.tool_prefix
            )
        elif self.server_type == "http" and self.url:
            return MCPServerStreamableHTTP(
                url=self.url,
                tool_prefix=self.tool_prefix,
                headers=self.headers,
            )
        return None
