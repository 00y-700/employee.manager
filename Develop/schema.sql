CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department (
name VARCHAR(30) NOT NULL,
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE roles (
title VARCHAR (30) NOT NULL,
salary DECIMAL (10,2) NULL,
department_id INT,
FOREIGN KEY (department_id) REFERENCES department (id),
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE employees (
first_name VARCHAR(30) NOT NULL,
surname VARCHAR(30) NOT NULL,
role_id INT,
FOREIGN KEY (role_id) REFERENCES roles (id),
manager_id INT,
FOREIGN KEY (manager_id) REFERENCES employees (id),
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY
);
