const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'jason123',
  database: 'associate_db',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('conneted as id ' + conncection.threadId);
  inqStart();
});

function inqStart() {
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
        'View Employees by Manager',
        'UPDATE Employee Role',
        'UPDATE Manager Role',
        'DELETE Department',
        'DELETE Role',
        'DELETE Employee',
        'QUIT',
      ],
      message: 'Select your Choice',
      name: 'choiceInput',
    })
    .then((result) => {
      console.log('You inputted: ' + result.choiceInput);
      switch (result.choiceInput) {
        case 'Add Department':
          deptAdd();
          break;
        case 'Add Role':
          roleAdd();
          break;
        case 'Add Associate':
          associateAdd();
          break;
        case 'View Department':
          deptView();
          break;
        case 'View Role':
          roleView();
          break;
        case 'View Employees':
          employeeView();
          break;
        case 'View Employees by Manager':
          employeeManagerView();
          break;
        case 'UPDATE Employee Role':
          empRoleUpdate();
          break;
        case 'UPDATE Manager Role':
          mgrRoleUpdate();
          break;
        case 'DELETE Department':
          deptDelete();
          break;
        case 'DELETE Role':
          roleDelete();
          break;
        case 'DELETE Employee':
          employeeDelete();
          break;
        default:
          quit();
      }
    });
}
//ADD
function deptAdd() {
  inquirer
    .prompt({
      type: 'list',
      message: 'Choose dept name',
      name: 'deptName',
      choices: [
        'Billing',
        'Customer Service',
        'Information Technology',
        'Human Resources',
        'Research and Development',
        'Sales'
      ],
    })
    .then((answer) => {
      const query = 'INSERT INTO department (name) VALUES (?)';
      connection.query(query, { deptName: answer.deptName }, (err, res => {
        if (err) throw err;
        console.table(res)
        inqStart();
      }));
  });
};

function roleAdd() {
  inquirer
    .prompt([
      {
        name: 'roleTitle',
        type: 'input',
        message: 'Enter New Role Title:',
      },
      {
        name: 'salary',
        type: 'input',
        message: 'Enter salary amount: (annually)',
      },
      {
        name: 'idDept',
        type: 'input',
        message: 'Enter the dept ID:',
      },
    ])
    .then((answer) => {
      const query = "INSERT INTO role (id, title, salary) VALUES ( ?, '?', ? )";
      connection.query(
        query,
        { idDept: answer.idDept }, { roleTitle: answer.roleTitle }, { salary: answer.salary } (err, res => {
          if (err) throw err;
          console.table(res);
          inqStart();
        })
      );
    });
};

function associateAdd() {
  inquirer
    .prompt([
      {
        name: 'firstName',
        type: 'input',
        message: "Enter associate's first name:",
      },
      {
        name: 'lastName',
        type: 'input',
        message: "Enter associate's last name:",
      },
      {
        name: 'roleId',
        type: 'input',
        message: "Enter associate's role ID:",
      },
      {
        name: 'mgrID',
        type: 'input',
        message: 'Please Enter the associates managers ID:',
      },
    ])
    .then((answer) => {
      const query =
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('?', '?', ?, ?);";
      connection.query(
        query,
        { firstName: answer.firstName }
        { lastName: answer.lastName },
        { roleId: answer.roleId },
        { mgrId: answer.mgrId }(err, res => {
          if (err) throw err;
          console.table(res);
          inqStart();
        })
      );
    });
};
//VIEW
function deptView() {
    const query = "SELECT * FROM department";
    connection.query(query) (err, res => {
        if (err) throw err;
        console.table(res);
        inqStart();
      })
};

function roleView() {
    const query = "SELECT * FROM role";
    connection.query(query) (err, res => {
        if (err) throw err;
        console.table(res);
        inqStart();
      })
};

function employeeView() {
    const query = "SELECT * FROM employee";
    connection.query(query) (err, res => {
        if (err) throw err;
        console.table(res);
        inqStart();
      })
};

function employeeManagerView() {
    const query = "SELECT * FROM employee (first_name, last_name, manager_id) VALUES ('?', '?', ?)";
    connection.query(query) (err, res => {
        if (err) throw err;
        console.table(res);
        inqStart();
      })
};

//UPDATE

function empRoleUpdate() {
  inquirer
    .prompt([
      {
        name: 'firstName',
        type: 'input',
        message: "Enter associate's first name:",
      },
      {
        name: 'lastName',
        type: 'input',
        message: "Enter associate's last name:",
      },
      {
        name: 'roleId',
        type: 'input',
        message: "Enter associate's role ID:",
}