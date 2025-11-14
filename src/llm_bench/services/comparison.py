"""Service for comparing query results."""

import pandas as pd
from loguru import logger

from ..models.results import ComparisonResult


class ComparisonService:
    """Service for comparing query results"""

    @staticmethod
    def compare_query_results(gold_df: pd.DataFrame, comparison_df: pd.DataFrame) -> ComparisonResult:
        """Compare gold standard results with generated query results

        The Gold dataframe is the expected result from the example query.
        Because the columns and rows can appear in an arbitrary order (and additional unnecessary columns can be returned),
        we need to work out which columns belong together before determining Execution Accuracy.

        For each column in the gold dataframe, this goes through and finds a column in the comparison df that has the same datatype and contains
        the same values. Once that's established, the comparison df gets its rows and columns re-ordered so that it can be
        passed into the equals function.
        """
        logger.debug(
            "[COMPARISON] Starting comparison\n"
            f"Gold DataFrame:\n"
            f"  Shape: {gold_df.shape}\n"
            f"  Columns: {list(gold_df.columns)}\n"
            f"  Column repr: {[repr(c) for c in gold_df.columns]}\n"
            f"  Dtypes: {gold_df.dtypes.to_dict()}\n"
            f"  Values (first 3 rows):\n{gold_df.head(3).to_string()}\n"
            f"\n"
            f"Comparison DataFrame:\n"
            f"  Shape: {comparison_df.shape}\n"
            f"  Columns: {list(comparison_df.columns)}\n"
            f"  Column repr: {[repr(c) for c in comparison_df.columns]}\n"
            f"  Dtypes: {comparison_df.dtypes.to_dict()}\n"
            f"  Values (first 3 rows):\n{comparison_df.head(3).to_string()}"
        )
        try:
            # Sort columns alphabetically to simplify comparison at the other end
            alphabetical_gold_columns = sorted(gold_df.columns)
            logger.debug(f"Alphabetically sorted gold columns: {alphabetical_gold_columns}")

            gold_comparison_column_map = {}

            for gold_column in alphabetical_gold_columns:
                gold_col_type = gold_df[gold_column].dtype
                gold_col_vals = gold_df[gold_column].sort_values().reset_index(drop=True)
                logger.debug(
                    f"Matching gold column: {repr(gold_column)}\n"
                    f"  Type: {gold_col_type}\n"
                    f"  Values: {gold_col_vals.values}"
                )

                for comparison_column in comparison_df.columns:
                    if comparison_column in gold_comparison_column_map.keys():
                        logger.debug(f"  Skipping {repr(comparison_column)}: already mapped")
                        continue
                    comparison_column_type = comparison_df[comparison_column].dtype

                    # Get comparison column values early for type checking
                    comparison_column_values = comparison_df[comparison_column].sort_values().reset_index(drop=True)

                    # Check if types are compatible (exact match or both numeric)
                    # Note: object dtype can contain Decimal or other numeric types
                    is_gold_numeric = pd.api.types.is_numeric_dtype(gold_col_type)
                    is_comp_numeric = pd.api.types.is_numeric_dtype(comparison_column_type)

                    # Check if object dtype contains numeric values (like Decimal)
                    is_gold_numeric_object = False
                    is_comp_numeric_object = False

                    if gold_col_type == object and len(gold_col_vals) > 0:
                        first_val = gold_col_vals.iloc[0]
                        is_gold_numeric_object = (isinstance(first_val, (int, float, complex)) or
                                                 hasattr(first_val, '__float__'))

                    if comparison_column_type == object and len(comparison_column_values) > 0:
                        first_val = comparison_column_values.iloc[0]
                        is_comp_numeric_object = (isinstance(first_val, (int, float, complex)) or
                                                 hasattr(first_val, '__float__'))

                    types_compatible = (
                        comparison_column_type == gold_col_type or
                        (is_gold_numeric and is_comp_numeric) or
                        (is_gold_numeric and is_comp_numeric_object) or
                        (is_gold_numeric_object and is_comp_numeric) or
                        (is_gold_numeric_object and is_comp_numeric_object)
                    )

                    if not types_compatible:
                        logger.debug(f"  {repr(comparison_column)}: types not compatible ({comparison_column_type} vs {gold_col_type})")
                        continue

                    logger.debug(
                        f"  Checking comparison column: {repr(comparison_column)}\n"
                        f"    Type: {comparison_column_type}\n"
                        f"    Values: {comparison_column_values.values}"
                    )

                    # Try exact match first
                    match = gold_col_vals.equals(comparison_column_values)

                    # For numeric columns, try approximate comparison if exact match fails
                    match_method = "exact" if match else None
                    if not match and (is_gold_numeric or is_gold_numeric_object):
                        try:
                            # Convert to float for comparison if dealing with Decimal or other numeric types
                            gold_vals_float = gold_col_vals.astype(float)
                            comp_vals_float = comparison_column_values.astype(float)

                            # Use assert_series_equal with flexible dtype checking
                            pd.testing.assert_series_equal(
                                gold_vals_float,
                                comp_vals_float,
                                check_dtype=False,
                                check_names=False,
                                atol=1e-5,
                                rtol=1e-5
                            )
                            match = True
                            match_method = "approximate (float conversion)"
                        except (AssertionError, ValueError, TypeError) as e:
                            logger.debug(f"    Approximate match failed: {str(e)[:100]}")
                            match = False

                    if match:
                        gold_comparison_column_map[comparison_column] = gold_column
                        logger.debug(f"  ✓ MATCHED: {repr(comparison_column)} -> {repr(gold_column)} ({match_method})")
                        break
                else:
                    # No match found for this gold column
                    logger.debug(f"  ✗ NO MATCH FOUND for gold column: {repr(gold_column)}")

            # Log final mapping
            mapping_str = "\n".join([f"  {repr(comp_col)} -> {repr(gold_col)}"
                                     for comp_col, gold_col in gold_comparison_column_map.items()])
            logger.debug(
                f"Column mapping complete:\n"
                f"{mapping_str}\n"
                f"Total mapped: {len(gold_comparison_column_map)} of {len(alphabetical_gold_columns)} gold columns"
            )

            # Validate that all gold columns were successfully mapped
            if len(gold_comparison_column_map) != len(alphabetical_gold_columns):
                mapped_gold_cols = set(gold_comparison_column_map.values())
                unmapped_cols = set(alphabetical_gold_columns) - mapped_gold_cols
                error_msg = (
                    f"Could not map all gold columns. Unmapped: {unmapped_cols}. "
                    f"Available comparison columns: {list(comparison_df.columns)}"
                )
                logger.error(f"Validation failed: {error_msg}")
                return ComparisonResult.error_result(error_msg)

            # Rename the comparison columns based on the established matches
            comparison_df = comparison_df.rename(columns=gold_comparison_column_map)

            # Remove any extra columns provided by the comparison query and order the columns alphabetically
            comparison_df = comparison_df[alphabetical_gold_columns].copy()

            # Order gold_df's columns alphabetically (there are no extra columns to remove)
            gold_df = gold_df.reindex(columns=alphabetical_gold_columns)

            # Sort the row values for final comparison
            gold_df = gold_df.sort_values(by=alphabetical_gold_columns).reset_index(drop=True)
            comparison_df = comparison_df.sort_values(by=alphabetical_gold_columns).reset_index(drop=True)

            # Normalize numeric columns to float for comparison
            # This handles cases where one has Decimal (object dtype) and other has float
            normalized_cols = []
            for col in alphabetical_gold_columns:
                gold_dtype = gold_df[col].dtype
                comp_dtype = comparison_df[col].dtype

                # Check if we need to normalize (one is object with numeric, other is numeric type)
                if gold_dtype == object and pd.api.types.is_numeric_dtype(comp_dtype):
                    try:
                        gold_df[col] = gold_df[col].astype(float)
                        normalized_cols.append(f"{repr(col)}: gold object->float")
                    except (ValueError, TypeError):
                        pass  # Keep as-is if conversion fails
                elif comp_dtype == object and pd.api.types.is_numeric_dtype(gold_dtype):
                    try:
                        comparison_df[col] = comparison_df[col].astype(float)
                        normalized_cols.append(f"{repr(col)}: comparison object->float")
                    except (ValueError, TypeError):
                        pass  # Keep as-is if conversion fails
                elif gold_dtype == object and comp_dtype == object:
                    # Both are object, check if they contain numeric values
                    if len(gold_df[col]) > 0:
                        first_gold = gold_df[col].iloc[0]
                        first_comp = comparison_df[col].iloc[0]
                        if (hasattr(first_gold, '__float__') and hasattr(first_comp, '__float__')):
                            try:
                                gold_df[col] = gold_df[col].astype(float)
                                comparison_df[col] = comparison_df[col].astype(float)
                                normalized_cols.append(f"{repr(col)}: both object->float")
                            except (ValueError, TypeError):
                                pass

            if normalized_cols:
                logger.debug(f"Normalized columns:\n" + "\n".join(f"  {c}" for c in normalized_cols))

            # Result for entire test run
            is_equivalent = gold_df.equals(comparison_df)
            logger.debug(f"Comparison complete: is_equivalent={is_equivalent}")
            return ComparisonResult.success_result(is_equivalent)

        except Exception as e:
            error_msg = f"Exception during comparison: {str(e)}"
            logger.error(error_msg)
            return ComparisonResult.error_result(str(e))


# Legacy function for backward compatibility
def compare_query_results(gold_df: pd.DataFrame, comparison: pd.DataFrame) -> bool:
    """Legacy function for backward compatibility"""
    result = ComparisonService.compare_query_results(gold_df, comparison)
    return result.is_equivalent
