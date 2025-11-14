---
title: Benchmark analysis
---

## Re-runnnging the benchmark

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


```sql grouped_benchmark
with data as (
  select
    * from sql_answers where batch_id in (1762980162913, 1762986595434)
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
    data={grouped_benchmark}
    title="Nov 2025 benchmark results"
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
      when batch_id in (1762980162913, 1762986595434) then '2025'
    end as year
  from sql_answers
  where batch_id in (-1, 1762980162913, 1762986595434)
)

, calc as (
  select
    too_many_hops,
    year,
    "method",
    avg(case when is_correct then 1.0 else 0.0 end) as percentage_correct
  from data
  group by too_many_hops, year, "method"
)

, calc_all as (
  select
    null as too_many_hops,
    year,
    "method",
    avg(case when is_correct then 1.0 else 0.0 end) as percentage_correct
  from data
  group by year, "method"
)

, combined as (
  select * from calc
  union all
  select * from calc_all
)

, pivoted as (
  pivot combined
  on year, "method"
  using avg(percentage_correct) as percentage_correct
  group by too_many_hops
)

select
  case
    when too_many_hops is null then 'All'
    when too_many_hops then 'True'
    else 'False'
  end as "Too Many Hops",
  "2023_sql_percentage_correct" as "SQL 2023",
  "2025_sql_percentage_correct" as "SQL 2025",
  ("2025_sql_percentage_correct" - "2023_sql_percentage_correct") / "2023_sql_percentage_correct" as "SQL % Change",
  "2023_semantic_layer_percentage_correct" as "SL 2023",
  "2025_semantic_layer_percentage_correct" as "SL 2025",
  ("2025_semantic_layer_percentage_correct" - "2023_semantic_layer_percentage_correct") / "2023_semantic_layer_percentage_correct" as "SL % Change"
from pivoted
order by
  case when too_many_hops is null then 2 else 0 end,
  too_many_hops
```

<DataTable data={summary_table}>
  <Column id="Too Many Hops"/>
  <Column id="SQL 2023" fmt=pct1/>
  <Column id="SQL 2025" fmt=pct1/>
  <Column id="SQL % Change" fmt=pct1/>
  <Column id="SL 2023" fmt=pct1/>
  <Column id="SL 2025" fmt=pct1/>
  <Column id="SL % Change" fmt=pct1/>
</DataTable>

## Comparing 2023 and 2025 results for SQL and SL

- Some results got worst:
  - Q10 for SL
  - Q7 for SQL
- Some results we said had too manu hops are OK now:
  - Q6 for SL

```sql semantic_layer_comparison
with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      when batch_id in (1762980162913, 1762986595434) then '2025'
    end as year
  from sql_answers
  where batch_id in (-1, 1762980162913, 1762986595434)
    and "method" = 'semantic_layer'
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  year as "Year",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, year
order by sort_order, year
```

<BarChart
    data={semantic_layer_comparison}
    title="Semantic Layer: 2023 vs 2025"
    x=challenge_text
    y="Percentage Correct"
    series="Year"
    type=grouped
    sort=false
    yFmt=pct0
    yMax=1
    yAxisTitle="Percentage correct"
    swapXY=true
/>


```sql sql_comparison
with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      when batch_id in (1762980162913, 1762986595434) then '2025'
    end as year
  from sql_answers
  where batch_id in (-1, 1762980162913, 1762986595434)
    and "method" = 'sql'
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  year as "Year",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, year
order by sort_order, year
```

<BarChart
    data={sql_comparison}
    title="SQL: 2023 vs 2025"
    x=challenge_text
    y="Percentage Correct"
    series="Year"
    type=grouped
    sort=false
    yFmt=pct0
    yMax=1
    yAxisTitle="Percentage correct"
    swapXY=true
/>

