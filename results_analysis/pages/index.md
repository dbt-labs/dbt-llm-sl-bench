---
title: LLM Semantic Layer Benchmark
---

This benchmark tests whether LLMs can answer business questions more accurately using a **Semantic Layer** (MetricFlow) versus generating **raw SQL** directly. Each model is given 11 insurance-domain questions about claims, policies, and premiums, and asked to answer them via both methods. Results are compared against known correct answers.

The questions are an extract from the [ACME Insurance benchmark](https://github.com/datadotworld/cwd-benchmark-data), originally created by [data.world](https://data.world).

## Pages

- [**Comparing models and thinking effort - Without modeling**](/compare) — Side-by-side accuracy, cost, and latency across models and effort levels. Defaults to the large multi-model comparison run (5 iterations per model).
- [**Repeated runs on selected models**](/repeated-runs) — Consistency and variance for models run 20 times, compared across without modeling and with modeling configurations.
- [**Historical Comparison**](/historical) — How results have changed from 2023 to 2026, comparing older and newer models on the same questions.

## Benchmark Questions

```sql questions
select
  sort_order as "#",
  challenge_text as "Question",
  case when too_many_hops then 'Yes' else 'No' end as "Too Many Hops"
from sql_answers
where batch_id != -1
group by sort_order, challenge_text, too_many_hops
order by sort_order
```

<DataTable data={questions} rows=all>
  <Column id="#"/>
  <Column id="Question"/>
  <Column id="Too Many Hops"/>
</DataTable>

3 of the 11 questions are **"too many hops"** — they require joins that the Semantic Layer cannot express.

## A note on modeling

For some benchmark runs, additional dbt models were created specifically to resolve the "too many hops" limitation. With those models in place, the Semantic Layer can answer all 11 questions — including the ones that would otherwise be out of reach. Pages that include these runs are clearly labelled **"with modeling"**.
