const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

team = [];

console.log('Please enter Manager details:');

const promptManager = () => {
    new Manager().getName();
}

promptManager();

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

