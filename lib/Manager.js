const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);
    }

Manager.prototype = Object.create(Employee.prototype);

}

module.exports = function() {};