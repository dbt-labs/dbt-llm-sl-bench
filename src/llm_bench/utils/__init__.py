"""Utility functions for the benchmark tool."""

from llm_bench.utils.challenge_loader import load_challenges_from_ttl
from llm_bench.utils.helpers import execute_query_and_update_answer


__all__ = [
    "execute_query_and_update_answer",
    "load_challenges_from_ttl",
]
