// using Engineer constructor
const Engineer = require('../lib/Engineer');

// creating engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('George', 69, 'gjordan1973@icloud', 'judgedgeo');

    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('George', 69, 'gjordan1973@icloud', 'judgedgeo');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer('George', 69, 'gjordan1973@icloud', 'judgedgeo');

    expect(engineer.getRole()).toEqual("Engineer");
});
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
