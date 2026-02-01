"""Service for text formatting utilities for benchmark results."""


class VisualizationService:
    """Service for text formatting utilities"""

    @staticmethod
    def insert_line_break(s: str) -> str:
        """Make text labels prettier by adding a line break halfway through the text"""
        half_length = len(s) // 2
        space_index = s.rfind(" ", 0, half_length)
        if space_index != -1:
            return s[:space_index] + "\n" + s[space_index + 1 :]
        return s[:half_length] + "\n" + s[half_length:]


# Legacy function for backward compatibility
def insert_line_break(s: str) -> str:
    """Legacy function for backward compatibility"""
    return VisualizationService.insert_line_break(s)
