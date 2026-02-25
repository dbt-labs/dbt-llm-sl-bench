---
title: Historical Comparison (2023 vs 2026)
---

## Re-running the benchmark

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
    when "method" = 'sql' then 'SQL'
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
    when "method" = 'sql' then 'SQL'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"
```

<BarChart
    data={grouped_benchmark_sonnet}
    title="Feb 2026 — Sonnet 4.6"
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
    when "method" = 'sql' then 'SQL'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"
```

<BarChart
    data={grouped_benchmark_codex}
    title="Feb 2026 — GPT-5.3 Codex"
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
  "2023_sql_pct" as "SQL 2023",
  "2026 Sonnet 4.6_sql_pct" as "SQL Sonnet 4.6",
  "2026 GPT-5.3 Codex_sql_pct" as "SQL GPT-5.3 Codex",
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
  <Column id="SQL 2023" fmt=pct1/>
  <Column id="SQL Sonnet 4.6" fmt=pct1/>
  <Column id="SQL GPT-5.3 Codex" fmt=pct1/>
  <Column id="SL 2023" fmt=pct1/>
  <Column id="SL Sonnet 4.6" fmt=pct1/>
  <Column id="SL GPT-5.3 Codex" fmt=pct1/>
</DataTable>

## Semantic Layer: 2023 vs 2026

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

## SQL: 2023 vs 2026

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
    title="SQL: 2023 vs 2026 Sonnet 4.6"
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
    title="SQL: 2023 vs 2026 GPT-5.3 Codex"
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

## Enhanced DDL + New SL Models (Feb 2026)

```sql enhanced_sonnet
select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (enhanced DDL)'
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
    title="Sonnet 4.6 — SL (new models) vs SQL (enhanced DDL)"
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
    when "method" = 'sql' then 'SQL (enhanced DDL)'
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
    title="GPT-5.3 Codex — SL (new models) vs SQL (enhanced DDL)"
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

```sql enhanced_summary
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (enhanced DDL)'
    else "method"
  end as "Method",
  round(100.0 * avg(case when is_correct then 1.0 else 0.0 end), 1) as "Accuracy %",
  count(*) as "Runs"
from sql_answers
where batch_id in (1771950920101, 1772035331932)
  and model not like '%gpt-5.2%'
group by model, "method"
order by model, "method"
```

<DataTable data={enhanced_summary} rows=all>
  <Column id="Model"/>
  <Column id="Method"/>
  <Column id="Accuracy %" fmt=num1 contentType=colorscale scaleColor={['#ff4444', '#44bb44']}/>
  <Column id="Runs" fmt=num0/>
</DataTable>
