---
title: Per-Question Deep Dive
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

## Question Difficulty Ranking

```sql question_difficulty
select
  sort_order::int::string || ' - ' || left(challenge_text, 60) as "Question",
  too_many_hops as "Too Many Hops",
  round(100.0 * sum(case when method = 'semantic_layer' then is_correct::int end)
      / nullif(sum(case when method = 'semantic_layer' and is_successful then 1 end), 0), 1) as "SL Accuracy %",
  round(100.0 * sum(case when method = 'sql' then is_correct::int end)
      / nullif(sum(case when method = 'sql' and is_successful then 1 end), 0), 1) as "SQL Accuracy %",
  sum(case when method = 'semantic_layer' and is_successful then 1 else 0 end) as "SL Attempts",
  sum(case when method = 'sql' and is_successful then 1 else 0 end) as "SQL Attempts"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
group by challenge_text, sort_order, too_many_hops
order by sort_order
```

<DataTable data={question_difficulty} rows=all>
  <Column id="Question"/>
  <Column id="Too Many Hops"/>
  <Column id="SL Accuracy %" fmt=num1 contentType=colorscale scaleColor={['#ff4444', '#44bb44']}/>
  <Column id="SQL Accuracy %" fmt=num1 contentType=colorscale scaleColor={['#ff4444', '#44bb44']}/>
  <Column id="SL Attempts" fmt=num0/>
  <Column id="SQL Attempts" fmt=num0/>
</DataTable>

## Too-Many-Hops: How Do Models Fail via the Semantic Layer?

```sql hops_failure_modes
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  sum(case when not is_successful then 1 else 0 end) as "Generation Failed",
  sum(case when is_successful and upper(sql) like '%CANNOT_ANSWER%' then 1 else 0 end) as "Said CANNOT_ANSWER",
  sum(case when is_successful and upper(sql) not like '%CANNOT_ANSWER%'
    and comparison_error like 'Query error%' then 1 else 0 end) as "SL Rejected Query",
  sum(case when is_successful and upper(sql) not like '%CANNOT_ANSWER%'
    and (comparison_error is null or comparison_error not like 'Query error%')
    and not is_correct then 1 else 0 end) as "Returned Wrong Data",
  count(*) as "Total"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and method = 'semantic_layer'
  and too_many_hops
group by model
order by "Said CANNOT_ANSWER" desc, "Returned Wrong Data" asc
```

<DataTable data={hops_failure_modes} rows=all>
  <Column id="Model"/>
  <Column id="Said CANNOT_ANSWER" fmt=num0/>
  <Column id="SL Rejected Query" fmt=num0/>
  <Column id="Returned Wrong Data" fmt=num0 contentType=colorscale scaleColor={['#ffffff', '#ff4444']}/>
  <Column id="Generation Failed" fmt=num0/>
  <Column id="Total" fmt=num0/>
</DataTable>

_"Returned Wrong Data" is the dangerous case — the SL executed the query but returned incorrect results. Ideally this should be 0 everywhere._

## Too-Many-Hops: SQL Can Still Answer

```sql hops_sql_detail
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  left(challenge_text, 55) as "Question",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "SQL Accuracy %"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and method = 'sql'
  and too_many_hops
  and is_successful
group by model, challenge_text
order by challenge_text, "SQL Accuracy %" desc
```

<BarChart
    data={hops_sql_detail}
    title="SQL Accuracy on Too-Many-Hops Questions"
    x=Model
    y="SQL Accuracy %"
    series=Question
    type=grouped
    swapXY=true
    sort=false
    yMax=100
/>

## Per-Question Accuracy: SL by Model

```sql per_q_sl
select
  sort_order::int::string || ' - ' || left(challenge_text, 40) as "Question",
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and method = 'semantic_layer'
  and is_successful
  and not too_many_hops
group by challenge_text, sort_order, model
order by sort_order, model
```

<Heatmap
    data={per_q_sl}
    title="SL Accuracy by Model and Question (Answerable Only)"
    x=Model
    y=Question
    value="Accuracy %"
    valueFmt=num0
/>

## Per-Question Accuracy: SQL by Model

```sql per_q_sql
select
  sort_order::int::string || ' - ' || left(challenge_text, 40) as "Question",
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id IN ${inputs.selected_batch_ids.value}
  and model IN ${inputs.selected_models.value}
  and method = 'sql'
  and is_successful
  and not too_many_hops
group by challenge_text, sort_order, model
order by sort_order, model
```

<Heatmap
    data={per_q_sql}
    title="SQL Accuracy by Model and Question (Answerable Only)"
    x=Model
    y=Question
    value="Accuracy %"
    valueFmt=num0
/>
