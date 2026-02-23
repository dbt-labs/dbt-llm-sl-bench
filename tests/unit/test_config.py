"""Unit tests for configuration classes."""

import pytest

from llm_bench.config import (
    BaseConfig,
    ConfigurationManager,
    MCPConfig,
    ModelName,
    SemanticLayerConfig,
    SQLConfig,
)


class TestModelName:
    """Tests for ModelName enum"""

    def test_model_name_values(self) -> None:
        """Test that ModelName enum has expected values"""
        assert ModelName.GPT_5.value == "gpt-5"
        assert ModelName.GPT_5_MINI.value == "gpt-5-mini"
        assert ModelName.GPT_5_NANO.value == "gpt-5-nano"
        assert ModelName.CLAUDE_SONNET_4.value == "claude-sonnet-4-20250514"
        assert ModelName.CLAUDE_SONNET_4_5.value == "claude-sonnet-4-5"

    def test_model_name_members(self) -> None:
        """Test that ModelName enum has members and all are valid"""
        assert len(ModelName) > 0
        for member in ModelName:
            assert isinstance(member.value, str)
            assert len(member.value) > 0


class TestBaseConfig:
    """Tests for BaseConfig class"""

    def test_base_config_initialization(self, base_config) -> None:
        """Test that BaseConfig initializes with default values"""
        assert base_config.model_name == ModelName.GPT_5
        assert base_config.number_of_iterations == 1
        assert base_config.database_file == "test_llm_bench.db"

    def test_jdbc_url_generation(self) -> None:
        """Test that JDBC URL is generated correctly"""
        config = BaseConfig(sl_url="test.dbt.com", environment_id="123", dbt_sl_service_token="test_token")
        expected_url = "jdbc:arrow-flight-sql://test.dbt.com:443?environmentId=123&token=test_token"
        assert config.jdbc_url == expected_url

    def test_selected_challenges_default(self) -> None:
        """Test that selected_challenges has default values"""
        config = BaseConfig()
        assert len(config.selected_challenges) == 11
        assert "How many policies do we have?" in config.selected_challenges

    def test_custom_challenges(self) -> None:
        """Test that custom challenges can be set"""
        custom_challenges = ["Custom question 1", "Custom question 2"]
        config = BaseConfig(selected_challenges=custom_challenges)
        assert config.selected_challenges == custom_challenges


class TestSemanticLayerConfig:
    """Tests for SemanticLayerConfig class"""

    def test_semantic_layer_config_initialization(self, semantic_layer_config) -> None:
        """Test that SemanticLayerConfig initializes correctly"""
        assert semantic_layer_config.strategy == "semantic_layer"
        assert isinstance(semantic_layer_config, BaseConfig)

    def test_semantic_layer_config_inherits_base(self) -> None:
        """Test that SemanticLayerConfig inherits from BaseConfig"""
        config = SemanticLayerConfig()
        assert hasattr(config, "model_name")
        assert hasattr(config, "jdbc_url")


class TestMCPConfig:
    """Tests for MCPConfig class"""

    def test_mcp_config_initialization(self, mcp_config) -> None:
        """Test that MCPConfig initializes correctly"""
        assert mcp_config.strategy == "mcp"
        assert isinstance(mcp_config, BaseConfig)

    def test_mcp_config_strategy(self) -> None:
        """Test that MCPConfig has correct strategy"""
        config = MCPConfig()
        assert config.strategy == "mcp"


class TestSQLConfig:
    """Tests for SQLConfig class"""

    def test_sql_config_initialization(self, sql_config) -> None:
        """Test that SQLConfig initializes correctly"""
        assert sql_config.strategy == "sql"
        assert isinstance(sql_config, BaseConfig)

    def test_sql_config_ddl_file(self) -> None:
        """Test that SQLConfig has ddl_file property"""
        config = SQLConfig()
        assert hasattr(config, "ddl_file")
        assert config.ddl_file == "ACME_small.ddl"


class TestConfigurationManager:
    """Tests for ConfigurationManager class"""

    def test_configuration_manager_initialization(self) -> None:
        """Test that ConfigurationManager initializes with all strategies"""
        manager = ConfigurationManager()
        assert "semantic_layer" in manager._configs
        assert "mcp" in manager._configs
        assert "sql" in manager._configs

    def test_get_config_semantic_layer(self) -> None:
        """Test getting semantic layer config"""
        manager = ConfigurationManager()
        config = manager.get_config("semantic_layer")
        assert isinstance(config, SemanticLayerConfig)
        assert config.strategy == "semantic_layer"

    def test_get_config_mcp(self) -> None:
        """Test getting MCP config"""
        manager = ConfigurationManager()
        config = manager.get_config("mcp")
        assert isinstance(config, MCPConfig)
        assert config.strategy == "mcp"

    def test_get_config_sql(self) -> None:
        """Test getting SQL config"""
        manager = ConfigurationManager()
        config = manager.get_config("sql")
        assert isinstance(config, SQLConfig)
        assert config.strategy == "sql"

    def test_get_config_unknown_strategy(self) -> None:
        """Test that getting unknown strategy raises ValueError"""
        manager = ConfigurationManager()
        with pytest.raises(ValueError, match="Unknown strategy"):
            manager.get_config("unknown")

    def test_get_default_config(self) -> None:
        """Test getting default config"""
        manager = ConfigurationManager()
        config = manager.get_default_config()
        assert isinstance(config, SemanticLayerConfig)

    def test_set_default_config(self) -> None:
        """Test setting default config"""
        manager = ConfigurationManager()
        manager.set_default_config("sql")
        config = manager.get_default_config()
        assert isinstance(config, SQLConfig)

    def test_create_services(self) -> None:
        """Test creating services from config"""
        manager = ConfigurationManager()
        config = manager.get_config("sql")
        services = manager.create_services(config)

        assert services.config == config
        assert services.database_service is not None
        assert services.query_service is not None
        assert services.comparison_service is not None
        assert services.factory is not None
