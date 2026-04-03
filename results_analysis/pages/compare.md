---
title: Comparing models and thinking effort - Without modeling
sidebar_position: 1
---

Each model was given 11 insurance-domain questions (claims, policies, premiums) and asked to answer them via two methods: **Semantic Layer** (MetricFlow queries) and **SQL** (direct SQL generation). Each model/effort combination was run 5 times to account for variance. 3 of the 11 questions are "too many hops" — they require joins the Semantic Layer cannot express, testing whether models correctly refuse or fail gracefully.

> **Note:** SQL runs on this page use the schema **without modeling** (no additional dbt models, raw DDL only).

```sql available_batch_ids
select distinct batch_id
from sql_answers
where batch_id != -1
order by batch_id desc
```

```sql available_base_models
select distinct
  split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and is_successful
order by base_model
```

```sql available_efforts
select distinct
  coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${inputs.selected_base_models.value}
  and is_successful
order by case effort
    when '-' then 0 when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
  end
```

<DefaultValue
    name=selected_batch_ids
    value="(select batch_id from sql_answers where batch_id != -1 group by batch_id having count(*) >= 2000)"
/>

<Dropdown
    data={available_batch_ids}
    name=selected_batch_ids
    value=batch_id
    multiple=true
    selectAllByDefault=false
    noDefault=true
    title="Select Batch IDs"
    order="batch_id desc"
/>

<Dropdown
    data={available_base_models}
    name=selected_base_models
    value=base_model
    multiple=true
    selectAllByDefault=true
    title="Select Models"
/>

<Dropdown
    data={available_efforts}
    name=selected_efforts
    value=effort
    multiple=true
    selectAllByDefault=true
    title="Select Effort"
/>

<Dropdown
    name=question_filter
    title="Questions"
>
    <DropdownOption value="answerable" valueLabel="Answerable Only"/>
    <DropdownOption value="all" valueLabel="All Questions"/>
    <DropdownOption value="hops" valueLabel="Too-Many-Hops Only"/>
</Dropdown>

```sql model_summary
with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN ${inputs.selected_batch_ids.value}
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${inputs.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${inputs.selected_efforts.value}
    and is_successful
    and (
      '${inputs.question_filter.value}' = 'all'
      or ('${inputs.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${inputs.question_filter.value}' = 'hops' and too_many_hops)
    )
)
select
  base_model as "Model",
  effort as "Effort",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  count(*) as "Runs",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 4) as "Total Cost ($)",
  round(sum(is_correct::int) / nullif(sum(cost), 0), 0) as "Correct / $"
from parsed
group by base_model, effort, method
order by "Accuracy %" desc, "Avg Latency (s)" asc
```

## Summary

<DataTable data={model_summary} search=true rows=all>
  <Column id="Model"/>
  <Column id="Effort"/>
  <Column id="Method"/>
  <Column id="Runs" fmt=num0/>
  <Column id="Accuracy %" fmt=num1 contentType=colorscale scaleColor={['#ff4444', '#44bb44']}/>
  <Column id="Avg Latency (s)" fmt=num2/>
  <Column id="Median Latency (s)" fmt=num2/>
  <Column id="Avg Cost ($)" fmt=num4/>
  <Column id="Total Cost ($)" fmt=num4/>
  <Column id="Correct / $" fmt=num0/>
</DataTable>

## Accuracy

```sql accuracy_chart
with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct
  from sql_answers
  where batch_id IN ${inputs.selected_batch_ids.value}
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${inputs.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${inputs.selected_efforts.value}
    and is_successful
    and (
      '${inputs.question_filter.value}' = 'all'
      or ('${inputs.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${inputs.question_filter.value}' = 'hops' and too_many_hops)
    )
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from parsed
group by base_model, effort, method
order by base_model, case effort
    when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
    else 0 end, method
```

<BarChart
    data={accuracy_chart}
    title="Accuracy by Model"
    x=Model
    y="Accuracy %"
    series=Method
    type=grouped
    swapXY=true
    sort=false
    yMax=100
    yAxisTitle="Accuracy %"
/>

## Latency

```sql latency_chart
with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, timing
  from sql_answers
  where batch_id IN ${inputs.selected_batch_ids.value}
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${inputs.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${inputs.selected_efforts.value}
    and is_successful
    and (
      '${inputs.question_filter.value}' = 'all'
      or ('${inputs.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${inputs.question_filter.value}' = 'hops' and too_many_hops)
    )
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)"
from parsed
group by base_model, effort, method
order by base_model, case effort
    when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
    else 0 end, method
```

<BarChart
    data={latency_chart}
    title="Average Latency by Model"
    x=Model
    y="Avg Latency (s)"
    series=Method
    type=grouped
    swapXY=true
    sort=false
    yAxisTitle="Seconds"
/>

<BarChart
    data={latency_chart}
    title="Median Latency by Model"
    x=Model
    y="Median Latency (s)"
    series=Method
    type=grouped
    swapXY=true
    sort=false
    yAxisTitle="Seconds"
/>

## Cost

```sql cost_chart
with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, cost
  from sql_answers
  where batch_id IN ${inputs.selected_batch_ids.value}
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${inputs.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${inputs.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${inputs.question_filter.value}' = 'all'
      or ('${inputs.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${inputs.question_filter.value}' = 'hops' and too_many_hops)
    )
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 4) as "Total Cost ($)"
from parsed
group by base_model, effort, method
order by base_model, case effort
    when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
    else 0 end, method
```

<BarChart
    data={cost_chart}
    title="Average Cost per Query"
    x=Model
    y="Avg Cost ($)"
    series=Method
    type=grouped
    swapXY=true
    sort=false
    yAxisTitle="Cost ($)"
/>

## Tradeoffs

_Ideal: top-left corner (high accuracy, low cost/latency)_

```sql tradeoff
with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN ${inputs.selected_batch_ids.value}
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${inputs.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${inputs.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${inputs.question_filter.value}' = 'all'
      or ('${inputs.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${inputs.question_filter.value}' = 'hops' and too_many_hops)
    )
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  base_model || ' (' || effort || ') / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(avg(timing), 1) as "Avg Latency (s)"
from parsed
group by base_model, effort, method
```

<ScatterPlot
    data={tradeoff}
    title="Accuracy vs Cost"
    x="Avg Cost ($)"
    y="Accuracy %"
    series=Method
    tooltipTitle=Config
    xAxisTitle="Avg Cost per Query ($)"
    yAxisTitle="Accuracy %"
    yMax=100
/>

<ScatterPlot
    data={tradeoff}
    title="Accuracy vs Latency"
    x="Avg Latency (s)"
    y="Accuracy %"
    series=Method
    tooltipTitle=Config
    xAxisTitle="Avg Latency (s)"
    yAxisTitle="Accuracy %"
    yMax=100
/>

<ScatterPlot
    data={tradeoff}
    title="Cost vs Latency"
    x="Avg Latency (s)"
    y="Avg Cost ($)"
    series=Method
    tooltipTitle=Config
    xAxisTitle="Avg Latency (s)"
    yAxisTitle="Avg Cost per Query ($)"
/>

