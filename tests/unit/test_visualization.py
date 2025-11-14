"""Unit tests for visualization service."""

import pandas as pd
import pytest

from src.llm_bench.services.visualization import VisualizationService


class TestVisualizationService:
    """Tests for VisualizationService"""

    def test_insert_line_break_short_string(self):
        """Test insert_line_break with short string"""
        text = "How many policies do we have?"
        result = VisualizationService.insert_line_break(text)
        assert "\n" in result
        assert len(result.split("\n")) == 2

    def test_insert_line_break_long_string(self):
        """Test insert_line_break with long string"""
        text = "What is the total amount of premiums that a policy holder has paid by policy number?"
        result = VisualizationService.insert_line_break(text)
        assert "\n" in result
        lines = result.split("\n")
        assert len(lines) == 2
        # Check that the break is roughly in the middle
        assert abs(len(lines[0]) - len(lines[1])) < len(text) // 2

    def test_insert_line_break_no_spaces(self):
        """Test insert_line_break with string without spaces"""
        text = "a" * 50
        result = VisualizationService.insert_line_break(text)
        assert "\n" in result

    def test_insert_line_break_preserves_content(self):
        """Test that insert_line_break preserves all content"""
        text = "How many policies do we have?"
        result = VisualizationService.insert_line_break(text)
        # Remove newline and compare
        assert result.replace("\n", " ").strip() == text.strip()

    def test_render_results_chart_empty_dataframe(self, capsys):
        """Test render_results_chart with empty dataframe"""
        df = pd.DataFrame()
        VisualizationService.render_results_chart(df)
        captured = capsys.readouterr()
        assert "No results to chart" in captured.out

    def test_render_results_chart_new_format(self):
        """Test render_results_chart with new format (strategy column)"""
        df = pd.DataFrame({
            "strategy": ["sql", "sql", "mcp", "mcp"],
            "display_text": ["Test 1", "Test 1", "Test 2", "Test 2"],
            "is_result_equivalent": [True, False, True, True]
        })
        # Just verify it doesn't crash
        try:
            import matplotlib
            matplotlib.use('Agg')  # Use non-interactive backend
            VisualizationService.render_results_chart(df)
        except Exception as e:
            pytest.fail(f"render_results_chart raised exception: {e}")

    def test_render_results_chart_legacy_format(self):
        """Test render_results_chart with legacy format"""
        df = pd.DataFrame({
            "display_text": ["Test 1", "Test 1", "Test 2", "Test 2"],
            "is_semantic_result_equivalent": [True, False, True, True],
            "is_sql_result_equivalent": [True, True, False, True]
        })
        # Just verify it doesn't crash
        try:
            import matplotlib
            matplotlib.use('Agg')
            VisualizationService.render_results_chart(df)
        except Exception as e:
            pytest.fail(f"render_results_chart raised exception: {e}")
