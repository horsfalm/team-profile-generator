const Manager = require("../lib/Manager");

test('Creates Manager Object', () => {
    const manager = new Manager('John Smith', '1', 'john@smith.com', '1');

    expect(manager).toEqual(expect.any(Object));
});

test('Manager parameters are correct', () => {
    const manager = new Manager('Mary Jones', '2', 'mary@jones.com', '2');

    expect(manager.name).toBe('Mary Jones');
    expect(manager.id).toBe('2');
    expect(manager.email).toBe('mary@jones.com');
    expect(manager.officeNumber).toBe('2');
});

test('Get manager role', () => {
    const manager = new Manager('Bill Brown', '3', 'bill@brown.com', '3');

    expect(manager.getRole()).toBe('Manager');
});