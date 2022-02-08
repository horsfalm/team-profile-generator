const Intern = require("../lib/Intern");

test('Intern Parameters are correct', () => {
    const intern = new Intern('Jim', '20', 'jim@jim.com', 'UWO');

    expect(intern.name).toBe('Jim');
    expect(intern.id).toBe('20');
    expect(intern.email).toBe('jim@jim.com');
    expect(intern.school).toBe('UWO');
});

test('Get intern school', () => {
    const intern = new Intern('Jim', '20', 'jim@jim.com', 'UWO');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Get intern role', () => {
    const intern = new Intern('Jim', '20', 'jim@jim.com', 'UWO');

    expect(intern.getRole()).toBe('Intern');
});