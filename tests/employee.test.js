// using Employee constructoremails
const Employee = require('../lib/Employee');

// creates employee object
test('creates an employee object', () => {
    const employee = new Employee('Bob', 39, 'bobO@icloud.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets id
test('gets employee name', () => {
    const employee = new Employee('Bob', 39, 'bobO@icloud.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id
test('gets employee ID', () => {
    const employee = new Employee('Bob', 39, 'bobO@icloud.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails
test('gets employee email', () => {
    const employee = new Employee('Bob', 39, 'bobO@icloud.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role
test('gets role of employee', () => {
    const employee = new Employee('Bob', 39, 'bobO@icloud.com');

    expect(employee.getRole()).toEqual("Employee");
});