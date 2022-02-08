const Engineer = require("../lib/Engineer");


test('Create Engineer Object', () => {
    const engineer = new Engineer('John Smith', '1', 'john@smith.com', 'horsfalm@github.com');

    expect(engineer).toEqual(expect.any(Object));
});

test('Engineer Paramaters are correct', () => {
    const engineer = new Engineer('Mary Jones', '2', 'mary@jones.com', 'horsfalm@github.com');

    expect(engineer.name).toBe('Mary Jones');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('mary@jones.com');
    expect(engineer.github).toBe('horsfalm@github.com');
});

test('Get github username', () => {
    const engineer = new Engineer('Bill Brown', '3', 'bill@brown.com', 'horsfalm@github.com');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Get the engineer role', () => {
    const engineer = new Engineer('James Jones', '4', 'james@jones.com', 'horsfalm@github.com');

    expect(engineer.getRole()).toBe('Engineer');
});