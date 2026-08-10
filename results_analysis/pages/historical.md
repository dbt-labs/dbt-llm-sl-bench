---
title: Historical Comparison (2023 → 2026)
sidebar_position: 4
---

The benchmark was originally run in November 2023 to test whether LLMs could answer business questions more accurately via a Semantic Layer (MetricFlow) versus generating raw SQL directly. This page re-runs those same 11 questions with modern models to measure how much LLMs have improved over time — first in **March 2026**, then again in **August 2026** — and shows what changes when additional dbt models are introduced to remove the "too many hops" limitation.

The section directly below leads with the latest **with modeling** results across both 2026 checkpoints. The remaining sections dig into the original March 2026 **without modeling** comparison against the 2023 baseline in more detail.

---

## With modeling: Mar 2026 → Aug 2026

This section shows the impact of adding dbt models to the project. Two things change: the Semantic Layer gains new models that resolve the "too many hops" limitations (so all 11 questions become answerable), and the Text to SQL generator works against a richer schema. All 11 questions are included here — the too-many-hops questions are no longer a special case.

The Aug 2026 models (Claude Sonnet 5, GPT-5.6 Terra, GPT-5.6 Sol) were each swept across multiple thinking-effort levels; the table and charts below show each at its single best-performing effort, for a fair one-row-per-model comparison against the Mar 2026 models (which only have one data point each). See [Comparing models and thinking effort - With modeling](/compare-with-modeling) for the full effort breakdown.

### Summary

```sql enhanced_summary
select
  case
    when model like '%sonnet-4-6%' then 'Claude Sonnet 4.6 (Mar 2026)'
    when model like '%gpt-5.3-codex%' then 'GPT-5.3 Codex (Mar 2026)'
    when model like '%claude-sonnet-5%' then 'Claude Sonnet 5 (Aug 2026, max)'
    when model like '%gpt-5.6-terra%' then 'GPT-5.6 Terra (Aug 2026, max)'
    when model like '%gpt-5.6-sol%' then 'GPT-5.6 Sol (Aug 2026, high)'
  end as "Model",
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  round(100.0 * avg(case when is_correct then 1.0 else 0.0 end), 1) as "Accuracy %",
  count(*) as "Runs"
from sql_answers
where (
    batch_id in (1771950920101, 1772035331932)
    and model not like '%gpt-5.2%'
  )
  or (
    batch_id = 1786382627626
    and model in (
      'anthropic:claude-sonnet-5:effort=max',
      'openai:gpt-5.6-terra:effort=max',
      'openai:gpt-5.6-sol:effort=high'
    )
  )
group by model, "method"
order by
  case when model like '%Mar 2026%' then 0 else 1 end,
  "Model", "Method"
```

<DataTable data={enhanced_summary} rows=all>
  <Column id="Model"/>
  <Column id="Method"/>
  <Column id="Accuracy %" fmt=num1 contentType=colorscale colorScale={['#ff4444', '#44bb44']}/>
  <Column id="Runs" fmt=num0/>
</DataTable>

### Per-question detail

```sql enhanced_sonnet
select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1771950920101
  and model like '%sonnet%'
group by challenge_text, sort_order, "method"
order by sort_order, "method"
```

<BarChart
    data={enhanced_sonnet}
    title="Sonnet 4.6 (Mar 2026) — SL (new models) vs SQL (with modeling)"
    x=challenge_text
    y="Percentage Correct"
    series="Method"
    type=grouped
    sort=false
    yFmt=pct0
    yMax=1
    yAxisTitle="Percentage correct"
    swapXY=true
/>

```sql enhanced_codex
select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1772035331932
  and model like '%codex%'
group by challenge_text, sort_order, "method"
order by sort_order, "method"
```

<BarChart
    data={enhanced_codex}
    title="GPT-5.3 Codex (Mar 2026) — SL (new models) vs SQL (with modeling)"
    x=challenge_text
    y="Percentage Correct"
    series="Method"
    type=grouped
    sort=false
    yFmt=pct0
    yMax=1
    yAxisTitle="Percentage correct"
    swapXY=true
/>

```sql enhanced_sonnet5
select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1786382627626
  and model = 'anthropic:claude-sonnet-5:effort=max'
group by challenge_text, sort_order, "method"
order by sort_order, "method"
```

