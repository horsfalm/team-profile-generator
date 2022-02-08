const Employee = require("../lib/Employee");


test("Creates Employee Object", () => {
    const employee = new Employee('Sinead', '1000', 'lion@cobra.com')

    expect(employee).toEqual(expect.any(Object));
});

test('Employee Parameters are correct', () => {
    const employee = new Employee('Sinead', '1000', 'lion@cobra.com')

    expect(employee.name).toBe('Sinead');
    expect(employee.id).toBe('1000');
    expect(employee.email).toBe('lion@cobra.com');
})

test('Get employee Name', () => {
    const employee = new Employee('Sinead', '1000', 'lion@cobra.com')

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('Get employee ID', () => {
    const employee = new Employee('Sinead', '1000', 'lion@cobra.com')

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test('Get employee email', () => {
    const employee = new Employee('Sinead', '1000', 'lion@cobra.com')

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('Get employee role', () => {
    const employee = new Employee('Sinead', '1000', 'lion@cobra.com')

    expect(employee.getRole()).toBe('Employee');
});