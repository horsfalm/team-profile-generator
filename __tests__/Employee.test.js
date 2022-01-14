const Employee = require('../lib/Employee')

test('creates a employee object', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Dave');

    expect(employee.getName()).toBe('Dave');
});

test('gets employee id', () => {
    const employee = new Employee('Dave');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Dave');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets employee role', () => {
    const employee = new Employee('Dave');

    expect(employee.getRole()).toEqual(expect.any(String));
});