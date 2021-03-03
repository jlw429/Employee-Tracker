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
  console.log(`Welcome! Connected as id ${connection.threadId}`);
  inqStart();
});

function inqStart() {
  inquirer
    .prompt({
      type: 'list',
      choices: [
        'View Department',
        'View Role',
        'View Employees',
        'Add Department',
        'Add Role',
        'Add Associate',
        'UPDATE Employee Role ID',
        "UPDATE Employee's Manager Role ID",
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
        case 'View Department':
          deptView();
          break;
        case 'View Role':
          roleView();
          break;
        case 'View Employees':
          employeeView();
          break;
        case 'Add Department':
          deptAdd();
          break;
        case 'Add Role':
          roleAdd();
          break;
        case 'Add Associate':
          associateAdd();
          break;
        case 'UPDATE Employee Role ID':
          empRoleUpdate();
          break;
        case "UPDATE Employee's Manager Role ID":
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
        'Sales',
      ],
    })
    .then((answer) => {
      const query = 'INSERT INTO department (name) VALUES (?)';
      connection.query(query, [answer.deptName], (err, res) => {
        if (err) throw err;
        console.table(res);
        inqStart();
      });
    });
}

function roleAdd() {
  inquirer
    .prompt([
      {
        name: 'idDept',
        type: 'input',
        message: 'Enter the dept ID:',
      },
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
    ])
    .then((answer) => {
      const query = 'INSERT INTO role (id, title, salary) VALUES ( ?, ?, ? )';
      connection.query(
        query,
        [answer.idDept, answer.roleTitle, answer.salary],
        (err, res) => {
          if (err) throw err;
          console.table('successfully added.');
          inqStart();
        }
      );
    });
}

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
        'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
      connection.query(
        query,
        [answer.firstName, answer.lastName, answer.roleId, answer.mgrId],
        (err, res) => {
          if (err) throw err;
          console.table('successfully added.');
          inqStart();
        }
      );
    });
}
//VIEW
function deptView() {
  const query = 'SELECT * FROM department';
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    inqStart();
  });
}

function roleView() {
  const query = 'SELECT * FROM role';
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    inqStart();
  });
}

function employeeView() {
  const query = 'SELECT * FROM employee';
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    inqStart();
  });
}
//UPDATE

function empRoleUpdate() {
  inquirer
    .prompt([
      {
        name: 'firstName',
        type: 'input',
        message: 'Please enter your first name:',
      },
      {
        name: 'lastName',
        type: 'input',
        message: 'Enter your last name:',
      },
      {
        name: 'newRoleId',
        type: 'input',
        message: 'Enter your NEW role ID:',
      },
    ])
    .then((answer) => {
      const query = `UPDATE employee SET role_id = ${answer.newRoleId} WHERE first_name = "${answer.firstName}"  AND last_name = "${answer.lastName}"`;
      connection.query(query, (err, res) => {
        if (err) throw err;
        console.table('Successfully Updated.');
        inqStart();
      });
    });
}

function mgrRoleUpdate() {
  inquirer
    .prompt([
      {
        name: 'firstName',
        type: 'input',
        message: 'Please enter your first name:',
      },
      {
        name: 'lastName',
        type: 'input',
        message: 'Enter your last name:',
      },
      {
        name: 'newMgrRoleId',
        type: 'input',
        message: 'Enter your NEW manager ID:',
      },
    ])
    .then((answer) => {
      const query = `UPDATE employee SET manager_id = ${answer.newMgrRoleId} WHERE first_name = "${answer.firstName}"  AND last_name = "${answer.lastName}"`;
      connection.query(query, (err, res) => {
        if (err) throw err;
        console.table('Successfully Updated.');
        inqStart();
      });
    });
}
//DELETE
function deptDelete() {
  inquirer
    .prompt([
      {
        name: 'deptToDelete',
        type: 'input',
        message: 'Please enter the department to terminate:',
      },
    ])
    .then((answer) => {
      const query = `DELETE FROM department WHERE name = "${answer.deptToDelete}"`;
      connection.query(query, (err, res) => {
        if (err) throw err;
        console.table('Termination Successful.');
        deptView();
        inqStart();
      });
    });
}

function employeeDelete() {
  inquirer
    .prompt([
      {
        name: 'employeeToDelete',
        type: 'input',
        message: 'Please enter the associate to terminate:',
      },
    ])
    .then((answer) => {
      const query = `DELETE FROM employee WHERE name = "${answer.employeeToDelete}"`;
      connection.query(query, (err, res) => {
        if (err) throw err;
        console.table('Termination Successful.');
        deptView();
        inqStart();
      });
    });
}
