--Create Employee Database
CREATE DATABASE employees_db;
USE employees_db;

--Create Departments Table
CREATE TABLE department (
name VARCHAR(30) NOT NULL,
id INTEGER (11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id)
);

--Create Role Table
CREATE TABLE roles (
title VARCHAR (30) NOT NULL,
salary DECIMAL (10,2) NULL,
department_id INT,
id INTEGER (11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id)
);

--Create Employee Table
CREATE TABLE employees (
first_name VARCHAR(30) NOT NULL,
surname VARCHAR(30) NOT NULL,
role_id INT,
manager_id INT,
id INTEGER (11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id)
);

