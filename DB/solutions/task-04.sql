CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP default CURRENT_TIMESTAMP
);

ALTER TABLE todos 
ADD user_id INT not null,
foreign key(user_id) references users(id)
