const Employee = require("../lib/Employee");


test("Creates Employee Object", () => {
    const employee = new Employee('John Smith', '1', 'john@smith.com')

    expect(employee).toEqual(expect.any(Object));
});

test('Employee Parameters are correct', () => {
    const employee = new Employee('Mary Jones', '2', 'mary@jones.com')

    expect(employee.name).toBe('Mary Jones');
    expect(employee.id).toBe('2');
    expect(employee.email).toBe('mary@jones.com');
})

test('Get the employee name', () => {
    const employee = new Employee('Bill Brown', '3', 'bill@brown.com')

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('Get the employee ID', () => {
    const employee = new Employee('James Jones', '4', 'james@jones.com')

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test('Get the employee email', () => {
    const employee = new Employee('Bob Black', '5', 'bob@black.com')

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('Get the employee role', () => {
    const employee = new Employee('Sally Green', '6', 'sally@green.com')

    expect(employee.getRole()).toBe('Employee');
});