DROP DATABASE IF EXISTS todo_list;
CREATE DATABASE todo_list;

\c todo_list

DROP TABLE IF EXISTS todos;
CREATE TABLE todos(
	id SERIAL PRIMARY KEY,
	to_do VARCHAR(40) NOT NULL,
	complete BOOLEAN
);

INSERT INTO todos (to_do, complete) VALUES ('go to the store', false);
