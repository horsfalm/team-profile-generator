const generateTeam = teamArr => {
    const teamHTMLArr = teamArr.map(({ name, id, email }) => {
    return `
    <div>
    <h3>${name}</h3>
    <p>ID: ${id}</p>
    <p>Email: ${email}</p>
    </div>
    `;
    });
    return `
    <div>${teamHTMLArr.join('')}
    </div>
    `;
};

module.exports = templateData => {
    const { employees, mgrName, mgrId, mgrEmail, office } = templateData;
    
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
            <h3>${mgrName}</h3>
            <p>${mgrId}</p>
            <p>${mgrEmail}</p>
            <p>${office}</p>
        </div>
        ${generateTeam(employees)}
    </body>
    </html>
    `;
};

// module.exports = generatePage;