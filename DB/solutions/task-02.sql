insert into users (id, name)
values ("1", "Username")
insert into todos (title, description, status, user_id)
values ("TodoTitle", "TodoDescription", "IN_PROGRESS", 1)
insert into todos (title, description, status, user_id)
-- -------------------  
values ("TodoTitle2", "TodoDescription", "IN_PROGRESS", 1) -- to have multiple todo rows
-- -------------------  
SELECT * FROM todos
-- -------------------  
update todos
set
todos.status = "COMPLETED"
where id in (5) -- select specific todo by its id
-- -------------------
delete from todos
where id in (5) -- select specific todo by its id
