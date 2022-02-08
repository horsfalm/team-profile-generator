const Manager = require("../lib/Manager");

test('Manager parameters are correct', () => {
    const manager = new Manager('James', '1', 'james@james.com', '101');

    expect(manager.name).toBe('James');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('james@james.com');
    expect(manager.officeNumber).toBe('101');
});

test('Get manager role', () => {
    const manager = new Manager('James', '1', 'james@james.com', '101');

    expect(manager.getRole()).toBe('Manager');
});