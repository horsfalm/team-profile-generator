function Employee(name, id, email) {
    this.types = ['manager', 'engineer', 'intern'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
    this.id = 1;
    this.email = 'horsfalm@gmail.com';
}

module.exports = Employee;