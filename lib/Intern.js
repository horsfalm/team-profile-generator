const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '') {
        super(name);
    }

Intern.prototype = Object.create(Employee.prototype);

}

module.exports = function() {};