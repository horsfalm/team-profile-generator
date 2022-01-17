const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Employee {
    constructor(name = '') {
    this.name = name;
    this.id = 0;
    this.email = '';
    this.role = 'Employee'
    }

    // returns employee name
    getName() {
        if (!this.officeNumber) {
        inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is the name of the Team Manager?'
        }).then(({ name }) => {
            this.name = name;
            this.getId();
        });
    } else {
        inquirer.prompt({
            type: 'list',
            name: 'employeeType',
            message: 'Please add an employee.',
            choices: ['Engineer', 'Intern']
        }).then(({ employeeType }) => {
            if (employeeType === 'Engineer') {
                 inquirer
                 .prompt({
                 type: 'text',
                 name: 'name',
                 message: 'What is the name of the Engineer?'
                 }).then(({ name }) => {
                 this.name = name;
                 this.getId();
                 });
            } else {
                inquirer
                .prompt({
                type: 'text',
                name: 'name',
                message: 'What is the name of the Intern?'
                }).then(({ name }) => {
                this.name = name;
                this.getId();
            });
        };
    });
};
    };



    // returns employee id
    getId() {
        inquirer
        .prompt({
            type: 'number',
            name: 'id',
            message: 'What is the employee id?'
        }).then(({ id }) => {
            this.id = id;
            this.getEmail();
        });
    };

    // returns employee email
    getEmail() {
        inquirer
        .prompt({
            type: 'text',
            name: 'email',
            message: 'What is the employee email address?'
        }).then(({ email }) => {
            this.email = email;
            this.getofficeNumber();
        });
        };


    // returns employee role
    getRole() {
        return this.role;
    };
}


module.exports = Employee;