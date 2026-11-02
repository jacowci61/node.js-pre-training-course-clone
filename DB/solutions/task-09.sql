CREATE TABLE audit_log (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    todo_id INT NOT NULL,
    action ENUM('CREATE', 'READ', 'UPDATE', 'DELETE') NOT NULL,
    changed_at TIMESTAMP default CURRENT_TIMESTAMP
);
