const Intern = require("../lib/Intern");

test('Creates Intern Object', () => {
    const intern = new Intern('John Smith', '1', 'john@smith.com', 'UofM');

    expect(intern).toEqual(expect.any(Object));
});

test('Intern Parameters are correct', () => {
    const intern = new Intern('Mary Jones', '2', 'mary@jones.com', 'UofS');

    expect(intern.name).toBe('Mary Jones');
    expect(intern.id).toBe('2');
    expect(intern.email).toBe('mary@jones.com');
    expect(intern.school).toBe('UofS');
});

test('Get school', () => {
    const intern = new Intern('Bill Brown', '3', 'bill@brown.com', 'UofB');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Get role', () => {
    const intern = new Intern('James Jones', '4', 'james@jones.com', 'UofC');

    expect(intern.getRole()).toBe('Intern');
});