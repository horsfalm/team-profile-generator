const Engineer = require("../lib/Engineer");

test('Engineer Parameters are correct', () => {
    const engineer = new Engineer('Billy', '75', 'billy@sanders.com', 'horsfalm');

    expect(engineer.name).toBe('Billy');
    expect(engineer.id).toBe('75');
    expect(engineer.email).toBe('billy@sanders.com');
    expect(engineer.github).toBe('horsfalm');
});

test('Get engineer github', () => {
    const engineer = new Engineer('Billy', '75', 'billy@sanders.com', 'horsfalm');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Get engineer role', () => {
    const engineer = new Engineer('Billy', '75', 'billy@sanders.com', 'horsfalm');

    expect(engineer.getRole()).toBe('Engineer');
});