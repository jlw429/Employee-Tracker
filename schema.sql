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
deaprtment_id INT
);

CREATE TABLE employee (
id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT
);



SET SQL_SAFE_UPDATES=0;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
	VALUES
    ('Jason', 'West', 0100, NULL);
    
INSERT INTO employee (first_name, last_name, role_id, manager_id)
	VALUES
    ('Melisa', 'West', 0110, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
	VALUES
    ('Zachary', 'Gifford', 0120, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
	VALUES
    ('Bill', 'Simpson', 10001, 1000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
	VALUES
    ('Carl', 'Carlson', 10002, 1000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
	VALUES
    ('Greg', 'Hurst', 10003, 1120);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
	VALUES
    ('Harry', 'Carter', 10004, 1110);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
	VALUES
    ('Marilyn', 'Roberts', 10005, 1120);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
	VALUES
    ('Mark', 'Crandall', 10006, 1110);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
	VALUES
    ('Jim', 'Phelps', 10007, 1120);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
	VALUES
    ('Kelly', 'Nagahe', 10008, 1120);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
	VALUES
    ('Jerome', 'Walker', 10009, 1110);

INSERT INTO department (name)
	VALUE
    ('Accounting');
INSERT INTO department (name)
	VALUE
    ('Production');
INSERT INTO department (name)
	VALUE
    ('Marketing');
INSERT INTO department (name)
	VALUE
    ('Billing');
INSERT INTO department (name)
	VALUE
    ('Purchasing');
INSERT INTO department (name)
	VALUE
    ('Technology');
INSERT INTO department (name)
	VALUE
    ('Human Reources');
INSERT INTO department (name)
	VALUE
    ('Research and Development');
INSERT INTO role (id, title, salary, department_id)
	VALUES
    ('110', 'President', 999999.99, 1);
INSERT INTO role (id, title, salary, department_id)
	VALUES
    ('120', 'CFO', 999999.99, 1);
INSERT INTO role (id, title, salary, department_id)
	VALUES
    ('10001', 'Accounting Manager', 190000.99, 2);
INSERT INTO role (id, title, salary, department_id)
	VALUES
    ('10002', 'Accounts Receivable', 123000.99, 2);
INSERT INTO role (id, title, salary, department_id)
	VALUES
    ('10003', 'Production Lead', 119000.99, 3);
INSERT INTO role (id, title, salary, department_id)
	VALUES
    ('10004', 'RD Engineer', 218000.00, 9);
INSERT INTO role (id, title, salary, department_id)
	VALUES
    ('10005', 'Robotics', 200000.99, 9);
INSERT INTO role (id, title, salary, department_id)
	VALUES
    ('10006', 'Human Resources Manager', 135000.99, 8);
INSERT INTO role (id, title, salary, department_id)
	VALUES
    ('10007', 'Marketing GURU', 135000.00, 4);
INSERT INTO role (id, title, salary, department_id)
	VALUES
    ('10008', 'Consultant', 99000.99, 4);
INSERT INTO role (id, title, salary, department_id)
	VALUES
    ('10009', 'Billing Specialist', 54000.99, 5);
    
    

