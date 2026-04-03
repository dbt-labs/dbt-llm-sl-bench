---
title: Repeated runs on selected models
sidebar_position: 2
---

Three models — **claude-sonnet-4-6**, **gpt-5.2-2025-12-11**, and **gpt-5.3-codex** — were each run 20 times on the same 11 questions to measure consistency and variance — not just average accuracy, but how much results fluctuate across runs.

This page compares two configurations:

- **Without modeling** — SQL is generated directly against raw DDL, with no additional dbt models. The Semantic Layer works but cannot answer the 3 "too many hops" questions, which require joins it cannot express.
- **With modeling** — Additional dbt models were created to resolve the hop limitations. This unlocks those 3 questions for the Semantic Layer and gives the SQL generator a richer schema to work with.

---

## Without modeling

Without additional dbt models, the Semantic Layer cannot answer the 3 "too many hops" questions — it will always score 0% on those. Including them would unfairly drag down its overall accuracy. Use the filter below to explore all questions, or isolate the too-many-hops questions to see how each method handles an unanswerable request.

<Dropdown
    name=hops_filter_no_modeling
    title="Questions"
>
    <DropdownOption value="answerable" valueLabel="Answerable Only"/>
    <DropdownOption value="all" valueLabel="All Questions"/>
    <DropdownOption value="hops" valueLabel="Too-Many-Hops Only"/>
</Dropdown>

```sql summary_no_modeling
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  count(*) as "Runs",
  count(distinct iteration) as "Iterations",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 2) as "Total Cost ($)"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
  and is_successful
  and (
    '${inputs.hops_filter_no_modeling.value}' = 'all'
    or ('${inputs.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
    or ('${inputs.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
  )
group by model, method
order by "Accuracy %" desc, "Avg Latency (s)" asc
```

<DataTable data={summary_no_modeling} rows=all>
  <Column id="Model"/>
  <Column id="Method"/>
  <Column id="Runs" fmt=num0/>
  <Column id="Iterations" fmt=num0/>
  <Column id="Accuracy %" fmt=num1 contentType=colorscale colorScale={['#ff4444', '#44bb44']}/>
  <Column id="Avg Latency (s)" fmt=num2/>
  <Column id="Median Latency (s)" fmt=num2/>
  <Column id="Avg Cost ($)" fmt=num4/>
  <Column id="Total Cost ($)" fmt=num2/>
</DataTable>

```sql accuracy_no_modeling
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
  and is_successful
  and (
    '${inputs.hops_filter_no_modeling.value}' = 'all'
    or ('${inputs.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
    or ('${inputs.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
  )
group by model, method
order by "Accuracy %" desc
```

<BarChart
    data={accuracy_no_modeling}
    title="Accuracy by Model — Without Modeling"
    x=Model
    y="Accuracy %"
    series=Method
    type=grouped
    swapXY=true
    sort=false
    yMax=100
    yAxisTitle="Accuracy %"
/>

```sql consistency_no_modeling
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(avg(iter_acc), 1) as "Mean Accuracy %",
  round(stddev(iter_acc), 1) as "Std Dev",
  round(min(iter_acc), 1) as "Worst Run %",
  round(max(iter_acc), 1) as "Best Run %",
  round(max(iter_acc) - min(iter_acc), 1) as "Spread (pp)"
from (
  select
    model, method, iteration,
    100.0 * sum(is_correct::int) / count(*) as iter_acc
  from sql_answers
  where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
    and is_successful
    and (
      '${inputs.hops_filter_no_modeling.value}' = 'all'
      or ('${inputs.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
      or ('${inputs.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
    )
  group by model, method, iteration
) sub
group by model, method
order by "Std Dev" desc
```

