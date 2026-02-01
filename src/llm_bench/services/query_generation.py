"""Service for generating queries using different strategies."""

import time
from abc import ABC, abstractmethod

from loguru import logger

from llm_bench.config.base import BaseConfig
from llm_bench.config.settings import settings
from llm_bench.executors.prompt_executor import execute_prompt
from llm_bench.models.requests import QueryRequest
from llm_bench.models.results import QueryGenerationResult


class QueryStrategy(ABC):
    """Abstract base class for different query generation strategies"""

    @abstractmethod
    def generate_query(self, request: QueryRequest) -> QueryGenerationResult:
        """Generate a query for the given question"""
        pass


class SemanticLayerQueryStrategy(QueryStrategy):
    """Strategy for generating semantic layer queries"""

    def __init__(self, config: BaseConfig) -> None:
        self.config = config

    def generate_query(self, request: QueryRequest) -> QueryGenerationResult:
        start_time = time.time()
        logger.debug(f"[SemanticLayer] Starting query generation for: {request.question[:50]}...")

        if not request.context or not all(
            k in request.context for k in ["metric_details", "dimension_details", "entity_details"]
        ):
            error = ValueError(
                "SemanticLayerQueryStrategy requires metric_details, dimension_details, and entity_details in context"
            )
            logger.error("[SemanticLayer] Missing required context")
            return QueryGenerationResult.error_result(error, "", time.time() - start_time)

        prompt = r"""
        Queries to the dbt semantic layer look like this:

        select * from {{
            semantic_layer.query(metrics=['food_order_amount', 'order_gross_profit'],
            group_by=[Dimension('primary_entity__dimension').grain('month'), 'customer__customer_type'],
            where="{{ Dimension('primary_entity__filter_dim_1') }} = 'A' AND {{ Dimension('secondary_entity__filter_dim_2') }} = False"
            }}

        or

        select * from {{
            semantic_layer.query(metrics=['food_order_amount'])
        }}

        Below is a markdown table describing the parameters available when building a query
        | Parameter | Description  | Example    | Type |
        | --------- | -----------| ------------ | -------------------- |
        | `metrics`   | The metric name as defined in your dbt metric configuration   | `metrics=['revenue']` | Required    |
        | `group_by`  | Dimension names or entities to group by. We require a reference to the entity of the dimension (other than for the primary time dimension), which is pre-appended to the front of the dimension name with a double underscore. | `group_by=['user__country', 'metric_time']`     | Optional   |
        | `grain`   | A parameter specific to any time dimension and changes the grain of the data from the default for the metric. | `group_by=[Dimension('metric_time')` <br/> `grain('week\|day\|month\|quarter\|year')]` | Optional     |
        | `where`     | A where clause that allows you to filter on dimensions and entities using parameters. This takes a filter list OR string. Inputs come with `Dimension`, and `Entity` objects. Granularity is required if the `Dimension` is a time dimension | "{{ where=Dimension('customer__country') }} = 'US')"   | Optional   |
        | `limit`   | Limit the data returned    | `limit=10` | Optional  |
        |`order`  | Order the data returned by a particular field     | `order_by=['order_gross_profit']`, use `-` for descending, or full object notation if the object is operated on: `order_by=[Metric('order_gross_profit').descending(True)`]   | Optional   |
        | `compile`   | If true, returns generated SQL for the data platform but does not execute | `compile=True`   | Optional |

        The following is the definition for the metrics and dimensions available to you in the dbt Semantic Layer, from a stringified dataframe. Metrics:

        """

        prompt += request.context["metric_details"]
        prompt += """
            Dimensions:

        """
        prompt += request.context["dimension_details"]
        prompt += request.context["entity_details"]
        prompt += """
        Write a query to answer the following question. Do not explain the query, and do not say 'here is the query'. Return just the query, so it can be run
        verbatim from your response.

        Here's the question:
        """
        prompt += request.question

        try:
            logger.debug("[SemanticLayer] Executing prompt via LLM...")
            query_result = execute_prompt(prompt, self.config)
            timing = time.time() - start_time
            logger.info(f"[SemanticLayer] ✅ Generated SL query (took {timing:.2f}s)")
            logger.debug(f"[SemanticLayer] Query result: {query_result.text[:100]}...")
            return QueryGenerationResult.success_result(query_result.text, prompt, timing, query_result.usage)
        except Exception as e:
            timing = time.time() - start_time
            logger.error(f"[SemanticLayer] ❌ Failed to generate query after {timing:.2f}s: {e}")
            return QueryGenerationResult.error_result(e, prompt, timing)


