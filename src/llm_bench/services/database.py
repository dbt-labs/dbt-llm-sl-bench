"""Database service for handling all database operations."""

from dataclasses import dataclass
from typing import Any
from urllib.parse import parse_qs, urlparse

import pandas as pd
from adbc_driver_flightsql import DatabaseOptions
from adbc_driver_flightsql.dbapi import connect

from llm_bench.config.base import BaseConfig
from llm_bench.models.results import DatabaseExecutionResult


@dataclass
class ConnAttr:
    """Connection attributes for database connection."""

    host: str  # "grpc+tls:semantic-layer.cloud.getdbt.com:443"
    environment_id: str  # 42
    token: str  # dbts_thisismyprivateservicetoken


def parse_jdbc_uri(uri: str) -> ConnAttr:
    """Helper function to convert the JDBC url into ConnAttr."""
    parsed = urlparse(uri)
    params = {k.lower(): v[0] for k, v in parse_qs(parsed.query).items()}
    return ConnAttr(
        host=parsed.path.replace("arrow-flight-sql", "grpc")
        if params.pop("useencryption", None) == "false"
        else parsed.path.replace("arrow-flight-sql", "grpc+tls"),
        environment_id=params.pop("environmentid"),
        token=params.pop("token"),
    )


class DatabaseService:
    """Service for handling all database operations"""

    def __init__(self, config: BaseConfig) -> None:
        self.config = config
        self.jdbc_url = config.jdbc_url

    def execute_query(
        self, query: str, db_opts: dict[str, Any] | None = None, print_result: bool = False
    ) -> DatabaseExecutionResult:
        """Execute a Semantic Layer query.

        host must be in a format like: grpc+tls:semantic-layer.cloud.getdbt.com:443
        db_opts is a dictionary of additional DB options to pass in
        """
        opts = db_opts or {}

        conn_attr = parse_jdbc_uri(self.jdbc_url)

        try:
            with (
                connect(
                    conn_attr.host,
                    db_kwargs={
                        DatabaseOptions.AUTHORIZATION_HEADER.value: f"Bearer {conn_attr.token}",
                        f"{DatabaseOptions.RPC_CALL_HEADER_PREFIX.value}environmentid": conn_attr.environment_id,
                        DatabaseOptions.WITH_COOKIE_MIDDLEWARE.value: "true",
                        **opts,
                    },
                ) as conn,
                conn.cursor() as cur,
            ):
                cur.execute(query)
                df = cur.fetch_df()  # fetches as Pandas DF, can also do fetch_arrow_table
                if print_result:
                    print("df result:")
                    print(df)
                return DatabaseExecutionResult.success_result(df)
        except Exception as e:
            error_msg = f"Query error: {e!s}"
            print(error_msg)
            return DatabaseExecutionResult.error_result(error_msg)

    def list_metrics(self) -> DatabaseExecutionResult:
        """List all available metrics"""
        list_metrics_query = """
        select *
        from {{
            semantic_layer.metrics()
        }}
        """
        return self.execute_query(list_metrics_query)

    def list_dimensions_for_metric(self, metric: str) -> DatabaseExecutionResult:
        """List dimensions for a specific metric"""
        list_dimensions_query = (
            """
            select *
            from {{
                semantic_layer.dimensions(
                    metrics=['"""
            + metric
            + """']
                )
            }}
        """
        )
        return self.execute_query(list_dimensions_query)

    def list_entities_for_metric(self, metric: str) -> DatabaseExecutionResult:
        """List entities for a specific metric"""
        list_entities_query = (
            """
            select *
            from {{
                semantic_layer.entities(
                    metrics=['"""
            + metric
            + """']
                )
            }}
        """
        )
        return self.execute_query(list_entities_query)

    def list_dimensions_for_metrics(self, metrics_df: pd.DataFrame) -> pd.DataFrame:
        """Get all unique dimensions across multiple metrics"""
        all_dimensions_df = pd.DataFrame()
        metrics_list = metrics_df["NAME"].to_list()

        for metric in metrics_list:
            result = self.list_dimensions_for_metric(metric)
            if result.success and not result.data.empty:
                all_dimensions_df = pd.concat(
                    [all_dimensions_df, result.data[["NAME", "DESCRIPTION"]]], ignore_index=True
                )

        return all_dimensions_df.drop_duplicates(subset=["NAME"])

    def list_entities_for_metrics(self, metrics_df: pd.DataFrame) -> pd.DataFrame:
        """Get all unique entities across multiple metrics"""
        all_entities_df = pd.DataFrame()
        metrics_list = metrics_df["NAME"].to_list()

        for metric in metrics_list:
            result = self.list_entities_for_metric(metric)
            if result.success and not result.data.empty:
                all_entities_df = pd.concat([all_entities_df, result.data[["NAME", "DESCRIPTION"]]], ignore_index=True)

        return all_entities_df.drop_duplicates(subset=["NAME"])


# Legacy functions for backward compatibility
def execute_sl_query(
    query: str, config: BaseConfig, db_opts: dict[str, Any] | None = None, print_result: bool = False
) -> tuple[bool, pd.DataFrame]:
    """Legacy function for backward compatibility"""
    db_service = DatabaseService(config)
    result = db_service.execute_query(query, db_opts, print_result)
    return result.success, result.data


def list_metrics(config: BaseConfig) -> tuple[bool, pd.DataFrame]:
    """Legacy function for backward compatibility"""
    db_service = DatabaseService(config)
    result = db_service.list_metrics()
    return result.success, result.data


def list_dimensions_for_metric(metric: str, config: BaseConfig) -> tuple[bool, pd.DataFrame]:
    """Legacy function for backward compatibility"""
    db_service = DatabaseService(config)
    result = db_service.list_dimensions_for_metric(metric)
    return result.success, result.data


def list_entities_for_metric(metric: str, config: BaseConfig) -> tuple[bool, pd.DataFrame]:
    """Legacy function for backward compatibility"""
    db_service = DatabaseService(config)
    result = db_service.list_entities_for_metric(metric)
    return result.success, result.data


def list_dimensions_for_metrics(list_metrics: pd.DataFrame, config: BaseConfig) -> pd.DataFrame:
    """Legacy function for backward compatibility"""
    db_service = DatabaseService(config)
    return db_service.list_dimensions_for_metrics(list_metrics)


def list_entities_for_metrics(list_metrics: pd.DataFrame, config: BaseConfig) -> pd.DataFrame:
    """Legacy function for backward compatibility"""
    db_service = DatabaseService(config)
    return db_service.list_entities_for_metrics(list_metrics)
