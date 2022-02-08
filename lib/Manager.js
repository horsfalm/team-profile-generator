const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, office){
        super(name, id, email);
        
        this.officeNumber = office;
        this.role = 'Manager'
    
    };
    getRole() {
        return this.role
    };
};

module.exports = Manager;