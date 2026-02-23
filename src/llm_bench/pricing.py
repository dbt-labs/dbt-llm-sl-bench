"""Pricing lookup for LLM models using llm-prices.com data."""

import re
from dataclasses import dataclass

import httpx
from loguru import logger


@dataclass
class PriceEntry:
    """Pricing data for a single model."""

    id: str
    vendor: str
    input: float
    output: float
    input_cached: float | None = None


_prices_cache: dict[str, PriceEntry] | None = None


def fetch_prices() -> dict[str, PriceEntry]:
    """Fetch pricing data from llm-prices.com. Caches result in module-level variable."""
    global _prices_cache  # noqa: PLW0603
    if _prices_cache is not None:
        return _prices_cache

    try:
        resp = httpx.get("https://www.llm-prices.com/current-v1.json", timeout=10)
        resp.raise_for_status()
        data = resp.json()
        _prices_cache = {
            item["id"]: PriceEntry(
                id=item["id"],
                vendor=item.get("vendor", ""),
                input=item["input"],
                output=item["output"],
                input_cached=item.get("input_cached"),
            )
            for item in data["prices"]
        }
    except Exception:
        logger.warning("Failed to fetch LLM pricing data; cost calculation will be unavailable")
        _prices_cache = {}

    return _prices_cache


def _find_closest_version(normalized: str, price_ids: set[str]) -> str | None:
    """Find the pricing ID with the highest version ≤ target in the same model family.

    Both the query and each pricing ID are compared in normalized form (trailing
    dash-digit converted to dot-digit) so that e.g. "claude-opus-4-5" is treated
    as version 4.5 in the "claude-opus-" family.
    """
    m = re.match(r"^(.*?)(\d+(?:\.\d+)?)$", normalized)
    if not m:
        return None
    prefix, version_str = m.group(1), m.group(2)
    target_version = float(version_str)

    best_id: str | None = None
    best_version = -1.0
    for pid in price_ids:
        norm_pid = re.sub(r"-(\d+)$", r".\1", pid)
        m2 = re.match(r"^(.*?)(\d+(?:\.\d+)?)$", norm_pid)
        if not m2:
            continue
        if m2.group(1) == prefix:
            v = float(m2.group(2))
            if v <= target_version and v > best_version:
                best_version = v
                best_id = pid  # Return the original pricing ID
    return best_id


def _resolve_price_id(model_name: str, price_ids: set[str]) -> str | None:
    """Resolve a PydanticAI model name to a pricing ID.

    Tries in order:
    1. Exact match (after stripping provider prefix)
    2. Strip date suffix (-YYYYMMDD)
    3. Normalize version dashes to dots (e.g. claude-sonnet-4-5 -> claude-sonnet-4.5)
    """
    # Strip provider prefix (e.g. "anthropic:claude-sonnet-4-5" -> "claude-sonnet-4-5")
    bare = model_name.split(":")[-1]

    # 1. Exact match
    if bare in price_ids:
        return bare

    # 2. Strip date suffix (-YYYYMMDD)
    stripped = re.sub(r"-\d{8}$", "", bare)
    if stripped in price_ids:
        return stripped

    # 3. Normalize trailing version dash to dot (e.g. "claude-sonnet-4-5" -> "claude-sonnet-4.5")
    #    Only convert the last dash-digit pattern to dot-digit
    normalized = re.sub(r"-(\d+)$", r".\1", stripped)
    if normalized in price_ids:
        return normalized

    # 4. Closest-version fallback: find the highest version ≤ target in the same family
    fallback = _find_closest_version(normalized, price_ids)
    if fallback is not None:
        logger.info(f"No exact pricing match for '{model_name}'; using '{fallback}' instead")
        return fallback

    return None


def calculate_cost(model_name: str, token_usage: dict | None) -> float | None:
    """Calculate the USD cost for a single LLM call.

    Args:
        model_name: The model identifier (e.g. "anthropic:claude-sonnet-4-5")
        token_usage: Dict with keys like input_tokens, output_tokens, cache_read_tokens

    Returns:
        Cost in USD, or None if pricing data is unavailable or token_usage is None.
    """
    if token_usage is None:
        return None

    prices = fetch_prices()
    if not prices:
        return None

    price_id = _resolve_price_id(model_name, set(prices.keys()))
    if price_id is None:
        logger.warning(f"No pricing data found for model: {model_name}")
        return None

    entry = prices[price_id]
    input_tokens = token_usage.get("input_tokens", 0)
    output_tokens = token_usage.get("output_tokens", 0)
    cache_read_tokens = token_usage.get("cache_read_tokens", 0)

    # Cached input tokens are charged at the cached rate (if available), not the standard input rate
    # The input_tokens from PydanticAI already excludes cache_read_tokens
    cost = (input_tokens * entry.input + output_tokens * entry.output) / 1_000_000

    if cache_read_tokens and entry.input_cached is not None:
        cost += (cache_read_tokens * entry.input_cached) / 1_000_000

    return cost
