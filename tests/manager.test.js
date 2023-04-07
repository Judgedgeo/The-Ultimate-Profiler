// using Manager constructor
const Manager = require('../lib/manager');

// creating manager object
test('creates an Manager object', () => {
    const manager = new Manager('George2', 28, 'george2@icloud.com', 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('George2', 29, 'george2@icloud.com');

    expect(manager.getRole()).toEqual("Manager");
});