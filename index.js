const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

function getManager() {
    console.log("Build your Team!");
    inquirer.prompt([
        {
            type: "input",
            name: "managersName",
            message: "Please enter the Manager's name.",
            validate: answer => {
                if (answer === "") {
                    console.log("Please enter a name for your Manager.");
                    return false;
                }
                return true;
            }
        },
        {
            type: "number",
            name: "managersId",
            message: "Please enter the Manager's id.",
            validate: answer => {
                if (answer < 0) {
                    console.log("Please enter a number greater than zero.");
                    return false;    
                }
                return true;
            }
        },
        {
            type: "input",
            name: "managersEmail",
            message: "Please enter the Manager's email.",
            validate: answer => {
                let passAnswer = answer.match(/\S+@\S+\.\S+/);
                if (passAnswer) {
                    return true;
                }
                console.log("Please enter a valid email address.");
                return false;
            }
        },
        {
            type: "number",
            name: "officeNumber",
            message: "Please enter the Manager's office number.",
            validate: answer => {
                if (answer < 0) {
                    console.log("Please enter a number greater than zero.");
                    return false;
                }
                return true;
            }
        }
    ]).then(answers => {
        const manager = new Manager(answers.managersName, answers.managersId, answers.managersEmail, answers.officeNumber);
        team.push(manager);
        addTeam();
    });
};

function addTeam() {
    inquirer
    .prompt([{
        type: 'list',
        name: 'memberRole',
        message: 'Would you like to add another member to your team?',
        choices: ['Engineer', 'Intern', 'Exit']
    }]).then(chosen => {
        switch (chosen.memberRole) {
            case 'Engineer':
                addEngineer();
                break;
                case 'Intern':
                    addIntern();
                    break;
                    case 'Exit':
                        buildTeam();
                        break;
        }
    });
};

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Please enter the name of your Engineer.",
            validate: answer => {
                if (answer === "") {
                    console.log("Please enter a name for you Engineer.");
                    return false;
                }
                return true;
            }
        },
        {
            type: 'number',
            name: 'engineerId',
            message: 'Please enter the Engineer ID.',
            validate: answer => {
                if (answer < 0) {
                    console.log('Please enter a number greater than zero.');
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Please enter the Engineer's email",
            validate: answer => {
                let passAnswer = answer.match(/\S+@\S+\.\S+/);
                if (passAnswer) {
                    return true;
                }
                console.log("Please enter a valid email address.");
                return false;
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Enter the Github username of your Engineer.',
            validate: answer => {
                if (answer === "") {
                    console.log("Please enter a Github username for your Engineer.");
                    return false;
                }
                return true;
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        team.push(engineer);
        addTeam();
    })
};

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Please enter the name of your intern.',
            validate: answer => {
                if (answer === "") {
                    console.log('Please enter a name for your Intern.');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'number',
            name: 'internId',
            message: 'Please enter the ID for your Intern.',
            validate: answer => {
                if (answer < 0) {
                    console.log('Please enter a number greater than zero.');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Please enter the Intern email.',
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
            message: 'Please enter the name of the school for your Intern.',
            validate: answer => {
                if (answer === "") {
                    console.log('Please enter a school for your Intern.');
                    return false;
                }
                return true;
            }
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        team.push(intern);
        addTeam();
    })
};

function buildTeam() {
console.log(team);
    //     fs.writeFileSync('./dist/index.html', renderPage(team), 'UTF-8');
}

getManager();



//const promptMgr = () => {
//     return inquirer.prompt([
//         {
//          type: 'text',
//          name: 'mgrName',
//          message: 'What is the name of the Team Manager?'
//         },
//         {
//             type: 'number',
//             name: 'mgrId',
//             message: 'What is the employee id of the Team Manager?'
//         },
//         {
//             type: 'text',
//             name: 'mgrEmail',
//             message: 'What is the email address of the Team Manager?'
//         },
//         {
//             type: 'number',
//             name: 'officeNumber',
//             message: 'What is the office number of the Team Manager?'
//         }
//     ]);
//  };

// const promptEmp = teamData => {
//     if (!teamData.employees) {
//         teamData.employees = [];
//     }
//     return inquirer.prompt([
//         {
//             type: 'list',
//             name: 'employee type',
//             message: 'Add a team member',
//             choices: ['Engineer', 'Intern']
//         },
//         {
//             type: 'text',
//             name: 'name',
//             message: 'What is the name of the Employee?'
//            },
//            {
//                type: 'number',
//                name: 'id',
//                message: 'What is the employee id of the Employee?'
//            },
//            {
//                type: 'text',
//                name: 'email',
//                message: 'What is the email address of the Employee?'
//            },
//            {
//                type: 'confirm',
//                name: 'confirmAddEmp',
//                message: 'Would you like to add another employee?',
//                default: false
//            }
//     ]).then(empData => {
//         teamData.employees.push(empData);
//         if (empData.confirmAddEmp) {
//             return promptEmp(teamData);
//         } else {
//             return teamData;
//         }
//     });
// }

// promptMgr()
//     .then(promptEmp)
//     .then(teamData => {
//         const pageHTML = generatePage(teamData); 

//  fs.writeFile('./dist/index.html', pageHTML, err => {
//      if (err) throw err;

//      console.log('Team page complete! Check out index.html to see the output!');
//     });
// });

// };

