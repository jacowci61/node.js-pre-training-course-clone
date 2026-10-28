CREATE INDEX status_index ON todos (status);
-- ---------------------------
EXPLAIN
SELECT id, title, status, created_at
FROM todos
WHERE status = 'COMPLETED';
