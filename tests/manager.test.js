// using Manager constructor
const Manager = require('../lib/Manager');

// creating manager object
test('creates an Manager object', () => {
    const manager = new Manager('George', 69, 'gjordan1973@icloud.com', 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('George', 69, 'gjordan1973@icloud.com.com');

    expect(manager.getRole()).toEqual("Manager");
});