"""Base configuration classes."""

from dataclasses import dataclass, field

from llm_bench.config.settings import settings


@dataclass
class BaseConfig:
    """Base configuration shared across all strategies"""

    # API Configuration - loaded from environment
    dbt_sl_service_token: str = field(default_factory=lambda: settings.dbt_sl_service_token)

    # Model Configuration
    model_name: str = "openai:gpt-5"
    reasoning_effort: str | None = None

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
    def jdbc_url(self) -> str:
        """Get the JDBC URL for database connection."""
        return f"jdbc:arrow-flight-sql://{self.sl_url}:443?environmentId={self.environment_id}&token={self.dbt_sl_service_token}"
