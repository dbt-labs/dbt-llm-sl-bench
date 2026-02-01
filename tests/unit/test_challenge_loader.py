"""Tests for challenge loader utilities."""

from pathlib import Path

import pandas as pd
import pytest

from llm_bench.utils.challenge_loader import load_challenges_from_ttl


class TestLoadChallengesFromTTL:
    """Tests for load_challenges_from_ttl function."""

    def test_load_valid_ttl_file(self, mock_ttl_file: str) -> None:
        """Test loading a valid TTL file returns expected DataFrame."""
        result = load_challenges_from_ttl(mock_ttl_file)

        # Check DataFrame structure
        assert isinstance(result, pd.DataFrame)
        assert list(result.columns) == ["title", "challenge_text", "gold_query_text", "gold_query_id"]

        # Check content
        assert len(result) == 1
        assert result.iloc[0]["title"] == "Test Query 1"
        assert result.iloc[0]["challenge_text"] == "How many policies do we have?"
        assert result.iloc[0]["gold_query_text"] == "SELECT COUNT(*) FROM policies"

    def test_load_multiple_queries(self, tmp_path: Path) -> None:
        """Test loading TTL file with multiple queries."""
        ttl_content = """
        @prefix QandA: <http://models.data.world/benchmarks/QandA#> .
        @prefix dct: <http://purl.org/dc/terms/> .
        @prefix dwt: <https://templates.data.world/> .
        @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

        <http://example.org/query1> a dwt:SqlQuery ;
            dct:title "Test Query 1" ;
            dct:description "How many policies do we have?" ;
            QandA:queryText "SELECT COUNT(*) FROM policies" .

        <http://example.org/query2> a dwt:SqlQuery ;
            dct:title "Test Query 2" ;
            dct:description "What is the total premium amount?" ;
            QandA:queryText "SELECT SUM(premium) FROM policies" .
        """
        ttl_file = tmp_path / "multi_query.ttl"
        ttl_file.write_text(ttl_content)

        result = load_challenges_from_ttl(str(ttl_file))

        assert len(result) == 2
        assert result.iloc[0]["challenge_text"] == "How many policies do we have?"
        assert result.iloc[1]["challenge_text"] == "What is the total premium amount?"

    def test_filter_by_selected_challenges(self, tmp_path: Path) -> None:
        """Test filtering challenges by selected_challenges parameter."""
        ttl_content = """
        @prefix QandA: <http://models.data.world/benchmarks/QandA#> .
        @prefix dct: <http://purl.org/dc/terms/> .
        @prefix dwt: <https://templates.data.world/> .
        @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

        <http://example.org/query1> a dwt:SqlQuery ;
            dct:title "Test Query 1" ;
            dct:description "How many policies do we have?" ;
            QandA:queryText "SELECT COUNT(*) FROM policies" .

        <http://example.org/query2> a dwt:SqlQuery ;
            dct:title "Test Query 2" ;
            dct:description "What is the total premium amount?" ;
            QandA:queryText "SELECT SUM(premium) FROM policies" .
        """
        ttl_file = tmp_path / "filter_test.ttl"
        ttl_file.write_text(ttl_content)

        # Filter to only one challenge
        result = load_challenges_from_ttl(str(ttl_file), selected_challenges=["How many policies do we have?"])

        assert len(result) == 1
        assert result.iloc[0]["challenge_text"] == "How many policies do we have?"

    def test_filter_no_matches(self, mock_ttl_file: str) -> None:
        """Test filtering with no matching challenges returns empty DataFrame."""
        result = load_challenges_from_ttl(mock_ttl_file, selected_challenges=["Nonexistent question"])

        assert len(result) == 0
        assert isinstance(result, pd.DataFrame)

    def test_whitespace_stripping(self, tmp_path: Path) -> None:
        """Test that leading/trailing whitespace is stripped from challenge_text."""
        ttl_content = """
        @prefix QandA: <http://models.data.world/benchmarks/QandA#> .
        @prefix dct: <http://purl.org/dc/terms/> .
        @prefix dwt: <https://templates.data.world/> .
        @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

        <http://example.org/query1> a dwt:SqlQuery ;
            dct:title "Test Query 1" ;
            dct:description "  How many policies do we have?  " ;
            QandA:queryText "SELECT COUNT(*) FROM policies" .
        """
        ttl_file = tmp_path / "whitespace_test.ttl"
        ttl_file.write_text(ttl_content)

        result = load_challenges_from_ttl(str(ttl_file))

        # Whitespace should be stripped
        assert result.iloc[0]["challenge_text"] == "How many policies do we have?"

    def test_empty_ttl_file(self, tmp_path: Path) -> None:
        """Test loading an empty TTL file returns empty DataFrame."""
        ttl_content = """
        @prefix QandA: <http://models.data.world/benchmarks/QandA#> .
        @prefix dct: <http://purl.org/dc/terms/> .
        @prefix dwt: <https://templates.data.world/> .
        @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
        """
        ttl_file = tmp_path / "empty.ttl"
        ttl_file.write_text(ttl_content)

        result = load_challenges_from_ttl(str(ttl_file))

        assert len(result) == 0
        assert isinstance(result, pd.DataFrame)

    def test_missing_file(self) -> None:
        """Test loading a non-existent file raises appropriate error."""
        with pytest.raises(FileNotFoundError):
            load_challenges_from_ttl("/nonexistent/path/to/file.ttl")

    def test_malformed_ttl_syntax(self, tmp_path: Path) -> None:
        """Test loading malformed TTL raises parsing error."""
        ttl_content = """
        This is not valid Turtle syntax!
        """
        ttl_file = tmp_path / "malformed.ttl"
        ttl_file.write_text(ttl_content)

        with pytest.raises(Exception):  # rdflib will raise parsing exception
            load_challenges_from_ttl(str(ttl_file))

    def test_missing_required_properties(self, tmp_path: Path) -> None:
        """Test TTL file with queries missing required properties."""
        ttl_content = """
        @prefix QandA: <http://models.data.world/benchmarks/QandA#> .
        @prefix dct: <http://purl.org/dc/terms/> .
        @prefix dwt: <https://templates.data.world/> .
        @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

        <http://example.org/query1> a dwt:SqlQuery ;
            dct:title "Incomplete Query" .
        """
        ttl_file = tmp_path / "incomplete.ttl"
        ttl_file.write_text(ttl_content)

        # Should return empty DataFrame since query doesn't match SPARQL pattern
        result = load_challenges_from_ttl(str(ttl_file))
        assert len(result) == 0

    def test_different_rdf_types_ignored(self, tmp_path: Path) -> None:
        """Test that only dwt:SqlQuery types are loaded."""
        ttl_content = """
        @prefix QandA: <http://models.data.world/benchmarks/QandA#> .
        @prefix dct: <http://purl.org/dc/terms/> .
        @prefix dwt: <https://templates.data.world/> .
        @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

        <http://example.org/query1> a dwt:SqlQuery ;
            dct:title "SQL Query" ;
            dct:description "Valid SQL Query" ;
            QandA:queryText "SELECT COUNT(*) FROM policies" .

        <http://example.org/other1> a dwt:SomeOtherType ;
            dct:title "Not a SQL Query" ;
            dct:description "This should be ignored" ;
            QandA:queryText "SELECT * FROM other" .
        """
        ttl_file = tmp_path / "mixed_types.ttl"
        ttl_file.write_text(ttl_content)

        result = load_challenges_from_ttl(str(ttl_file))

        # Only the SqlQuery should be loaded
        assert len(result) == 1
        assert result.iloc[0]["challenge_text"] == "Valid SQL Query"

    def test_unicode_and_special_characters(self, tmp_path: Path) -> None:
        """Test handling of Unicode and special characters in challenge text."""
        ttl_content = """
        @prefix QandA: <http://models.data.world/benchmarks/QandA#> .
        @prefix dct: <http://purl.org/dc/terms/> .
        @prefix dwt: <https://templates.data.world/> .
        @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

        <http://example.org/query1> a dwt:SqlQuery ;
            dct:title "Unicode Test" ;
            dct:description "Calcul du montant total (€) des primes?" ;
            QandA:queryText "SELECT SUM(premium) FROM policies" .
        """
        ttl_file = tmp_path / "unicode.ttl"
        ttl_file.write_text(ttl_content)

        result = load_challenges_from_ttl(str(ttl_file))

        assert len(result) == 1
        assert "€" in result.iloc[0]["challenge_text"]
        assert result.iloc[0]["challenge_text"] == "Calcul du montant total (€) des primes?"

    def test_multiline_query_text(self, tmp_path: Path) -> None:
        """Test handling of multiline SQL queries."""
        ttl_content = """
        @prefix QandA: <http://models.data.world/benchmarks/QandA#> .
        @prefix dct: <http://purl.org/dc/terms/> .
        @prefix dwt: <https://templates.data.world/> .
        @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

        <http://example.org/query1> a dwt:SqlQuery ;
            dct:title "Multiline Query" ;
            dct:description "Complex query with joins" ;
            QandA:queryText \"\"\"SELECT p.policy_id, SUM(c.amount)
FROM policies p
JOIN claims c ON p.policy_id = c.policy_id
GROUP BY p.policy_id\"\"\" .
        """
        ttl_file = tmp_path / "multiline.ttl"
        ttl_file.write_text(ttl_content)

        result = load_challenges_from_ttl(str(ttl_file))

        assert len(result) == 1
        assert "JOIN" in result.iloc[0]["gold_query_text"]
        assert "GROUP BY" in result.iloc[0]["gold_query_text"]

    def test_real_benchmark_file_structure(self) -> None:
        """Test loading the actual benchmark_questions.ttl file if it exists."""
        benchmark_file = Path("benchmark_questions.ttl")

        if benchmark_file.exists():
            # This should not raise an error
            result = load_challenges_from_ttl(str(benchmark_file))

            # Basic validation
            assert isinstance(result, pd.DataFrame)
            assert list(result.columns) == ["title", "challenge_text", "gold_query_text", "gold_query_id"]

            # If there are results, validate structure
            if len(result) > 0:
                assert result["title"].notna().all()
                assert result["challenge_text"].notna().all()
                assert result["gold_query_text"].notna().all()
                assert result["gold_query_id"].notna().all()

    def test_load_challenges_with_threading(self, tmp_path: Path) -> None:
        """Test that load_challenges_from_ttl works correctly with concurrent threads.

        This is a regression test for rdflib's thread-safety issue (#1282) which
        causes race conditions in SPARQL parsing without proper locking.
        """
        from concurrent.futures import ThreadPoolExecutor

        # Create a test TTL file
        ttl_content = """
        @prefix QandA: <http://models.data.world/benchmarks/QandA#> .
        @prefix dct: <http://purl.org/dc/terms/> .
        @prefix dwt: <https://templates.data.world/> .
        @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

        <http://example.org/query1> a dwt:SqlQuery ;
            dct:title "Test Query 1" ;
            dct:description "How many policies do we have?" ;
            QandA:queryText "SELECT COUNT(*) FROM policies" .

        <http://example.org/query2> a dwt:SqlQuery ;
            dct:title "Test Query 2" ;
            dct:description "What is the total premium amount?" ;
            QandA:queryText "SELECT SUM(premium) FROM policies" .
        """
        ttl_file = tmp_path / "threading_test.ttl"
        ttl_file.write_text(ttl_content)

        def load_in_thread(thread_id: int) -> tuple[int, int]:
            """Load challenges and return (thread_id, num_challenges)."""
            result = load_challenges_from_ttl(str(ttl_file))
            return (thread_id, len(result))

        # Test with multiple concurrent threads (mirrors production usage)
        num_threads = 5
        with ThreadPoolExecutor(max_workers=3) as executor:
            futures = [executor.submit(load_in_thread, i) for i in range(num_threads)]
            results = [f.result() for f in futures]

        # All threads should successfully load the same number of challenges
        assert len(results) == num_threads
        for thread_id, count in results:
            assert count == 2, f"Thread {thread_id} loaded {count} challenges, expected 2"

        # Verify no data corruption by loading once more and checking content
        final_result = load_challenges_from_ttl(str(ttl_file))
        assert len(final_result) == 2
        assert set(final_result["challenge_text"]) == {
            "How many policies do we have?",
            "What is the total premium amount?",
        }

    def test_load_real_benchmark_with_threading(self) -> None:
        """Test loading actual benchmark file with concurrent threads (regression test).

        This verifies that the threading lock fix works with the real benchmark file,
        preventing the race condition that occurred with rdflib + pyparsing 3.2+.
        """
        from concurrent.futures import ThreadPoolExecutor

        benchmark_file = Path("benchmark_questions.ttl")
        if not benchmark_file.exists():
            pytest.skip("benchmark_questions.ttl not found")

        def load_in_thread(thread_id: int) -> tuple[int, int, list[str]]:
            """Load challenges and return (thread_id, count, first_3_titles)."""
            result = load_challenges_from_ttl(str(benchmark_file))
            titles = result["challenge_text"].head(3).tolist()
            return (thread_id, len(result), titles)

        # Test with multiple threads like the actual benchmark runner
        num_threads = 10
        with ThreadPoolExecutor(max_workers=3) as executor:
            futures = [executor.submit(load_in_thread, i) for i in range(num_threads)]
            results = [f.result() for f in futures]

        # All threads should return the same count and data
        counts = [count for _, count, _ in results]
        assert len(set(counts)) == 1, f"Inconsistent counts across threads: {set(counts)}"
        assert counts[0] > 0, "Should have loaded at least one challenge"

        # Verify all threads got the same titles (no data corruption)
        first_titles = results[0][2]
        for thread_id, count, titles in results:
            assert titles == first_titles, f"Thread {thread_id} got different data: {titles} vs {first_titles}"
