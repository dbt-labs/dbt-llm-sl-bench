# Evidence Dashboard — LLM Semantic Layer Benchmark

Analysis dashboard built with [Evidence](https://evidence.dev), visualising benchmark results from `llm_bench_dashboard.db`.

## Local development

```bash
cd results_analysis
pnpm install
pnpm run sources   # load data from llm_bench_dashboard.db
pnpm run dev       # start dev server at http://localhost:3000
```

## Adding new benchmark runs

1. Add the new batch ID(s) to `sources/llm_bench/batch_config.sql` with the appropriate `page` and `config_type`.
2. Run `pnpm run sources` to refresh the data.
3. Run `pnpm run dev` to verify the dashboard looks correct.

## Building & deploying to GitHub Pages

```bash
pnpm run build                        # builds to ./build (includes .nojekyll)
npx gh-pages -d build                 # pushes to the gh-pages branch
```

The dashboard is served from the `gh-pages` branch. GitHub Pages must be configured to deploy from that branch (Settings → Pages → Branch: `gh-pages`).

## Learning more

- [Evidence docs](https://docs.evidence.dev/)
- [Evidence GitHub](https://github.com/evidence-dev/evidence)
