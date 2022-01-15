class Employee {
    constructor(name = '') {
    this.name = name;
    this.id = 1;
    this.email = 'horsfalm@gmail.com';


    // returns employee name
    Employee.prototype.getName = function() {
        return this.name;
    };


    // returns employee id
    Employee.prototype.getId = function() {
        return this.id;
    };


    // returns employee email
    Employee.prototype.getEmail = function() {
        return this.email;
    };


    // returns employee role
    Employee.prototype.getRole = function() {
        return this.role;
    };

}

module.exports = Employee;