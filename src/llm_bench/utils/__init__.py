"""Utility functions for the benchmark tool."""

from .challenge_loader import load_challenges_from_ttl
from .helpers import execute_query_and_update_answer

__all__ = [
    "load_challenges_from_ttl",
    "execute_query_and_update_answer",
]
