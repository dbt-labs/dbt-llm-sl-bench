---
title: WIP - October 29th Comparison by Method and Model
---

## Results by Method and Model (October 29, 2025)

```sql oct29_comparison
with data as (
  select
    *,
    to_timestamp(timestamp::bigint)::timestamp as run_datetime,
    date_trunc('day', to_timestamp(timestamp::bigint)::timestamp) as run_date
  from sql_answers
  --where date_trunc('day', to_timestamp(timestamp::bigint)::timestamp) = DATE '2025-09-10'
  where batch_id in (1763036215053, 1763036238449)
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'SL'
    when "method" = 'sql' then 'SQL'
    else "method"
  end || ' - ' || model as "Method & Model",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method", model
order by sort_order, "method", model
```

<BarChart
    data={oct29_comparison}
    title="October 29th Results by Method and Model"
    x=challenge_text
    y="Percentage Correct"
    series="Method & Model"
    type=grouped
    sort=false
    yFmt=pct0
    yMax=1
    yAxisTitle="Percentage correct"
    swapXY=true
/>

## Summary Statistics

```sql oct29_summary
with data as (
  select
    *,
    to_timestamp(timestamp::bigint)::timestamp as run_datetime,
    date_trunc('day', to_timestamp(timestamp::bigint)::timestamp) as run_date
  from sql_answers
  --where date_trunc('day', to_timestamp(timestamp::bigint)::timestamp) = DATE '2025-09-10'
  where batch_id in (1763036215053, 1763036238449)
)

select
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL'
    else "method"
  end as "Method",
  model as "Model",
  count(*) as "Total Queries",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct",
  avg(timing) as "Avg Time (seconds)"
from data
group by "method", model
order by "method", model
```

<DataTable data={oct29_summary}>
  <Column id="Method"/>
  <Column id="Model"/>
  <Column id="Total Queries"/>
  <Column id="Percentage Correct" fmt=pct1/>
  <Column id="Avg Time (seconds)" fmt=num2/>
</DataTable>
