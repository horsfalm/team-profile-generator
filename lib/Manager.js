const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    
    // returns manager office number
    getofficeNumber() {
        return this.officeNumber;
        };

    // returns manager role
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;