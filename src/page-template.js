// const generateTeam = teamArr => {
//     const teamHTMLArr = teamArr.map(({ managersName, managersId, managersEmail, officeNumber }) => {
//     return `
//     <div>
//     <h3>${managersName}</h3>
//     <p>ID: ${managersId}</p>
//     <p>Email: ${managersEmail}</p>
//     <p>Office Number: ${officeNumber}</p>
//     </div>
//     `;
//     });
//     return `
//     <div>${teamHTMLArr.join('')}
//     </div>
//     `;
// };

// module.exports = templateData => {
//     const { team, managersName, managersId, managersEmail, officeNumber } = templateData;
    
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>Team Profile Generator</title>
//     </head>
//     <body>
//         <header>My Team</header>
//         <div>
//             <h3>${managersName}</h3>
//             <p>${managersId}</p>
//             <p>${managersEmail}</p>
//             <p>${officeNumber}</p>
//         </div>
//         ${generateTeam(team)}
//     </body>
//     </html>
//     `;
// };

module.exports = templateData => {
    const [ { internName }, second, third ] = templateData;
    console.log(templateData);

    return `
    <!DOCTYPE html>
         <html lang="en">
         <head>
             <meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Team Profile Generator</title>
         </head>
         <body>
             <header>My Team</header>
             <div>
                 
                 1
                 
                 2
                 
                 3
                 
                 4
             </div>
         </body>
         </html>
         `;
     };

