CREATE DATABASE todo_app;

CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE todos (
    id INT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    status ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED') NOT NULL DEFAULT 'PENDING',
    created_at TIMESTAMP,
    user_id INT NOT NULL,
    FOREIGN KEY(user_id) references users(id) 
);

-- i had MySQL already installed and configured, so i didn't enter any console commands
-- this script creates a database to store tables, then creates parent table (users)
-- and child table (todos), with foreign key referencing "id" column from "users" table
