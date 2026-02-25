---
title: Timing Analysis
---

```sql available_batch_ids
select distinct batch_id
from sql_answers
where batch_id != -1
order by batch_id desc
```

```sql available_models
select distinct
  model,
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as model_label
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
order by model_label
```

<DefaultValue
    name=selected_batch_ids
    value="(select max(batch_id) from sql_answers where batch_id != -1)"
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
    data={available_models}
    name=selected_models
    value=model
    label=model_label
    multiple=true
    selectAllByDefault=true
    title="Select Models"
/>

## Latency by Method

```sql timing_by_method
select
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'SQL'
    else method
  end as "Method",
  round(avg(timing), 2) as "Avg (s)",
  round(median(timing), 2) as "Median (s)",
  round(min(timing), 2) as "Min (s)",
  round(max(timing), 2) as "Max (s)"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and is_successful
group by method
```

<DataTable data={timing_by_method}>
  <Column id="Method"/>
  <Column id="Avg (s)" fmt=num2/>
  <Column id="Median (s)" fmt=num2/>
  <Column id="Min (s)" fmt=num2/>
  <Column id="Max (s)" fmt=num2/>
</DataTable>

## Latency by Model

```sql timing_by_model
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'SQL'
    else method
  end as "Method",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median (s)",
  count(*) as "Runs"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and is_successful
group by model, method
order by "Avg Latency (s)" desc
```

<BarChart
    data={timing_by_model}
    title="Average Latency by Model"
    x=Model
    y="Avg Latency (s)"
    series=Method
    type=grouped
    swapXY=true
    sort=false
    yAxisTitle="Seconds"
/>

## Latency Distribution

```sql timing_distribution
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'SQL'
    else method
  end as "Method",
  timing as "Latency (s)"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and is_successful
```

<BoxPlot
    data={timing_distribution}
    title="Latency Distribution by Model"
    name=Model
    midpoint="Latency (s)"
    swapXY=true
/>

## Latency by Question

```sql timing_by_question
select
  sort_order::int::string || ' - ' || left(challenge_text, 45) as "Question",
  sort_order,
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'SQL'
    else method
  end as "Method",
  round(avg(timing), 2) as "Avg Latency (s)"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and is_successful
group by challenge_text, sort_order, method
order by sort_order, method
```

<BarChart
    data={timing_by_question}
    title="Average Latency by Question"
    x=Question
    y="Avg Latency (s)"
    series=Method
    type=grouped
    sort=false
    swapXY=true
    yAxisTitle="Seconds"
/>

## Does More Thinking Time = Better Accuracy?

```sql time_vs_accuracy
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'SQL'
    else method
  end as "Method",
  replace(replace(model, 'anthropic:', ''), 'openai:', '') || ' / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  round(avg(timing), 1) as "Avg Latency (s)",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and is_successful
  and not too_many_hops
group by model, method
```

<ScatterPlot
    data={time_vs_accuracy}
    title="Latency vs Accuracy (Answerable Questions)"
    x="Avg Latency (s)"
    y="Accuracy %"
    series=Method
    tooltipTitle=Config
    xAxisTitle="Avg Latency (s)"
    yAxisTitle="Accuracy %"
    yMax=100
/>
