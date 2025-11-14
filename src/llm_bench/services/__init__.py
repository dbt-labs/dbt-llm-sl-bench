"""Services for the benchmark tool."""

from .comparison import ComparisonService, compare_query_results
from .database import (
    DatabaseService,
    execute_sl_query,
    list_dimensions_for_metric,
    list_dimensions_for_metrics,
    list_entities_for_metric,
    list_entities_for_metrics,
    list_metrics,
)
from .query_generation import (
    MCPQueryStrategy,
    QueryGenerationService,
    QueryGenerator,
    QueryStrategy,
    SQLQueryStrategy,
    SemanticLayerQueryStrategy,
    generate_mcp_query,
    generate_semantic_layer_query,
    generate_sql_query,
)
from .visualization import (
    VisualizationService,
    insert_line_break,
    render_df_as_chart,
    vectorized_insert_line_break,
)

__all__ = [
    # Database
    "DatabaseService",
    "execute_sl_query",
    "list_metrics",
    "list_dimensions_for_metric",
    "list_entities_for_metric",
    "list_dimensions_for_metrics",
    "list_entities_for_metrics",
    # Query Generation
    "QueryStrategy",
    "SemanticLayerQueryStrategy",
    "MCPQueryStrategy",
    "SQLQueryStrategy",
    "QueryGenerationService",
    "QueryGenerator",
    "generate_semantic_layer_query",
    "generate_mcp_query",
    "generate_sql_query",
    # Comparison
    "ComparisonService",
    "compare_query_results",
    # Visualization
    "VisualizationService",
    "insert_line_break",
    "render_df_as_chart",
    "vectorized_insert_line_break",
]
