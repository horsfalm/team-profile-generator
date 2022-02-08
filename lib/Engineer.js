const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // returns engineer github
    getGithub() {
        return this.github;
    };

    // returns engineer role 
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;