class MCPQueryStrategy(QueryStrategy):
    """Strategy for generating MCP queries"""

    def __init__(self, config: BaseConfig) -> None:
        self.config = config

    def generate_query(self, request: QueryRequest) -> QueryGenerationResult:
        start_time = time.time()
        logger.debug(f"[MCP] Starting query generation for: {request.question[:50]}...")

        prompt = """
        Using the MCP tools, answer the following question.
        - Only provide the final answer that comes from a call to the tool `get_metrics_compiled_sql`. Do not write any SQL yourself.
        - Before calling the tool `get_metrics_compiled_sql`, check the instructions of the tool `query_metrics` to understand how to provide the parameters, but don't call the `query_metrics` tool directly
        - When calling the tool `list_metrics`, never use `search`. Always get all of them and search by yourself.
        - In your answer, add in the first lines SQL comments with each tool that was called and the parameters used.
        - After the comments on the tools called, add the query in plain text with no more comments or markdown formatting.
          - IMPORTANT: Do not add any commentary like "Perfect! I have the SQL. ..." ; just provide comments on the tools and the SQL uncommented
          - IMPORTANT: I will run the text as-is on my data warehouse and any non-commented out text will cause errors.

        """
        prompt += request.question

        # Create base MCP config from environment
        logger.debug("[MCP] Creating MCP server config from environment settings...")
        mcp_config = settings.create_mcp_server_config()

        # Add strategy-specific headers if HTTP
        if mcp_config.server_type == "http":
            if mcp_config.headers is None:
                mcp_config.headers = {}
            mcp_config.headers.update(
                {
                    "x-dbt-disable-tools": ",".join(
                        [
                            # "query_metrics"
                        ]
                    ),
                    "x-dbt-disable-toolsets": ",".join(
                        ["sql", "discovery", "dbt_cli", "admin_api", "dbt_codegen", "dbt_lsp"]
                    ),
                }
            )

        logger.debug(f"[MCP] Using {mcp_config.server_type} MCP server")

        try:
            logger.debug("[MCP] Executing prompt via LLM with MCP tools...")
            query_result = execute_prompt(prompt, self.config, mcp_config=mcp_config)
            timing = time.time() - start_time
            logger.info(f"[MCP] ✅ Generated MCP SL query (took {timing:.2f}s)")
            logger.debug(f"[MCP] Query result: {query_result.text[:100]}...")
            return QueryGenerationResult.success_result(query_result.text, prompt, timing, query_result.usage)
        except Exception as e:
            timing = time.time() - start_time
            logger.error(f"[MCP] ❌ Failed to generate query after {timing:.2f}s: {e}")
            return QueryGenerationResult.error_result(e, prompt, timing)


class SQLQueryStrategy(QueryStrategy):
    """Strategy for generating SQL queries"""

    def __init__(self, config: BaseConfig) -> None:
        self.config = config

    def generate_query(self, request: QueryRequest) -> QueryGenerationResult:
        start_time = time.time()
        logger.debug(f"[SQL] Starting query generation for: {request.question[:50]}...")

        # Read SQL DDL from file
        logger.debug(f"[SQL] Reading DDL from file: {self.config.ddl_file}")
        with open(self.config.ddl_file) as ddl_file:
            sql_ddl = ddl_file.read()

        prompt = f"""
        Given the database described by the following DDL:
        {sql_ddl}

        Write a SQL query that answers the following question. Do not explain the query. return just the query, so it can be run
        verbatim from your response.

        Here's the question:
        {request.question}
        """

        try:
            logger.debug("[SQL] Executing prompt via LLM...")
            query_result = execute_prompt(prompt, self.config)
            timing = time.time() - start_time
            logger.info(f"[SQL] ✅ Generated SQL (took {timing:.2f}s)")
            logger.debug(f"[SQL] Query result: {query_result.text[:100]}...")
            return QueryGenerationResult.success_result(query_result.text, prompt, timing, query_result.usage)
        except Exception as e:
            timing = time.time() - start_time
            logger.error(f"[SQL] ❌ Failed to generate query after {timing:.2f}s: {e}")
            return QueryGenerationResult.error_result(e, prompt, timing)


class QueryGenerationService:
    """Service for generating queries using different strategies"""

    def __init__(self, config: BaseConfig) -> None:
        self.config = config
        self._strategies = {
            "semantic_layer": SemanticLayerQueryStrategy(config),
            "mcp": MCPQueryStrategy(config),
            "sql": SQLQueryStrategy(config),
        }

    def generate_query(self, strategy_name: str, request: QueryRequest) -> QueryGenerationResult:
        """Generate a query using the specified strategy"""
        if strategy_name not in self._strategies:
            error = ValueError(f"Unknown strategy: {strategy_name}")
            return QueryGenerationResult.error_result(error, "", 0.0)

        return self._strategies[strategy_name].generate_query(request)


# Legacy class name for backward compatibility
QueryGenerator = QueryGenerationService


# Legacy functions for backward compatibility
def generate_semantic_layer_query(
    question: str, metric_details: str, dimension_details: str, entity_details: str, config: BaseConfig
) -> tuple[bool, str | Exception, str, float, dict | None]:
    """Legacy function for backward compatibility"""
    generator = QueryGenerationService(config)
    context = {
        "metric_details": metric_details,
        "dimension_details": dimension_details,
        "entity_details": entity_details,
    }
    request = QueryRequest(question, context)
    result = generator.generate_query("semantic_layer", request)
    return (
        result.success,
        result.query if result.success else (result.error or Exception("Unknown error")),
        result.prompt,
        result.timing,
        result.token_usage,
    )


def generate_mcp_query(question: str, config: BaseConfig) -> tuple[bool, str | Exception, str, float, dict | None]:
    """Legacy function for backward compatibility"""
    generator = QueryGenerationService(config)
    request = QueryRequest(question)
    result = generator.generate_query("mcp", request)
    return (
        result.success,
        result.query if result.success else (result.error or Exception("Unknown error")),
        result.prompt,
        result.timing,
        result.token_usage,
    )


def generate_sql_query(question: str, config: BaseConfig) -> tuple[bool, str | Exception, float, dict | None]:
    """Legacy function for backward compatibility"""
    generator = QueryGenerationService(config)
    request = QueryRequest(question)
    result = generator.generate_query("sql", request)
    return (
        result.success,
        result.query if result.success else (result.error or Exception("Unknown error")),
        result.timing,
        result.token_usage,
    )
