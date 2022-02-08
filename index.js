const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const renderPage = require('./src/create-page');

const team = [];

function getManager() {
    console.log("Team Profile Generator");
    inquirer
        .prompt([
            {
                type: "input",
                name: "managersName",
                message: "Please enter the Manager's name:",
                validate: answer => {
                    if (answer === "") {
                        console.log('Please enter the name of the Manager.')
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "number",
                name: "managersId",
                message: "Please enter the Manager's id:",
                validate: answer => {
                    if (answer < 0) {
                        console.log('Please enter a valid id number.');
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "managersEmail",
                message: "Please enter the Manager's email address:",
                validate: answer => {
                    let passAnswer = answer.match(/\S+@\S+\.\S+/);
                    if (passAnswer) {
                        return true;
                    }
                    console.log('Please enter a valid email address.');
                    return false;
                }
            },
            {
                type: "number",
                name: "managersOfficeNumber",
                message: "Please enter the Manager's office number:",
                validate: answer => {
                    if (answer < 0) {
                        console.log('Please enter a valid office number.');
                        return false;
                    }
                    return true;
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managersName, answers.managersId, answers.managersEmail, answers.managersOfficeNumber, answers.manager);
            team.push(manager);
            addTeam();
        });
};

function addTeam() {
    inquirer
        .prompt([{
            type: 'list',
            name: 'memberRole',
            message: 'Would you like to add another team member?',
            choices: ['Engineer', 'Intern', 'Not at this time']
        }]).then(chosen => {
            switch (chosen.memberRole) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'Not at this time':
                    buildTeam();
                    break;
            }
        });
};

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Please enter the name of your Engineer:',
                validate: answer => {
                    if (answer === "") {
                        console.log('Please enter a name for your Engineer.')
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'number',
                name: 'engineerId',
                message: 'Please enter the Engineer ID:',
                validate: answer => {
                    if (answer < 0) {
                        console.log('Please enter a number greater than 0.');
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: 'Please enter the email address of the Engineer:',
                validate: answer => {
                    let passAnswer = answer.match(/\S+@\S+\.\S+/);
                    if (passAnswer) {
                        return true;
                    }
                    console.log('Please enter a valid email address.');
                    return false;
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'Please enter the Github username of your Engineer:',
                validate: answer => {
                    if (answer === "") {
                        console.log('Please enter the relevant Github username.')
                        return false;
                    }
                    return true;
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub, answers.engineer);
            team.push(engineer);
            addTeam();
        })
};

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'Please enter the name of your Intern:',
                validate: answer => {
                    if (answer === "") {
                        console.log('Please enter the name of your Intern.')
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'number',
                name: 'internId',
                message: 'Please enter the Intern id number:',
                validate: answer => {
                    if (answer < 0) {
                        console.log('Please enter a valid id number.');
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: 'Please enter the email address of the Intern:',
                validate: answer => {
                    let passAnswer = answer.match(/\S+@\S+\.\S+/);
                    if (passAnswer) {
                        return true;
                    }
                    console.log('Please enter a valid email address.');
                    return false;
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'Please enter the name of the school for the Intern:',
                validate: answer => {
                    if (answer === "") {
                        console.log('Please enter the school name.')
                        return false;
                    }
                    return true;
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool, answers.intern);
            team.push(intern);
            addTeam();
        })
};

function buildTeam() {
    fs.writeFileSync('./dist/index.html', renderPage(team), 'UTF-8');
}

getManager();