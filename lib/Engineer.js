const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name);
    }

Engineer.prototype = Object.create(Employee.prototype);

}

module.exports = function() {};