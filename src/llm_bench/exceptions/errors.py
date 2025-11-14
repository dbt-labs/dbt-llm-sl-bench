"""Custom exception classes for benchmark operations."""


class BenchmarkError(Exception):
    """Base exception for benchmark operations"""
    pass


class QueryGenerationError(BenchmarkError):
    """Exception raised when query generation fails"""
    pass


class DatabaseConnectionError(BenchmarkError):
    """Exception raised when database connection fails"""
    pass


class ConfigurationError(BenchmarkError):
    """Exception raised when configuration is invalid"""
    pass


class ComparisonError(BenchmarkError):
    """Exception raised when result comparison fails"""
    pass
