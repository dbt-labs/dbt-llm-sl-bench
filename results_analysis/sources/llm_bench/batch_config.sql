-- Batch ID configuration for dashboard pages.
-- Add new batch IDs here to include them in the relevant pages.

select 1771925711180 as batch_id, 'compare'        as page, 'without_modeling' as config_type union all
select 1771947220583,              'repeated_runs', 'without_modeling'                         union all
select 1772040337760,              'repeated_runs', 'without_modeling'                         union all
select 1771950920101,              'repeated_runs', 'with_modeling'                            union all
select 1772035331932,              'repeated_runs', 'with_modeling'
