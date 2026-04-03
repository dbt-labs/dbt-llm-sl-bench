# dbt LLM Semantic Layer Benchmark

An interactive dashboard with results is available at **https://dbt-labs.github.io/dbt-llm-sl-bench/**

Benchmark for comparing how well LLMs answer business questions using three different strategies:

| Strategy | How it works |
|---|---|
| `sql` | LLM generates SQL from a DDL schema (classic text-to-SQL) |
| `semantic_layer` | LLM queries the dbt Semantic Layer via the SL Gateway (JDBC/Flight SQL) |
| `mcp` | LLM uses the dbt MCP server as a tool (local or hosted on dbt Cloud) |

All three strategies run the same set of natural language questions. Generated queries are executed against the dbt Semantic Layer and compared against gold queries to measure accuracy.

Results are stored in a DuckDB database and visualized via an Evidence dashboard.

The dbt project used for this benchmark is [dbt-labs/semantic-layer-llm-benchmarking](https://github.com/dbt-labs/semantic-layer-llm-benchmarking). The additional dbt models built on top of the raw data — used in some of the newer benchmark results — are on the `refresh-2025-additional-models` branch of that repo.

## Requirements

### dbt platform/Cloud account with Semantic Layer enabled

All three strategies require a dbt environment on the platform with the Semantic Layer enabled — the SL acts as the execution engine where generated queries are run and compared against gold answers.

You'll need:
- A **service token** with Semantic Layer access
- Your **environment ID**
- The **SL URL** for your region (e.g. `semantic-layer.cloud.getdbt.com` for US, `semantic-layer.emea.dbt.com` for EMEA)

### LLM API keys

- OpenAI models: set `OPENAI_API_KEY`
- Anthropic models: set `ANTHROPIC_API_KEY`

## Setup

```bash
cp .env.example .env
# Fill in SL_URL, ENVIRONMENT_ID, DBT_SL_SERVICE_TOKEN
# Optionally configure MCP settings if you want to run the mcp strategy
```

Then set your LLM API key(s) as environment variables (or add them to `.env`):

```bash
export OPENAI_API_KEY=sk-...
export ANTHROPIC_API_KEY=sk-ant-...
```

## Run the benchmark

Requires [`uv`](https://docs.astral.sh/uv/).

```bash
uv run run_bench.py
```

Results are appended to `llm_bench.db` in the repo root. Re-runs accumulate — each run stores results with a timestamp so you can compare across runs.

Add `--debug` for verbose output:

```bash
uv run run_bench.py --debug
```

## Configure what to run

Open `run_bench.py` and edit the `model_efforts` and `example_configs` section.

**Change the model:**
```python
# Use a different model
example_configs = [SemanticLayerConfig(model_name="anthropic:claude-sonnet-4-5")]
```

**Run a specific strategy:**
```python
from llm_bench.config import SQLConfig, SemanticLayerConfig, MCPConfig

example_configs = [
    SQLConfig(model_name="openai:gpt-4o"),
    SemanticLayerConfig(model_name="openai:gpt-4o"),
    MCPConfig(model_name="openai:gpt-4o"),
]
```

**Change number of iterations** (each question is asked N times; results are averaged):
```python
example_configs = [SemanticLayerConfig(model_name="openai:gpt-4o", number_of_iterations=3)]
```

**Run only a subset of questions** via `selected_challenges`:
```python
example_configs = [
    SemanticLayerConfig(
        model_name="openai:gpt-4o",
        selected_challenges=[
            "How many policies do we have?",
            "How many claims do we have?",
        ],
    )
]
```

**Change the DDL schema for the `sql` strategy:**

The `sql` strategy sends a DDL schema to the LLM as context for text-to-SQL generation. Two DDL files are included in the repo:

- `ACME_small.ddl` — base schema (default)
- `ACME_enhanced.ddl` — extended schema including dbt models from the `refresh-2025-additional-models` branch of [dbt-labs/semantic-layer-llm-benchmarking](https://github.com/dbt-labs/semantic-layer-llm-benchmarking)

```python
example_configs = [SQLConfig(model_name="openai:gpt-4o", ddl_file="ACME_enhanced.ddl")]
```

To use your own schema, point `ddl_file` at any DDL file:

```python
example_configs = [SQLConfig(model_name="openai:gpt-4o", ddl_file="path/to/your_schema.ddl")]
```

See `src/llm_bench/config/base.py` for all available config options.

## Add your own questions

Questions live in `benchmark_questions.ttl`, a [Turtle](https://www.w3.org/TR/turtle/) (RDF) file. Each entry pairs a natural language question with a gold SQL query used for comparison.

To add a question, append a block like this to the file:

```turtle
dwt:IQ_your_unique_id
        rdf:type       QandA:Inquiry ;
        QandA:expects  dwt:query-your_query_id ;
        QandA:prompt   "Your natural language question here?" .

dwt:query-your_query_id
        rdf:type          dwt:SqlQuery ;
        QandA:inLanguage  QandA:SQL ;
        QandA:queryText   "SELECT your_gold_sql FROM your_table" ;
        dct:description   "Your natural language question here?" ;
        dct:title         "Short title" ;
        dwt:content       "SELECT your_gold_sql FROM your_table" .
```

The gold SQL query is executed against your dbt Semantic Layer to produce the expected result set. The LLM-generated query is also executed and compared against it.

After adding questions, reference them by their `QandA:prompt` text in `selected_challenges` (see above) or set `selected_challenges=None` to run all questions in the file.

## MCP strategy configuration

The MCP strategy supports two server types:

**Remote (dbt Cloud hosted):**
```
MCP_SERVER_TYPE=http
MCP_HTTP_URL=https://emea.dbt.com/api/ai/v1/mcp/
```

**Local (stdio process):**
```
MCP_SERVER_TYPE=stdio
MCP_STDIO_COMMAND=uvx
MCP_STDIO_ARGS=["mcp-server-dbt", "--manifest-path", "./target/manifest.json"]
```

See `.env.example` for all MCP options.

## Run the dashboard locally

Requires `pnpm` and Node.js.

```bash
cd results_analysis
pnpm install
pnpm dev
```

The dashboard shows accuracy by strategy and model, cost, and timing. It reads directly from `results_analysis/llm_bench.duckdb` — copy or symlink your `llm_bench.db` there, or update `evidence.config.yaml` to point to your database file.
