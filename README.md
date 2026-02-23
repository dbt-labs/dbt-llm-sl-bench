# WIP!!!

This repo contains code to 
1. run some benchmark on answering questions via SQL using text to SQL, the dbt SL or the dbt MCP server
   - the benchmark loads results in some DuckDB database
   - quite a few tests run in parallel to speed up the process
2. some dashboard to visualize the results

## Setup

LLMs (all models are accessed via PydanticAI):
- to use OpenAI models, set the OPENAI_API_KEY as an env var before running
- to use Anthropic models, set the ANTHROPIC_API_KEY as an env var before running
(i personally use `direnv` to manage those env vars)

Overall setup to run queries via the SL Gateway:
1. have a dbt project setup in the platform with the SL enabled
2. copy `.env.example` to `.env` and fill in the values

## Config the benchmark

Check the `run_bench.py` file to see the different options you can configure the benchmark with.

You can decide what LLM to use, what questions to answerss, what strategy to use, etc.

By default the results will be stored in a DuckDB database called `llm_bench.db` in the root of the repo.

## Run the benchmark

Pre-req: `uv` is installed

```bash
uv run run_bench.py
```

## Run the dashboard

Pre-req: `npm` and `node` are installed

```bash
cd results_analysis
npm run dev
```