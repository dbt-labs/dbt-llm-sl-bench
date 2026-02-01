"""Services for the benchmark tool."""

from llm_bench.services.comparison import ComparisonService, compare_query_results
from llm_bench.services.database import (
    DatabaseService,
    execute_sl_query,
    list_dimensions_for_metric,
    list_dimensions_for_metrics,
    list_entities_for_metric,
    list_entities_for_metrics,
    list_metrics,
)
from llm_bench.services.query_generation import (
    MCPQueryStrategy,
    QueryGenerationService,
    QueryGenerator,
    QueryStrategy,
    SemanticLayerQueryStrategy,
    SQLQueryStrategy,
    generate_mcp_query,
    generate_semantic_layer_query,
    generate_sql_query,
)
from llm_bench.services.visualization import VisualizationService, insert_line_break


__all__ = [
    "ComparisonService",
    "DatabaseService",
    "MCPQueryStrategy",
    "QueryGenerationService",
    "QueryGenerator",
    "QueryStrategy",
    "SQLQueryStrategy",
    "SemanticLayerQueryStrategy",
    "VisualizationService",
    "compare_query_results",
    "execute_sl_query",
    "generate_mcp_query",
    "generate_semantic_layer_query",
    "generate_sql_query",
    "insert_line_break",
    "list_dimensions_for_metric",
    "list_dimensions_for_metrics",
    "list_entities_for_metric",
    "list_entities_for_metrics",
    "list_metrics",
]