<BarChart
    data={enhanced_sonnet5}
    title="Claude Sonnet 5 (Aug 2026, max effort) — SL (new models) vs SQL (with modeling)"
    x=challenge_text
    y="Percentage Correct"
    series="Method"
    type=grouped
    sort=false
    yFmt=pct0
    yMax=1
    yAxisTitle="Percentage correct"
    swapXY=true
/>

```sql enhanced_terra
select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1786382627626
  and model = 'openai:gpt-5.6-terra:effort=max'
group by challenge_text, sort_order, "method"
order by sort_order, "method"
```

<BarChart
    data={enhanced_terra}
    title="GPT-5.6 Terra (Aug 2026, max effort) — SL (new models) vs SQL (with modeling)"
    x=challenge_text
    y="Percentage Correct"
    series="Method"
    type=grouped
    sort=false
    yFmt=pct0
    yMax=1
    yAxisTitle="Percentage correct"
    swapXY=true
/>

```sql enhanced_sol
select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1786382627626
  and model = 'openai:gpt-5.6-sol:effort=high'
group by challenge_text, sort_order, "method"
order by sort_order, "method"
```

<BarChart
    data={enhanced_sol}
    title="GPT-5.6 Sol (Aug 2026, high effort) — SL (new models) vs SQL (with modeling)"
    x=challenge_text
    y="Percentage Correct"
    series="Method"
    type=grouped
    sort=false
    yFmt=pct0
    yMax=1
    yAxisTitle="Percentage correct"
    swapXY=true
/>

---

## Re-running the benchmark (without modeling)

All runs in this section and the two below it use raw DDL **without additional modeling** — this is the original March 2026 checkpoint, shown here for the detailed 2023-vs-2026 narrative.

The first chart shows the original 2023 results per question. The two charts below re-run the same benchmark in Mar 2026 with Sonnet 4.6 and GPT-5.3 Codex respectively. The summary table at the bottom aggregates accuracy across answerable questions, too-many-hops questions, and all questions combined.

```sql grouped_benchmark_2023
with data as (
  select
    * from sql_answers where batch_id in (-1)
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'Text to SQL'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"
```

<BarChart
    data={grouped_benchmark_2023}
    title="Nov 2023 benchmark results"
    x=challenge_text
    y="Percentage Correct"
    series="Method"
    type=grouped
    sort=false
    yFmt=pct0
    yMax=1
    yAxisTitle="Percentage correct"
    swapXY=true
/>


```sql grouped_benchmark_sonnet
with data as (
  select
    * from sql_answers
  where batch_id in (1771947220583)
    and model like '%sonnet%'
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'Text to SQL'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"
```

<BarChart
    data={grouped_benchmark_sonnet}
    title="Mar 2026 — Sonnet 4.6"
    x=challenge_text
    y="Percentage Correct"
    series="Method"
    type=grouped
    sort=false
    yFmt=pct0
    yMax=1
    yAxisTitle="Percentage correct"
    swapXY=true
/>


```sql grouped_benchmark_codex
with data as (
  select
    * from sql_answers
  where batch_id in (1772040337760)
    and model like '%codex%'
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'Text to SQL'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"
```

<BarChart
    data={grouped_benchmark_codex}
    title="Mar 2026 — GPT-5.3 Codex"
    x=challenge_text
    y="Percentage Correct"
    series="Method"
    type=grouped
    sort=false
    yFmt=pct0
    yMax=1
    yAxisTitle="Percentage correct"
    swapXY=true
/>

### Summary

