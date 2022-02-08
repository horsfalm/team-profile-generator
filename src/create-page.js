function pageRender(team) {
    let employees = '';

    for (i = 0; i < team.length; i++) {
        if (team[i].role ==='Manager') {
            employees += `
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class="card-title">${team[i].name}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${team[i].role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${team[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                        <li class="list-group-item">Office number: ${team[i].officeNumber}</li>
                    </ul>
                </div>
            </div>`
        } else if (team[i].role === 'Engineer') {
            employees += `
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class="card-title">${team[i].name}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${team[i].role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${team[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${team[i].github}" target="_blank" rel="noopener noreferrer">${team[i].github}</a></li>
                    </ul>
                </div>
            </div>`
        } else {
            employees += `
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class="card-title">${team[i].name}</h2>
                    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${team[i].role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${team[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                        <li class="list-group-item">School: ${team[i].school}</li>
                    </ul>
                </div>
            </div>`
        }
    }
    let page = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./css/style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">The Team You Need</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                ${employees}
                </div>
            </div>
        </div>
    </body>

    </html>`
    return page;
};

module.exports = pageRender;