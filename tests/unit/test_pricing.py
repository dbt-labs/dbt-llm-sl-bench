"""Unit tests for pricing module."""

from unittest.mock import patch

import httpx
import pytest

from llm_bench.pricing import PriceEntry, _resolve_price_id, calculate_cost, fetch_prices


SAMPLE_PRICES = {
    "claude-sonnet-4.5": PriceEntry(id="claude-sonnet-4.5", vendor="anthropic", input=3.0, output=15.0),
    "claude-3.5-haiku": PriceEntry(
        id="claude-3.5-haiku", vendor="anthropic", input=0.8, output=4.0, input_cached=0.08
    ),
    "gpt-4o": PriceEntry(id="gpt-4o", vendor="openai", input=2.5, output=10.0),
    "claude-opus-4-5": PriceEntry(id="claude-opus-4-5", vendor="anthropic", input=15.0, output=75.0),
}

_PRICE_IDS = set(SAMPLE_PRICES.keys())


class TestResolvePriceId:
    """Tests for _resolve_price_id."""

    def test_exact_match(self) -> None:
        assert _resolve_price_id("gpt-4o", _PRICE_IDS) == "gpt-4o"

    def test_strips_provider_prefix(self) -> None:
        assert _resolve_price_id("openai:gpt-4o", _PRICE_IDS) == "gpt-4o"

    def test_strips_date_suffix(self) -> None:
        price_ids = {"claude-sonnet-4", "gpt-4o"}
        assert _resolve_price_id("claude-sonnet-4-20250514", price_ids) == "claude-sonnet-4"

    def test_normalizes_version_dash_to_dot(self) -> None:
        assert _resolve_price_id("claude-sonnet-4-5", _PRICE_IDS) == "claude-sonnet-4.5"

    def test_strips_date_then_normalizes(self) -> None:
        """Date suffix stripped first, then version dash normalized."""
        result = _resolve_price_id("anthropic:claude-sonnet-4-5-20250514", _PRICE_IDS)
        assert result == "claude-sonnet-4.5"

    def test_returns_none_when_no_match(self) -> None:
        assert _resolve_price_id("unknown-model-xyz", _PRICE_IDS) is None

    def test_falls_back_to_closest_previous_version(self) -> None:
        """claude-sonnet-4-6 → claude-sonnet-4.5 via closest-version fallback."""
        assert _resolve_price_id("claude-sonnet-4-6", _PRICE_IDS) == "claude-sonnet-4.5"

    def test_fallback_with_dash_versioned_ids(self) -> None:
        """claude-opus-4-6 → claude-opus-4-5 (dash-versioned pricing ID)."""
        assert _resolve_price_id("claude-opus-4-6", _PRICE_IDS) == "claude-opus-4-5"

    def test_fallback_does_not_use_higher_version(self) -> None:
        """Only versions ≤ target are considered; returns None if none qualify."""
        price_ids = {"claude-sonnet-4.7"}
        assert _resolve_price_id("claude-sonnet-4-6", price_ids) is None

    def test_fallback_picks_highest_available(self) -> None:
        """Given multiple candidates, picks the highest version ≤ target."""
        price_ids = {"claude-sonnet-4.3", "claude-sonnet-4.5"}
        assert _resolve_price_id("claude-sonnet-4-6", price_ids) == "claude-sonnet-4.5"


@patch("llm_bench.pricing.fetch_prices", return_value=SAMPLE_PRICES)
class TestCalculateCost:
    """Tests for calculate_cost."""

    def test_basic_cost_calculation(self, _mock_fetch) -> None:
        token_usage = {"input_tokens": 1000, "output_tokens": 500, "cache_read_tokens": 0}
        cost = calculate_cost("openai:gpt-4o", token_usage)
        # (1000 * 2.5 + 500 * 10.0) / 1_000_000 = 0.0075
        assert cost == pytest.approx(0.0075)

    def test_cost_with_cached_tokens(self, _mock_fetch) -> None:
        token_usage = {"input_tokens": 800, "output_tokens": 200, "cache_read_tokens": 500}
        cost = calculate_cost("claude-3.5-haiku", token_usage)
        # (800 * 0.8 + 200 * 4.0) / 1_000_000 + (500 * 0.08) / 1_000_000 = 0.00148
        assert cost == pytest.approx(0.00148)

    def test_returns_none_when_token_usage_is_none(self, _mock_fetch) -> None:
        assert calculate_cost("openai:gpt-4o", None) is None

    def test_returns_none_when_model_not_found(self, _mock_fetch) -> None:
        token_usage = {"input_tokens": 100, "output_tokens": 50}
        assert calculate_cost("unknown-model", token_usage) is None

    def test_cost_with_cached_tokens_but_no_cached_price(self, _mock_fetch) -> None:
        """When input_cached price is missing, cache_read_tokens are charged at the full input rate."""
        token_usage = {"input_tokens": 800, "output_tokens": 200, "cache_read_tokens": 500}
        cost = calculate_cost("anthropic:claude-sonnet-4-5", token_usage)
        # claude-sonnet-4.5 has input=3.0, output=15.0, input_cached=None
        # (800 * 3.0 + 200 * 15.0) / 1_000_000 + (500 * 3.0) / 1_000_000 = 0.006900
        assert cost == pytest.approx(0.0069)

    def test_version_normalization_in_cost(self, _mock_fetch) -> None:
        """End-to-end: PydanticAI-style name resolves and calculates cost."""
        token_usage = {"input_tokens": 2000, "output_tokens": 1000}
        cost = calculate_cost("anthropic:claude-sonnet-4-5", token_usage)
        # (2000 * 3.0 + 1000 * 15.0) / 1_000_000 = 0.021
        assert cost == pytest.approx(0.021)


@patch("llm_bench.pricing.fetch_prices", return_value={})
class TestCalculateCostEmpty:
    """Tests for calculate_cost when prices are empty."""

    def test_returns_none_when_prices_empty(self, _mock_fetch) -> None:
        token_usage = {"input_tokens": 100, "output_tokens": 50}
        assert calculate_cost("openai:gpt-4o", token_usage) is None


class TestFetchPrices:
    """Tests for fetch_prices network handling."""

    def setup_method(self) -> None:
        """Reset the module-level cache before each test."""
        import llm_bench.pricing

        llm_bench.pricing._prices_cache = None

    @patch("llm_bench.pricing.httpx.get")
    def test_fetch_prices_success(self, mock_get) -> None:
        mock_get.return_value.raise_for_status = lambda: None
        mock_get.return_value.json.return_value = {
            "prices": [
                {"id": "test-model", "vendor": "test", "input": 1.0, "output": 2.0, "input_cached": 0.5},
            ]
        }
        result = fetch_prices()
        assert "test-model" in result
        assert result["test-model"].input == 1.0
        assert result["test-model"].input_cached == 0.5

    @patch("llm_bench.pricing.httpx.get", side_effect=httpx.ConnectError("Network down"))
    def test_fetch_prices_network_failure(self, _mock_get) -> None:
        result = fetch_prices()
        assert result == {}

    @patch("llm_bench.pricing.httpx.get", side_effect=httpx.TimeoutException("Timeout"))
    def test_fetch_prices_timeout(self, _mock_get) -> None:
        result = fetch_prices()
        assert result == {}
