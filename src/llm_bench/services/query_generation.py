"""Service for generating queries using different strategies."""

import time
from abc import ABC, abstractmethod
from typing import Tuple, Union

from ..config.base import BaseConfig
from ..models.requests import QueryRequest
from ..models.results import QueryGenerationResult


class QueryStrategy(ABC):
    """Abstract base class for different query generation strategies"""

    @abstractmethod
    def generate_query(self, request: QueryRequest) -> QueryGenerationResult:
        """Generate a query for the given question"""
        pass


class SemanticLayerQueryStrategy(QueryStrategy):
    """Strategy for generating semantic layer queries"""

    def __init__(self, config: BaseConfig):
        self.config = config

    def generate_query(self, request: QueryRequest) -> QueryGenerationResult:
        from ..executors.prompt_executor import execute_prompt

        start_time = time.time()

        if not request.context or not all(k in request.context for k in ['metric_details', 'dimension_details', 'entity_details']):
            error = ValueError("SemanticLayerQueryStrategy requires metric_details, dimension_details, and entity_details in context")
            return QueryGenerationResult.error_result(error, "", time.time() - start_time)

        prompt = r"""
        Queries to the dbt semantic layer look like this:

        select * from {{
            semantic_layer.query(metrics=['food_order_amount', 'order_gross_profit'],
            group_by=[Dimension('primary_entity__dimension').grain('month'), 'customer__customer_type'],
            where="{{ Dimension('primary_entity__filter_dim_1') }} = 'A' AND {{ Dimension('secondary_entity__filter_dim_2') }} = False"
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

        prompt += request.context['metric_details']
        prompt += """
            Dimensions:

        """
        prompt += request.context['dimension_details']
        prompt += request.context['entity_details']
        prompt += """
        Write a query to answer the following question. Do not explain the query, and do not say 'here is the query'. Return just the query, so it can be run
        verbatim from your response.

        Here's the question:
        """
        prompt += request.question

        try:
            query_result = execute_prompt(prompt, self.config)
            timing = time.time() - start_time
            print(f"Generated SL query (took {timing:.2f}s)")
            print(query_result.text)
            return QueryGenerationResult.success_result(query_result.text, prompt, timing, query_result.usage)
        except Exception as e:
            timing = time.time() - start_time
            return QueryGenerationResult.error_result(e, prompt, timing)


class MCPQueryStrategy(QueryStrategy):
    """Strategy for generating MCP queries"""

    def __init__(self, config: BaseConfig):
        self.config = config

    def generate_query(self, request: QueryRequest) -> QueryGenerationResult:
        from ..executors.mcp_server import MCPServerConfig
        from ..executors.prompt_executor import execute_prompt

        start_time = time.time()

        prompt = """
        Using the MCP tools, answer the following question:
        """
        prompt += request.question

        mcp_config = MCPServerConfig(
            server_type="http",
            url=self.config.mcp_url,
            tool_prefix=None,
            headers={
                "Authorization": f"token {self.config.dbt_sl_service_token}",
                "x-dbt-prod-environment-id": self.config.environment_id,
                "x-dbt-disable-tools": ",".join([
                    "build", "compile", "docs", "ls", "parse", "run", "test", "show",
                    "get_mart_models", "get_all_models", "get_model_details", "get_model_parents",
                    "get_model_children", "get_model_health", "list_jobs", "get_job_details",
                    "trigger_job_run", "list_jobs_runs", "get_job_run_details", "cancel_job_run",
                    "retry_job_run", "list_job_run_artifacts", "get_job_run_artifact",
                    "text_to_sql", "execute_sql",
                ]),
            }
        )

        try:
            query_result = execute_prompt(prompt, self.config, mcp_config=mcp_config)
            timing = time.time() - start_time
            print(f"Generated MCP SL query (took {timing:.2f}s)")
            print(query_result.text)
            return QueryGenerationResult.success_result(query_result.text, prompt, timing, query_result.usage)
        except Exception as e:
            timing = time.time() - start_time
            return QueryGenerationResult.error_result(e, prompt, timing)


class SQLQueryStrategy(QueryStrategy):
    """Strategy for generating SQL queries"""

    def __init__(self, config: BaseConfig):
        self.config = config

    def generate_query(self, request: QueryRequest) -> QueryGenerationResult:
        from ..executors.prompt_executor import execute_prompt

        start_time = time.time()

        # Read SQL DDL from file
        with open(self.config.ddl_file, "r") as ddl_file:
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
            query_result = execute_prompt(prompt, self.config)
            timing = time.time() - start_time
            print(f"Generated SQL (took {timing:.2f}s)")
            print(query_result.text)
            return QueryGenerationResult.success_result(query_result.text, prompt, timing, query_result.usage)
        except Exception as e:
            timing = time.time() - start_time
            print(e)
            return QueryGenerationResult.error_result(e, prompt, timing)


class QueryGenerationService:
    """Service for generating queries using different strategies"""

    def __init__(self, config: BaseConfig):
        self.config = config
        self._strategies = {
            'semantic_layer': SemanticLayerQueryStrategy(config),
            'mcp': MCPQueryStrategy(config),
            'sql': SQLQueryStrategy(config)
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
def generate_semantic_layer_query(question: str, metric_details: str, dimension_details: str, entity_details: str, config: BaseConfig) -> Tuple[bool, Union[str, Exception], str, float, dict]:
    """Legacy function for backward compatibility"""
    generator = QueryGenerationService(config)
    context = {
        'metric_details': metric_details,
        'dimension_details': dimension_details,
        'entity_details': entity_details
    }
    request = QueryRequest(question, context)
    result = generator.generate_query('semantic_layer', request)
    return result.success, result.query if result.success else result.error, result.prompt, result.timing, result.token_usage


def generate_mcp_query(question: str, config: BaseConfig) -> Tuple[bool, Union[str, Exception], str, float, dict]:
    """Legacy function for backward compatibility"""
    generator = QueryGenerationService(config)
    request = QueryRequest(question)
    result = generator.generate_query('mcp', request)
    return result.success, result.query if result.success else result.error, result.prompt, result.timing, result.token_usage


def generate_sql_query(question: str, config: BaseConfig) -> Tuple[bool, Union[str, Exception], float, dict]:
    """Legacy function for backward compatibility"""
    generator = QueryGenerationService(config)
    request = QueryRequest(question)
    result = generator.generate_query('sql', request)
    return result.success, result.query if result.success else result.error, result.timing, result.token_usage
