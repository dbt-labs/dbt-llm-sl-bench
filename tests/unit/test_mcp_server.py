"""Unit tests for MCP server config: tool-error retries."""

from llm_bench.executors.mcp_server import MCPServerConfig


def _stdio(**kwargs: int | None) -> MCPServerConfig:
    return MCPServerConfig(server_type="stdio", command="echo", args=[], **kwargs)


class TestMaxRetries:
    def test_default_keeps_pydantic_ai_default(self) -> None:
        """Unset, the toolset defers to the agent's default (1 retry)."""
        toolset = _stdio().create_server()
        assert toolset is not None
        assert toolset.max_retries is None

    def test_max_retries_is_passed_to_the_toolset(self) -> None:
        toolset = _stdio(max_retries=8).create_server()
        assert toolset is not None
        assert toolset.max_retries == 8

    def test_http_max_retries(self) -> None:
        toolset = MCPServerConfig(server_type="http", url="https://example.com/mcp", max_retries=8).create_server()
        assert toolset is not None
        assert toolset.max_retries == 8

    def test_settings_pass_max_retries(self) -> None:
        from llm_bench.config.settings import EnvSettings

        s = EnvSettings(mcp_server_type="stdio", mcp_stdio_command="echo", mcp_max_retries=8)
        assert s.create_mcp_server_config().max_retries == 8
