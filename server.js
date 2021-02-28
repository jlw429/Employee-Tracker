const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'jason123',
  database: 'associate_db',
});

connection.connect((err) => {
  if (err) throw err;
  console.log("conneted as id " + conncection.threadId);
  inqStart();
});

function inqStart () {
    inquirer
        .prompt({
            type: 'list',
            choices: [
                'Add Department',
                'Add Role',
                'Add Associate',
                'View Department',
                'View Role',
                'View Employees',
                'UPDATE Employee Role',
                'UPDATE Manager Role',
                'QUIT'
            ],
            message: 'Select your Choice',
            name: 'option'
        })
        .then(result => {
            
        }
}