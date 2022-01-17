const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);
        this.officeNumber = '';
        this.role = 'Manager';
    }
    
    // returns manager office number
    getofficeNumber() {
        return this.officeNumber;
        };

    // returns manager role
    getRole() {
        return this.role;
    };
};

module.exports = Manager;