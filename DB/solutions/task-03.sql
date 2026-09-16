SELECT * FROM todos
where status = "IN_PROGRESS"
-- ------------------------
SELECT * FROM todos
where status = "COMPLETED"
-- ------------------------
SELECT * FROM todos
order by created_at ASC
-- ------------------------
SELECT * FROM todos
order by created_at DESC
-- ------------------------
SELECT * FROM todos
where title like "%specific%"
