"""Strategy-specific configuration classes."""

from dataclasses import dataclass

from llm_bench.config.base import BaseConfig


@dataclass
class SemanticLayerConfig(BaseConfig):
    """Configuration for semantic layer strategy"""

    strategy: str = "semantic_layer"


@dataclass
class MCPConfig(BaseConfig):
    """Configuration for MCP strategy"""

    strategy: str = "mcp"


@dataclass
class SQLConfig(BaseConfig):
    """Configuration for SQL strategy"""

    strategy: str = "sql"