```sql summary_table
with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      when model like '%sonnet%' then '2026 Sonnet 4.6'
      when model like '%codex%' then '2026 GPT-5.3 Codex'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1771947220583, 1772040337760)
)

, calc as (
  select
    too_many_hops,
    cohort,
    "method",
    avg(case when is_correct then 1.0 else 0.0 end) as percentage_correct
  from data
  group by too_many_hops, cohort, "method"
)

, calc_all as (
  select
    null as too_many_hops,
    cohort,
    "method",
    avg(case when is_correct then 1.0 else 0.0 end) as percentage_correct
  from data
  group by cohort, "method"
)

, combined as (
  select * from calc
  union all
  select * from calc_all
)

, pivoted as (
  pivot combined
  on cohort, "method"
  using avg(percentage_correct) as pct
  group by too_many_hops
)

select
  case
    when too_many_hops is null then 'All'
    when too_many_hops then 'True'
    else 'False'
  end as "Too Many Hops",
  "2023_sql_pct" as "Text to SQL 2023",
  "2026 Sonnet 4.6_sql_pct" as "Text to SQL Sonnet 4.6",
  "2026 GPT-5.3 Codex_sql_pct" as "Text to SQL GPT-5.3 Codex",
  "2023_semantic_layer_pct" as "SL 2023",
  "2026 Sonnet 4.6_semantic_layer_pct" as "SL Sonnet 4.6",
  "2026 GPT-5.3 Codex_semantic_layer_pct" as "SL GPT-5.3 Codex"
from pivoted
order by
  case when too_many_hops is null then 2 else 0 end,
  too_many_hops
```

<DataTable data={summary_table}>
  <Column id="Too Many Hops"/>
  <Column id="Text to SQL 2023" fmt=pct1/>
  <Column id="Text to SQL Sonnet 4.6" fmt=pct1/>
  <Column id="Text to SQL GPT-5.3 Codex" fmt=pct1/>
  <Column id="SL 2023" fmt=pct1/>
  <Column id="SL Sonnet 4.6" fmt=pct1/>
  <Column id="SL GPT-5.3 Codex" fmt=pct1/>
</DataTable>

## Semantic Layer: 2023 vs 2026

Isolating the Semantic Layer method to compare 2023 versus 2026 performance question by question. Note that the too-many-hops questions are included here — the Semantic Layer consistently scores 0% on those regardless of year or model, since it cannot express the required joins without additional modeling.

```sql sl_comparison_sonnet
with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 Sonnet'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1771947220583)
    and "method" = 'semantic_layer'
    and (batch_id = -1 or model like '%sonnet%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort
```

<BarChart
    data={sl_comparison_sonnet}
    title="Semantic Layer: 2023 vs 2026 Sonnet 4.6"
    x=challenge_text
    y="Percentage Correct"
    series="Cohort"
    type=grouped
    sort=false
    yFmt=pct0
    yMax=1
    yAxisTitle="Percentage correct"
    swapXY=true
/>

```sql sl_comparison_codex
with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 GPT-5.3 Codex'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1772040337760)
    and "method" = 'semantic_layer'
    and (batch_id = -1 or model like '%codex%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort
```

<BarChart
    data={sl_comparison_codex}
    title="Semantic Layer: 2023 vs 2026 GPT-5.3 Codex"
    x=challenge_text
    y="Percentage Correct"
    series="Cohort"
    type=grouped
    sort=false
    yFmt=pct0
    yMax=1
    yAxisTitle="Percentage correct"
    swapXY=true
/>

## Text to SQL: 2023 vs 2026

Same comparison for the Text to SQL method. Unlike the Semantic Layer, Text to SQL can attempt the too-many-hops questions — it has no built-in awareness that certain joins are problematic — so results on those questions reflect whether the model happened to produce correct SQL, not whether it correctly refused.

```sql sql_comparison_sonnet
with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 Sonnet'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1771947220583)
    and "method" = 'sql'
    and (batch_id = -1 or model like '%sonnet%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort
```

<BarChart
    data={sql_comparison_sonnet}
    title="Text to SQL: 2023 vs 2026 Sonnet 4.6"
    x=challenge_text
    y="Percentage Correct"
    series="Cohort"
    type=grouped
    sort=false
    yFmt=pct0
    yMax=1
    yAxisTitle="Percentage correct"
    swapXY=true
/>

```sql sql_comparison_codex
with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 GPT-5.3 Codex'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1772040337760)
    and "method" = 'sql'
    and (batch_id = -1 or model like '%codex%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort
```

<BarChart
    data={sql_comparison_codex}
    title="Text to SQL: 2023 vs 2026 GPT-5.3 Codex"
    x=challenge_text
    y="Percentage Correct"
    series="Cohort"
    type=grouped
    sort=false
    yFmt=pct0
    yMax=1
    yAxisTitle="Percentage correct"
    swapXY=true
/>
