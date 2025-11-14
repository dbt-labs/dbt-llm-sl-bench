"""Configuration manager for creating and managing configs."""

from typing import TYPE_CHECKING

from .base import BaseConfig
from .strategies import MCPConfig, SQLConfig, SemanticLayerConfig

if TYPE_CHECKING:
    from ..runners.benchmark import BenchmarkServices


class ConfigurationManager:
    """Manages configuration instances and provides factory methods"""

    def __init__(self):
        self._configs = {
            'semantic_layer': SemanticLayerConfig(),
            'mcp': MCPConfig(),
            'sql': SQLConfig()
        }
        self._default_config = self._configs['semantic_layer']

    def get_config(self, strategy: str) -> BaseConfig:
        """Get configuration for a specific strategy"""
        if strategy not in self._configs:
            raise ValueError(f"Unknown strategy: {strategy}")
        return self._configs[strategy]

    def get_default_config(self) -> BaseConfig:
        """Get the default configuration"""
        return self._default_config

    def set_default_config(self, strategy: str) -> None:
        """Set the default configuration to a specific strategy"""
        self._default_config = self.get_config(strategy)

    def create_services(self, config: BaseConfig) -> 'BenchmarkServices':
        """Create all services for a given configuration"""
        from ..services.database import DatabaseService
        from ..services.query_generation import QueryGenerationService
        from ..services.comparison import ComparisonService
        from ..factories.answer_factory import SQLAnswerFactory
        from ..runners.benchmark import BenchmarkServices

        database_service = DatabaseService(config)
        query_service = QueryGenerationService(config)
        comparison_service = ComparisonService()
        factory = SQLAnswerFactory(config)

        return BenchmarkServices(
            config=config,
            database_service=database_service,
            query_service=query_service,
            comparison_service=comparison_service,
            factory=factory
        )


# Global configuration manager
config_manager = ConfigurationManager()

# Global configuration instances - you can choose which one to use
semantic_config = config_manager.get_config('semantic_layer')
mcp_config = config_manager.get_config('mcp')
sql_config = config_manager.get_config('sql')

# Default config for backward compatibility
config = config_manager.get_default_config()
