const Manager = require("../lib/Manager");
const manager = new Manager("owen", "8675309", "bigcheese@gmail.com", "317");

test("test manager object", () => {
  expect(manager.name).toBe("owen");
  expect(manager.id).toBe("8675309");
  expect(manager.email).toBe("bigcheese@gmail.com");
  expect(manager.officeNumber).toBe("317");
});

test("test getName() method", () => {
  expect(manager.getName()).toBe("owen");
});

test("test getId() method", () => {
  expect(manager.getId()).toBe("8675309");
});

test("test getEmail() method", () => {
  expect(manager.getEmail()).toBe("bigcheese@gmail.com");
});

test("test officeNumber() method", () => {
  expect(manager.getOfficeNumber()).toBe("317");
});
