"""Unit tests for comparison service."""

import pandas as pd
import pytest

from src.llm_bench.services.comparison import ComparisonService


class TestComparisonService:
    """Tests for ComparisonService"""

    def test_compare_identical_dataframes(self):
        """Test comparing identical dataframes"""
        df1 = pd.DataFrame({"a": [1, 2, 3], "b": [4, 5, 6]})
        df2 = pd.DataFrame({"a": [1, 2, 3], "b": [4, 5, 6]})

        result = ComparisonService.compare_query_results(df1, df2)
        assert result.is_equivalent is True
        assert result.error is None

    def test_compare_reordered_columns(self):
        """Test comparing dataframes with reordered columns"""
        df1 = pd.DataFrame({"a": [1, 2, 3], "b": [4, 5, 6]})
        df2 = pd.DataFrame({"b": [4, 5, 6], "a": [1, 2, 3]})

        result = ComparisonService.compare_query_results(df1, df2)
        assert result.is_equivalent is True
        assert result.error is None

    def test_compare_reordered_rows(self):
        """Test comparing dataframes with reordered rows"""
        df1 = pd.DataFrame({"a": [1, 2, 3], "b": [4, 5, 6]})
        df2 = pd.DataFrame({"a": [3, 1, 2], "b": [6, 4, 5]})

        result = ComparisonService.compare_query_results(df1, df2)
        assert result.is_equivalent is True
        assert result.error is None

    def test_compare_different_values(self):
        """Test comparing dataframes with different values"""
        df1 = pd.DataFrame({"a": [1, 2, 3], "b": [4, 5, 6]})
        df2 = pd.DataFrame({"a": [1, 2, 4], "b": [4, 5, 6]})

        result = ComparisonService.compare_query_results(df1, df2)
        assert result.is_equivalent is False
        assert result.error is None

    def test_compare_extra_columns(self):
        """Test comparing dataframes where comparison has extra columns"""
        df1 = pd.DataFrame({"a": [1, 2, 3], "b": [4, 5, 6]})
        df2 = pd.DataFrame({"a": [1, 2, 3], "b": [4, 5, 6], "c": [7, 8, 9]})

        result = ComparisonService.compare_query_results(df1, df2)
        # Should still match if the required columns are present
        assert result.is_equivalent is True
        assert result.error is None

    def test_compare_missing_columns(self):
        """Test comparing dataframes where comparison is missing columns"""
        df1 = pd.DataFrame({"a": [1, 2, 3], "b": [4, 5, 6]})
        df2 = pd.DataFrame({"a": [1, 2, 3]})

        result = ComparisonService.compare_query_results(df1, df2)
        # Should fail because required column is missing
        assert result.is_equivalent is False
        assert result.error is not None

    def test_compare_different_types(self):
        """Test comparing dataframes with different column types"""
        df1 = pd.DataFrame({"a": [1, 2, 3]})
        df2 = pd.DataFrame({"a": ["1", "2", "3"]})

        result = ComparisonService.compare_query_results(df1, df2)
        assert result.is_equivalent is False

    def test_compare_empty_dataframes(self):
        """Test comparing empty dataframes"""
        df1 = pd.DataFrame()
        df2 = pd.DataFrame()

        result = ComparisonService.compare_query_results(df1, df2)
        assert result.is_equivalent is True

    def test_compare_single_column(self):
        """Test comparing dataframes with single column"""
        df1 = pd.DataFrame({"count": [42]})
        df2 = pd.DataFrame({"count": [42]})

        result = ComparisonService.compare_query_results(df1, df2)
        assert result.is_equivalent is True

    def test_compare_renamed_columns(self):
        """Test comparing dataframes with different column names but same values"""
        df1 = pd.DataFrame({"policy_count": [42]})
        df2 = pd.DataFrame({"total_policies": [42]})

        # Should match based on values, not column names
        result = ComparisonService.compare_query_results(df1, df2)
        assert result.is_equivalent is True
