"""Unit tests for visualization service."""

from llm_bench.services.visualization import VisualizationService


class TestVisualizationService:
    """Tests for VisualizationService"""

    def test_insert_line_break_short_string(self) -> None:
        """Test insert_line_break with short string"""
        text = "How many policies do we have?"
        result = VisualizationService.insert_line_break(text)
        assert "\n" in result
        assert len(result.split("\n")) == 2

    def test_insert_line_break_long_string(self) -> None:
        """Test insert_line_break with long string"""
        text = "What is the total amount of premiums that a policy holder has paid by policy number?"
        result = VisualizationService.insert_line_break(text)
        assert "\n" in result
        lines = result.split("\n")
        assert len(lines) == 2
        # Check that the break is roughly in the middle
        assert abs(len(lines[0]) - len(lines[1])) < len(text) // 2

    def test_insert_line_break_no_spaces(self) -> None:
        """Test insert_line_break with string without spaces"""
        text = "a" * 50
        result = VisualizationService.insert_line_break(text)
        assert "\n" in result

    def test_insert_line_break_preserves_content(self) -> None:
        """Test that insert_line_break preserves all content"""
        text = "How many policies do we have?"
        result = VisualizationService.insert_line_break(text)
        # Remove newline and compare
        assert result.replace("\n", " ").strip() == text.strip()
