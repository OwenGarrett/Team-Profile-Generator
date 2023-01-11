const Engineer = require("../lib/Manager");
const engineer = new Engineer("owen", "8675309", "bigcheese@gmail.com", "317");

test("test engineer object", () => {
  expect(engineer.name).toBe("owen");
  expect(engineer.id).toBe("8675309");
  expect(engineer.email).toBe("bigcheese@gmail.com");
  expect(engineer.getGithubUsername).toBe("Sheogorath9");
});

test("test getName() method", () => {
  expect(engineer.getName()).toBe("owen");
});

test("test getId() method", () => {
  expect(engineer.getId()).toBe("8675309");
});

test("test getEmail() method", () => {
  expect(engineer.getEmail()).toBe("bigcheese@gmail.com");
});

test("test getGithub() method", () => {
  expect(engineer.getGithubUsername()).toBe("sheogorath9");
});
