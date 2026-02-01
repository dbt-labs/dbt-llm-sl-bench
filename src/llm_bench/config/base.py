"""Base configuration classes and enums."""

from dataclasses import dataclass, field
from enum import Enum

from llm_bench.config.settings import settings


class ModelName(Enum):
    """Supported AI model names."""

    GPT_5_NANO = "gpt-5-nano"
    GPT_5_MINI = "gpt-5-mini"
    GPT_5 = "gpt-5"
    GPT_5_1 = "gpt-5.1"
    GPT_5_2 = "gpt-5.2"
    CLAUDE_SONNET_3_7 = "claude-3-7-sonnet-20250219"
    CLAUDE_SONNET_4 = "claude-sonnet-4-20250514"
    CLAUDE_SONNET_4_5 = "claude-sonnet-4-5"
    CLAUDE_OPUS_4_1 = "claude-opus-4-1-20250805"
    CLAUDE_OPUS_4_5 = "claude-opus-4-5"


@dataclass
class BaseConfig:
    """Base configuration shared across all strategies"""

    # API Configuration - loaded from environment
    dbt_sl_service_token: str = field(default_factory=lambda: settings.dbt_sl_service_token)

    # Model Configuration
    model_name: ModelName = ModelName.GPT_5
    use_pydantic_ai: bool = True

    # Benchmark Configuration
    number_of_iterations: int = 4
    retry_delay: float = 5.0
    llm_timeout: int = 120  # Timeout in seconds for LLM API calls
    config_comment: str = (
        ""  # Optional comment to identify this configuration variant (e.g., "Local MCP", "Production HTTP")
    )

    # Database Configuration
    database_file: str = "llm_bench.db"
    ddl_file: str = "ACME_small.ddl"
    benchmark_questions_file: str = "benchmark_questions.ttl"

    # dbt Semantic Layer Configuration - loaded from environment
    sl_url: str = field(default_factory=lambda: settings.sl_url)
    environment_id: str = field(default_factory=lambda: settings.environment_id)

    # Challenge Selection
    selected_challenges: list[str] = field(
        default_factory=lambda: [
            "What is the total amount of premiums that a policy holder has paid by policy number?",
            "What is the average time to settle a claim by policy number?",
            "What is the total amount of premiums that a policy holder has paid?",
            "How many policies have agents sold by agent id?",
            "What is the total loss amounts, which is the sum of loss payment, loss reserve amount by claim number?",
            "How many policies does each policy holder have by policy holder id?",
            "What is the total amount of premiums paid by policy number?",
            "How many claims have been placed by policy number?",
            "What is the average policy size which is the the total amount of premium divided by the number of policies?",
            "How many policies do we have?",
            "How many claims do we have?",
        ]
    )

    # Strategy field (set by subclasses)
    strategy: str = ""

    @property
    def library_name(self) -> str:
        """Get the library name being used."""
        return "pydantic-ai" if self.use_pydantic_ai else "openai-sdk"

    @property
    def jdbc_url(self) -> str:
        """Get the JDBC URL for database connection."""
        return f"jdbc:arrow-flight-sql://{self.sl_url}:443?environmentId={self.environment_id}&token={self.dbt_sl_service_token}"
