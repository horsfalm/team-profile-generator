const inquirer = require('inquirer');

class Employee {
    constructor(name = '') {
    this.name = name;
    this.id = '';
    this.email = '';
    this.role = 'Employee'
    }

    // returns employee name
    getName() {
        return this.name
    };

    // returns employee id
    getId() {
        return this.id;
    };

    // returns employee email
    getEmail() {
        return this.email;
        };

    // returns employee role
    getRole() {
        return this.role;
    };
}


module.exports = Employee;