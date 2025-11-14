"""Factory class for creating SQLAnswer objects."""

from typing import Union

from ..config.base import BaseConfig
from ..models.answers import SQLAnswer
from ..models.requests import SQLAnswerRequest
from ..models.results import QueryGenerationResult


class SQLAnswerFactory:
    """Factory class for creating SQLAnswer objects with consistent configuration"""

    def __init__(self, config: BaseConfig):
        self.config = config

    def create_answer(self, request: SQLAnswerRequest) -> SQLAnswer:
        """Create a SQLAnswer object from a request"""
        answer = SQLAnswer(
            challenge_text=request.challenge_text,
            method=request.method,
            model=self.config.model_name.value,
            timing=request.timing,
            prompt=request.prompt,
            token_usage=request.token_usage,
            iteration=request.iteration,
            library=self.config.library_name,
            batch_id=request.batch_id
        )

        if request.success:
            answer.is_successful = True
            answer.sql = str(request.query_or_error)
        else:
            answer.is_successful = False
            answer.error = str(request.query_or_error)

        return answer

    def create_semantic_layer_answer(self, question: str, success: bool, query_or_error: Union[str, Exception],
                                   prompt: str, timing: float, token_usage: dict = None, iteration: int = 0, batch_id: int = 0) -> SQLAnswer:
        """Create a semantic layer SQLAnswer - legacy method"""
        request = SQLAnswerRequest(
            challenge_text=question,
            method="semantic_layer",
            success=success,
            query_or_error=query_or_error,
            timing=timing,
            prompt=prompt,
            token_usage=token_usage,
            iteration=iteration,
            batch_id=batch_id
        )
        return self.create_answer(request)

    def create_mcp_answer(self, question: str, success: bool, query_or_error: Union[str, Exception],
                         prompt: str, timing: float, token_usage: dict = None, iteration: int = 0, batch_id: int = 0) -> SQLAnswer:
        """Create an MCP SQLAnswer - legacy method"""
        request = SQLAnswerRequest(
            challenge_text=question,
            method="mcp",
            success=success,
            query_or_error=query_or_error,
            timing=timing,
            prompt=prompt,
            token_usage=token_usage,
            iteration=iteration,
            batch_id=batch_id
        )
        return self.create_answer(request)

    def create_sql_answer(self, question: str, success: bool, query_or_error: Union[str, Exception],
                         timing: float, token_usage: dict = None, iteration: int = 0, batch_id: int = 0) -> SQLAnswer:
        """Create a SQL SQLAnswer - legacy method"""
        request = SQLAnswerRequest(
            challenge_text=question,
            method="sql",
            success=success,
            query_or_error=query_or_error,
            timing=timing,
            prompt="",
            token_usage=token_usage,
            iteration=iteration,
            batch_id=batch_id
        )
        return self.create_answer(request)

    def from_query_result(self, question: str, method: str, result: QueryGenerationResult, iteration: int = 0, batch_id: int = 0) -> SQLAnswer:
        """Create SQLAnswer from QueryGenerationResult - cleaner interface"""
        request = SQLAnswerRequest(
            challenge_text=question,
            method=method,
            success=result.success,
            query_or_error=result.query if result.success else result.error,
            timing=result.timing,
            prompt=result.prompt,
            token_usage=result.token_usage,
            iteration=iteration,
            batch_id=batch_id
        )
        return self.create_answer(request)
