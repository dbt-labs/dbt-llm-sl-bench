"""Environment-based settings using pydantic-settings."""

from pydantic_settings import BaseSettings, SettingsConfigDict


class EnvSettings(BaseSettings):
    """Application settings loaded from environment variables or .env file."""

    # dbt Semantic Layer Configuration
    sl_url: str
    environment_id: str
    mcp_url: str
    dbt_sl_service_token: str

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore"
    )


# Create a singleton instance
settings = EnvSettings()
