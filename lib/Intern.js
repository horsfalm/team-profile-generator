const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '') {
        super(name);
        this.school = '';
        this.role = 'Intern'
    }

    // returns intern school
    getSchool() {
        return this.school
    };

    // returns intern role
    getRole() {
        return this.role;
    };
};

module.exports = Intern;