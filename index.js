const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

initTeamGen = function() {
    inquirer.prompt({
        type: 'text',
        name: 'name',
        message: 'Who is the Team Manager?'
    })

};