---
title: Timing analysis
---

## Average Query Time Comparison: SQL vs Semantic Layer (2025)

```sql timing_comparison_2025
with data as (
  select
    *
  from sql_answers
  where batch_id in (1762980162913, 1762986595434)
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL'
    else "method"
  end as "Method",
  avg(timing) as "Average Time (seconds)"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"
```

<BarChart
    data={timing_comparison_2025}
    title="Average Query Time by Method (2025)"
    x=challenge_text
    y="Average Time (seconds)"
    series="Method"
    type=grouped
    sort=false
    yAxisTitle="Time (seconds)"
    swapXY=true
/>

