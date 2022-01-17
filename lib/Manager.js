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
        inquirer
        .prompt({
            type: 'number',
            name: 'officeNumber',
            message: 'What is the manager office number?'
        }).then(({ officeNumber }) => {
            this.officeNumber = officeNumber;
            console.log(team);
            team.push(this);
            console.log(team);
            this.getName();
            });
        };

    // returns manager role
    getRole() {
        return this.role;
    };
};

module.exports = Manager;