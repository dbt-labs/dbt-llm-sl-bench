"""Service for creating charts and visualizations from benchmark results."""

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


class VisualizationService:
    """Service for creating charts and visualizations from benchmark results"""

    @staticmethod
    def insert_line_break(s: str) -> str:
        """Make chart x labels prettier by adding a line break halfway through the challenge text"""
        half_length = len(s) // 2
        space_index = s.rfind(' ', 0, half_length)
        if space_index != -1:
            return s[:space_index] + '\n' + s[space_index + 1:]
        return s[:half_length] + '\n' + s[half_length:]

    @staticmethod
    def render_results_chart(results_df: pd.DataFrame) -> None:
        """Render results as charts, supporting both old and new result formats"""
        if results_df.empty:
            print("No results to chart")
            return

        # Check if we have the new format (single strategy) or old format (multiple strategies)
        if 'strategy' in results_df.columns:
            VisualizationService._render_new_format_chart(results_df)
        else:
            VisualizationService._render_legacy_format_chart(results_df)

        # Adjust layout
        plt.tight_layout()
        plt.show()

    @staticmethod
    def _render_new_format_chart(results_df: pd.DataFrame) -> None:
        """Render chart for new format (strategy column exists)"""
        strategies = results_df['strategy'].unique()
        n_strategies = len(strategies)

        _, axes = plt.subplots(nrows=n_strategies, ncols=1, figsize=(12, 4*n_strategies), sharex=True)
        if n_strategies == 1:
            axes = [axes]  # Make it iterable for single strategy

        for i, strategy in enumerate(strategies):
            strategy_data = results_df[results_df['strategy'] == strategy]
            equivalent_data = strategy_data.groupby(['display_text', 'is_result_equivalent']).size().unstack(fill_value=0)

            # Ensure both True and False columns exist
            if True not in equivalent_data.columns:
                equivalent_data[True] = 0
            if False not in equivalent_data.columns:
                equivalent_data[False] = 0

            # Sort columns True, False
            equivalent_data = equivalent_data[[True, False]] if True in equivalent_data.columns and False in equivalent_data.columns else equivalent_data

            # Plot
            equivalent_data.plot(kind='bar', ax=axes[i], legend=True)
            axes[i].set_title(f'{strategy.replace("_", " ").title()} Strategy - Correct Responses')
            axes[i].set_ylabel('# Runs')
            axes[i].legend(loc='center left', bbox_to_anchor=(1, 0.5), title="Successful\nGeneration")

    @staticmethod
    def _render_legacy_format_chart(results_df: pd.DataFrame) -> None:
        """Render chart for legacy format (assumes semantic and SQL columns exist)"""
        semantic_equivalent = results_df.groupby(['display_text', 'is_semantic_result_equivalent']).size().unstack(fill_value=0)
        if True not in semantic_equivalent.columns:
            semantic_equivalent[True] = 0
        if False not in semantic_equivalent.columns:
            semantic_equivalent[False] = 0
        semantic_equivalent = semantic_equivalent.sort_index(level=0, axis=1, ascending=False)

        sql_equivalent = results_df.groupby(['display_text', 'is_sql_result_equivalent']).size().unstack(fill_value=0)
        if True not in sql_equivalent.columns:
            sql_equivalent[True] = 0
        if False not in sql_equivalent.columns:
            sql_equivalent[False] = 0
        sql_equivalent = sql_equivalent.sort_index(level=0, axis=1, ascending=False)

        _, axes = plt.subplots(nrows=2, ncols=1, figsize=(10,10), sharex=True)

        semantic_equivalent.plot(kind='bar', ax=axes[0], legend=True)
        axes[0].set_title('Semantic Layer Generates Correct Response')
        axes[0].set_ylabel('# Runs')
        axes[0].legend(loc='center left', bbox_to_anchor=(1, 0.5), title="Successful\nGeneration")

        sql_equivalent.plot(kind='bar', ax=axes[1], legend=True)
        axes[1].set_title('SQL Generates Correct Response')
        axes[1].set_ylabel('# Runs')
        axes[1].legend(loc='center left', bbox_to_anchor=(1, 0.5), title="Successful\nGeneration")


# Legacy functions for backward compatibility
vectorized_insert_line_break = np.vectorize(VisualizationService.insert_line_break)


def insert_line_break(s: str) -> str:
    """Legacy function for backward compatibility"""
    return VisualizationService.insert_line_break(s)


def render_df_as_chart(results_df: pd.DataFrame) -> None:
    """Legacy function for backward compatibility"""
    return VisualizationService.render_results_chart(results_df)
