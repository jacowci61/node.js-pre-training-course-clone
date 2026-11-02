CREATE TABLE audit_log (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    todo_id INT NOT NULL,
    action ENUM('CREATE', 'READ', 'UPDATE', 'DELETE') NOT NULL,
    changed_at TIMESTAMP default CURRENT_TIMESTAMP
);
-- ---------------------------------
DELIMITER //

CREATE TRIGGER log_todos_update
AFTER UPDATE ON todos
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (todo_id, action)
    VALUES (NEW.id, 'UPDATE');
END;
//
DELIMITER ;

UPDATE todos SET title = 'trigger test' WHERE id = 1;
SELECT * FROM audit_log;
-- ----------------------------------
DELIMITER //

CREATE TRIGGER log_todos_delete
AFTER DELETE ON todos
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (todo_id, action)
    VALUES (OLD.id, 'DELETE');
END;
//
DELIMITER ;

DELETE FROM todos WHERE id = 1;
SELECT * FROM audit_log;
