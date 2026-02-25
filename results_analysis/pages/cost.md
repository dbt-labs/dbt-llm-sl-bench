---
title: Cost & Efficiency
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

## Cost per Query by Model

```sql cost_by_model
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'SQL'
    else method
  end as "Method",
  count(*) as "Runs",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost/Query ($)",
  round(sum(cost), 2) as "Total Cost ($)"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and is_successful
  and cost is not null
group by model, method
order by "Avg Cost/Query ($)" desc
```

<BarChart
    data={cost_by_model}
    title="Average Cost per Query"
    x=Model
    y="Avg Cost/Query ($)"
    series=Method
    type=grouped
    swapXY=true
    sort=false
    yAxisTitle="Cost ($)"
/>

## Accuracy vs Cost (Answerable Questions)

_Ideal position: top-left (high accuracy, low cost)_

```sql acc_vs_cost
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'SQL'
    else method
  end as "Method",
  replace(replace(model, 'anthropic:', ''), 'openai:', '') || ' / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost/Query ($)",
  round(avg(timing), 1) as "Avg Latency (s)"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and is_successful
  and not too_many_hops
  and cost is not null
group by model, method
```

<ScatterPlot
    data={acc_vs_cost}
    title="Accuracy vs Cost per Query (Answerable Questions)"
    x="Avg Cost/Query ($)"
    y="Accuracy %"
    series=Method
    tooltipTitle=Config
    xAxisTitle="Avg Cost per Query ($)"
    yAxisTitle="Accuracy %"
    yMax=100
/>

## Accuracy vs Latency

_Ideal position: top-left (high accuracy, low latency)_

```sql acc_vs_latency
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') || ' / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 1) as "Avg Latency (s)"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and is_successful
  and not too_many_hops
group by model, method
```

<ScatterPlot
    data={acc_vs_latency}
    title="Accuracy vs Latency (Answerable Questions)"
    x="Avg Latency (s)"
    y="Accuracy %"
    series=Method
    tooltipTitle=Config
    xAxisTitle="Avg Latency (s)"
    yAxisTitle="Accuracy %"
    yMax=100
/>

## Cost Efficiency: Accuracy per Dollar

```sql cost_efficiency
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(sum(cost), 4) as "Total Cost ($)",
  round(sum(is_correct::int) / nullif(sum(cost), 0), 0) as "Correct Answers per $"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and is_successful
  and not too_many_hops
  and cost is not null
  and cost > 0
group by model, method
order by "Correct Answers per $" desc
```

<BarChart
    data={cost_efficiency}
    title="Correct Answers per Dollar (higher = better)"
    x=Model
    y="Correct Answers per $"
    series=Method
    type=grouped
    swapXY=true
    sort=false
/>

<DataTable data={cost_efficiency} search=true rows=20>
  <Column id="Model"/>
  <Column id="Method"/>
  <Column id="Accuracy %" fmt=num1/>
  <Column id="Total Cost ($)" fmt=num4/>
  <Column id="Correct Answers per $" fmt=num0/>
</DataTable>