<DataTable data={consistency_no_modeling} rows=all>
  <Column id="Model"/>
  <Column id="Method"/>
  <Column id="Mean Accuracy %" fmt=num1 contentType=colorscale colorScale={['#ff4444', '#44bb44']}/>
  <Column id="Std Dev" fmt=num1/>
  <Column id="Worst Run %" fmt=num1/>
  <Column id="Best Run %" fmt=num1/>
  <Column id="Spread (pp)" fmt=num1/>
</DataTable>

```sql iter_no_modeling
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') || ' / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  iteration as "Iteration",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
  and is_successful
  and (
    '${inputs.hops_filter_no_modeling.value}' = 'all'
    or ('${inputs.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
    or ('${inputs.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
  )
group by model, method, iteration
order by model, method, iteration
```

<LineChart
    data={iter_no_modeling}
    title="Accuracy by Iteration — Without Modeling"
    x=Iteration
    y="Accuracy %"
    series=Config
    yMax=100
    yAxisTitle="Accuracy %"
    xAxisTitle="Iteration"
/>

---

## With modeling

With additional dbt models in place, the "too many hops" questions are no longer a limitation — the Semantic Layer can now answer all 11 questions. There is no filter here because all questions are meaningful and excluding any of them would hide the key result: that modeling resolves the hop problem entirely.

```sql summary_with_modeling
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  count(*) as "Runs",
  count(distinct iteration) as "Iterations",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 2) as "Total Cost ($)"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
  and is_successful
group by model, method
order by "Accuracy %" desc, "Avg Latency (s)" asc
```

<DataTable data={summary_with_modeling} rows=all>
  <Column id="Model"/>
  <Column id="Method"/>
  <Column id="Runs" fmt=num0/>
  <Column id="Iterations" fmt=num0/>
  <Column id="Accuracy %" fmt=num1 contentType=colorscale colorScale={['#ff4444', '#44bb44']}/>
  <Column id="Avg Latency (s)" fmt=num2/>
  <Column id="Median Latency (s)" fmt=num2/>
  <Column id="Avg Cost ($)" fmt=num4/>
  <Column id="Total Cost ($)" fmt=num2/>
</DataTable>

```sql accuracy_with_modeling
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
  and is_successful
group by model, method
order by "Accuracy %" desc
```

<BarChart
    data={accuracy_with_modeling}
    title="Accuracy by Model — With Modeling"
    x=Model
    y="Accuracy %"
    series=Method
    type=grouped
    swapXY=true
    sort=false
    yMax=100
    yAxisTitle="Accuracy %"
/>

```sql consistency_with_modeling
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(avg(iter_acc), 1) as "Mean Accuracy %",
  round(stddev(iter_acc), 1) as "Std Dev",
  round(min(iter_acc), 1) as "Worst Run %",
  round(max(iter_acc), 1) as "Best Run %",
  round(max(iter_acc) - min(iter_acc), 1) as "Spread (pp)"
from (
  select
    model, method, iteration,
    100.0 * sum(is_correct::int) / count(*) as iter_acc
  from sql_answers
  where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
    and is_successful
  group by model, method, iteration
) sub
group by model, method
order by "Std Dev" desc
```

<DataTable data={consistency_with_modeling} rows=all>
  <Column id="Model"/>
  <Column id="Method"/>
  <Column id="Mean Accuracy %" fmt=num1 contentType=colorscale colorScale={['#ff4444', '#44bb44']}/>
  <Column id="Std Dev" fmt=num1/>
  <Column id="Worst Run %" fmt=num1/>
  <Column id="Best Run %" fmt=num1/>
  <Column id="Spread (pp)" fmt=num1/>
</DataTable>

```sql iter_with_modeling
select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') || ' / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  iteration as "Iteration",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
  and is_successful
group by model, method, iteration
order by model, method, iteration
```

<LineChart
    data={iter_with_modeling}
    title="Accuracy by Iteration — With Modeling"
    x=Iteration
    y="Accuracy %"
    series=Config
    yMax=100
    yAxisTitle="Accuracy %"
    xAxisTitle="Iteration"
/>
