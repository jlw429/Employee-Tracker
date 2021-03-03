DROP DATABASE IF EXISTS associate_db;

CREATE DATABASE associate_db;

USE associate_db;

CREATE TABLE department (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(30)
);

CREATE TABLE role (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL(8,2),
department_id INT
);

CREATE TABLE employee (
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT PRIMARY KEY,
manager_id INT
);


