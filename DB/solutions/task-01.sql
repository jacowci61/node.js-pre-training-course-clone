CREATE DATABASE todo_app;

CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

create table todos (
    id INT auto_increment primary key,
    title VARCHAR(200) not null,
    description varchar(200),
    status ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED') not null default 'PENDING',
    created_at TIMESTAMP default CURRENT_TIMESTAMP,
    user_id INT not null,
    foreign key(user_id) references users(id) 
);

-- i had MySQL already installed and configured, so i didn't enter any console commands
-- this script creates a database to store tables, then creates parent table (users)
-- and child table (todos), with foreign key referencing "id" column from "users" table

-- i faced issue where DBeaver wouldn't work with correct SQL queries,
--  so most of the queries were tested in MySQL Workbench
