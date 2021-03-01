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
deaprtment_id int
);

CREATE TABLE employee (
id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT
);




