"""Utilities for loading benchmark challenges from RDF files."""

import pandas as pd
from rdflib import Graph, Namespace, RDF


def load_challenges_from_ttl(ttl_file: str, selected_challenges: list = None) -> pd.DataFrame:
    """Load challenges from a Turtle (TTL) RDF file.

    Args:
        ttl_file: Path to the TTL file containing challenges
        selected_challenges: Optional list of challenge texts to filter by

    Returns:
        DataFrame with columns: title, challenge_text, gold_query_text, gold_query_id
    """
    # Load the TTL file into an RDF graph
    graph = Graph()
    graph.parse(ttl_file, format="ttl")

    # Define namespaces
    QANDA = Namespace("http://models.data.world/benchmarks/QandA#")
    DWT = Namespace("https://templates.data.world/")
    DCT = Namespace("http://purl.org/dc/terms/")
    RDF_NS = RDF

    # SPARQL query to retrieve records of rdf:type dwt:SqlQuery
    sparql_query = """
    PREFIX QandA: <http://models.data.world/benchmarks/QandA#>
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX dwt: <https://templates.data.world/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

    SELECT ?title ?description ?queryText ?query
    WHERE {
      ?query rdf:type dwt:SqlQuery ;
             QandA:queryText ?queryText ;
             dct:description ?description ;
             dct:title ?title ;
    }
    """

    # Execute the SPARQL query
    results = graph.query(sparql_query, initNs={"QandA": QANDA, "dct": DCT, "dwt": DWT, "rdf": RDF_NS})

    # Create a DataFrame from the query results
    all_challenges = pd.DataFrame(results, columns=['title', 'challenge_text', 'gold_query_text', 'gold_query_id'])

    # Strip leading/trailing whitespace
    all_challenges["challenge_text"] = all_challenges["challenge_text"].str.strip()

    # Filter if selected_challenges is provided
    if selected_challenges:
        all_challenges = all_challenges[
            all_challenges["challenge_text"].isin(selected_challenges)
        ]

    return all_challenges
