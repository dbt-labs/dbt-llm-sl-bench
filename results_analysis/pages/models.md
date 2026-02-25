---
title: Model Comparison
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

## SL vs SQL Accuracy by Model (Answerable Questions Only)

```sql sl_vs_sql
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  round(100.0 * sum(case when method = 'semantic_layer' then is_correct::int end)
      / nullif(sum(case when method = 'semantic_layer' then 1 end), 0), 1) as "SL Accuracy %",
  round(100.0 * sum(case when method = 'sql' then is_correct::int end)
      / nullif(sum(case when method = 'sql' then 1 end), 0), 1) as "SQL Accuracy %",
  round(100.0 * sum(case when method = 'semantic_layer' then is_correct::int end)
      / nullif(sum(case when method = 'semantic_layer' then 1 end), 0), 1)
  - round(100.0 * sum(case when method = 'sql' then is_correct::int end)
      / nullif(sum(case when method = 'sql' then 1 end), 0), 1) as "SL Advantage (pp)"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and is_successful
  and not too_many_hops
group by model
order by "SL Advantage (pp)" desc
```

<BarChart
    data={sl_vs_sql}
    title="SL vs SQL Accuracy on Answerable Questions"
    x=Model
    y={"SL Accuracy %"}
    y2={"SQL Accuracy %"}
    type=grouped
    sort=false
    yAxisTitle="Accuracy %"
    yMax=100
/>

<DataTable data={sl_vs_sql} rows=20>
  <Column id="Model"/>
  <Column id="SL Accuracy %" fmt=num1/>
  <Column id="SQL Accuracy %" fmt=num1/>
  <Column id="SL Advantage (pp)" fmt=num1/>
</DataTable>

## Does Reasoning Effort Matter?

```sql effort_impact
with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2) as effort,
    method,
    is_correct,
    timing,
    cost
  from sql_answers
  where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
    and is_successful
    and not too_many_hops
)
select
  base_model as "Base Model",
  effort as "Effort",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost/Query ($)"
from parsed
group by base_model, effort, method
order by base_model, method,
  case effort
    when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
  end
```

<DataTable data={effort_impact} search=true rows=all groupBy="Base Model">
  <Column id="Base Model"/>
  <Column id="Effort"/>
  <Column id="Method"/>
  <Column id="Accuracy %" fmt=num1 contentType=colorscale scaleColor=green/>
  <Column id="Avg Latency (s)" fmt=num2/>
  <Column id="Avg Cost/Query ($)" fmt=num4/>
</DataTable>

### Effort vs Accuracy — Semantic Layer

```sql effort_sl
with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2) as effort,
    is_correct
  from sql_answers
  where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
    and method = 'semantic_layer'
    and is_successful
    and not too_many_hops
)
select
  base_model || ' / ' || effort as "Model & Effort",
  base_model as "Base Model",
  effort as "Effort",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from parsed
group by base_model, effort
order by base_model,
  case effort
    when 'none' then 1 when 'low' then 2 when 'medium' then 3
    when 'high' then 4 when 'max' then 5 when 'xhigh' then 6
  end
```

<BarChart
    data={effort_sl}
    title="SL Accuracy by Model and Effort Level (Answerable Only)"
    x="Model & Effort"
    y="Accuracy %"
    series="Base Model"
    swapXY=true
    sort=false
    yMax=100
/>

### Effort vs Accuracy — SQL

```sql effort_sql
with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2) as effort,
    is_correct
  from sql_answers
  where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
    and method = 'sql'
    and is_successful
    and not too_many_hops
)
select
  base_model || ' / ' || effort as "Model & Effort",
  base_model as "Base Model",
  effort as "Effort",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from parsed
group by base_model, effort
order by base_model,
  case effort
    when 'none' then 1 when 'low' then 2 when 'medium' then 3
    when 'high' then 4 when 'max' then 5 when 'xhigh' then 6
  end
```

<BarChart
    data={effort_sql}
    title="SQL Accuracy by Model and Effort Level (Answerable Only)"
    x="Model & Effort"
    y="Accuracy %"
    series="Base Model"
    swapXY=true
    sort=false
    yMax=100
/>

## Consistency Across Iterations

```sql consistency
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'SQL'
    else method
  end as "Method",
  round(avg(iter_acc), 1) as "Mean Accuracy %",
  round(stddev(iter_acc), 1) as "Std Dev",
  round(min(iter_acc), 1) as "Min %",
  round(max(iter_acc), 1) as "Max %"
from (
  select
    model,
    method,
    iteration,
    100.0 * sum(is_correct::int) / count(*) as iter_acc
  from sql_answers
  where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
    and is_successful
    and not too_many_hops
  group by model, method, iteration
) sub
group by model, method
order by "Std Dev" desc
```

<DataTable data={consistency} search=true rows=20>
  <Column id="Model"/>
  <Column id="Method"/>
  <Column id="Mean Accuracy %" fmt=num1/>
  <Column id="Std Dev" fmt=num1/>
  <Column id="Min %" fmt=num1/>
  <Column id="Max %" fmt=num1/>
</DataTable>
