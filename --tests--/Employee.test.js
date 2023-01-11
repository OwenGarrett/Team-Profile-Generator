const Employee = require("../lib/Employee");
const employee = new Employee("owen", "8675309", "bigcheese@gmail.com");

test("test employee object", () => {
  expect(employee.name).toBe("owen");
  expect(employee.id).toBe("8675309");
  expect(employee.email).toBe("bigcheese@gmail.com");
});

test("test getName() method", () => {
  expect(employee.getName()).toBe("owen");
});

test("test getId() method", () => {
  expect(employee.getId()).toBe("8675309");
});

test("test getEmail() method", () => {
  expect(employee.getEmail()).toBe("bigcheese@gmail.com");
});

test("test getRole() method", () => {
  expect(employee.getRole()).toBe("Employee");
});
