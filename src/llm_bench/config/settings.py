"""Environment-based settings using pydantic-settings."""

from typing import TYPE_CHECKING, Literal

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


if TYPE_CHECKING:
    from llm_bench.executors.mcp_server import MCPServerConfig


class EnvSettings(BaseSettings):
    """Application settings loaded from environment variables or .env file."""

    # dbt Semantic Layer Configuration
    sl_url: str
    environment_id: str
    dbt_sl_service_token: str

    # MCP Server Configuration
    mcp_server_type: Literal["http", "stdio"] = Field(
        default="http", description="MCP server type: 'http' for remote, 'stdio' for local process"
    )

    # HTTP (remote) server configuration
    mcp_http_url: str | None = Field(default=None, description="URL for HTTP MCP server")

    # Stdio (local) server configuration
    mcp_stdio_command: str | None = Field(
        default=None, description="Command to run for stdio MCP server (e.g., 'uvx', 'npx')"
    )
    mcp_stdio_args: list[str] | None = Field(default=None, description="Arguments for stdio MCP server command")

    # Common MCP configuration
    mcp_timeout: int = Field(default=60, description="Timeout for MCP requests in seconds")
    mcp_tool_prefix: str | None = Field(default=None, description="Optional tool prefix for MCP tools")

    def create_mcp_server_config(self) -> "MCPServerConfig":
        """Create MCPServerConfig from environment settings."""
        from llm_bench.executors.mcp_server import MCPServerConfig

        if self.mcp_server_type == "stdio":
            # Validate required fields
            if not self.mcp_stdio_command:
                raise ValueError(
                    "MCP_STDIO_COMMAND is required when MCP_SERVER_TYPE is 'stdio'. Example: MCP_STDIO_COMMAND=uvx"
                )

            return MCPServerConfig(
                server_type="stdio",
                command=self.mcp_stdio_command,
                args=self.mcp_stdio_args or [],
                tool_prefix=self.mcp_tool_prefix,
                timeout=self.mcp_timeout,
            )
        # http
        if not self.mcp_http_url:
            raise ValueError(
                "MCP_HTTP_URL is required when MCP_SERVER_TYPE is 'http'. "
                "Example: MCP_HTTP_URL=https://emea.dbt.com/api/ai/v1/mcp/"
            )

        # Build headers with auth token and environment ID
        headers = {}
        if self.dbt_sl_service_token:
            headers["Authorization"] = f"token {self.dbt_sl_service_token}"
        if self.environment_id:
            headers["x-dbt-prod-environment-id"] = self.environment_id

        return MCPServerConfig(
            server_type="http",
            url=self.mcp_http_url,
            headers=headers,
            tool_prefix=self.mcp_tool_prefix,
            timeout=self.mcp_timeout,
        )

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", case_sensitive=False, extra="ignore")


# Create a singleton instance
# Note: Required fields will be loaded from environment variables or .env file
settings = EnvSettings()  # type: ignore[call-arg]
