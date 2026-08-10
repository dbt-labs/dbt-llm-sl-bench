"""Unit tests for the AI executor's output cleanup."""

from llm_bench.executors.ai_executor import _strip_code_fence


class TestStripCodeFence:
    """Tests for _strip_code_fence()"""

    def test_strips_fenced_sql_block(self) -> None:
        text = "```sql\nSELECT 1;\n```"
        assert _strip_code_fence(text) == "SELECT 1;"

    def test_strips_fence_without_language_tag(self) -> None:
        text = "```\nSELECT 1;\n```"
        assert _strip_code_fence(text) == "SELECT 1;"

    def test_leaves_unfenced_text_unchanged(self) -> None:
        text = "SELECT 1;"
        assert _strip_code_fence(text) == "SELECT 1;"

    def test_leaves_inline_backticks_in_body_untouched(self) -> None:
        text = "SELECT `col` FROM t;"
        assert _strip_code_fence(text) == "SELECT `col` FROM t;"
