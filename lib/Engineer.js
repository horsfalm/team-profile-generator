const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name);
        this.github = '';
        this.role = 'Engineer';
    }

    // returns engineer github
    getGithub() {
        return this.github;
    };

    // returns engineer role 
    getRole() {
        return this.role;
    };
};

module.exports = Engineer;