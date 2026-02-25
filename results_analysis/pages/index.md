---
title: Benchmark Overview
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

```sql overview_sl
select
  count(*) as "Total Runs",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and method = 'semantic_layer'
```

```sql overview_sql
select
  count(*) as "Total Runs",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and method = 'sql'
```

<BigValue data={overview_sl} value="Accuracy %" comparison="Total Runs" comparisonTitle="runs" title="Semantic Layer" fmt=num1 comparisonFmt=num0 />
<BigValue data={overview_sql} value="Accuracy %" comparison="Total Runs" comparisonTitle="runs" title="SQL" fmt=num1 comparisonFmt=num0 />

## Accuracy by Question

```sql by_question
select
  sort_order::int::string || ' - ' || left(challenge_text, 45) as question,
  sort_order,
  too_many_hops,
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'SQL'
    else method
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Accuracy"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and is_successful
group by challenge_text, sort_order, too_many_hops, method
order by sort_order, method
```

<BarChart
    data={by_question}
    title="Accuracy by Question — SL vs SQL"
    x=question
    y=Accuracy
    series=Method
    type=grouped
    sort=false
    yFmt=pct0
    yMax=1
    yAxisTitle="Accuracy"
    swapXY=true
/>

_Questions marked with sort orders 3, 6, 7 are `too_many_hops` — they require joins the Semantic Layer cannot express._

## Answerable vs Too-Many-Hops

```sql by_hops
select
  case when too_many_hops then 'Too Many Hops' else 'Answerable' end as "Category",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'SQL'
    else method
  end as "Method",
  count(*) as "Runs",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and is_successful
group by too_many_hops, method
order by too_many_hops, method
```

<DataTable data={by_hops}>
  <Column id="Category"/>
  <Column id="Method"/>
  <Column id="Runs" fmt=num0/>
  <Column id="Accuracy %" fmt=num1/>
  <Column id="Avg Latency (s)" fmt=num2/>
</DataTable>

On **answerable** questions, the Semantic Layer reaches near-perfect accuracy while SQL lags behind. On **too-many-hops** questions, SQL can still answer some while the SL correctly returns no data.

## Model Leaderboard (Answerable Questions Only)

```sql model_leaderboard
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
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost/Query ($)"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and is_successful
  and not too_many_hops
group by model, method
order by "Accuracy %" desc, "Avg Latency (s)" asc
```

<DataTable data={model_leaderboard} search=true rows=20>
  <Column id="Model"/>
  <Column id="Method"/>
  <Column id="Runs" fmt=num0/>
  <Column id="Accuracy %" fmt=num1/>
  <Column id="Avg Latency (s)" fmt=num2/>
  <Column id="Avg Cost/Query ($)" fmt=num4/>
</DataTable>
