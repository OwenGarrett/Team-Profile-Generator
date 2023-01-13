const Intern = require("../lib/Manager");
const intern = new Engineer("owen", "8675309", "bigcheese@gmail.com", "Xavier's School for Gifted Youngsters");

test("test intern object", () => {
  expect(intern.name).toBe("owen");
  expect(intern.id).toBe("8675309");
  expect(intern.email).toBe("bigcheese@gmail.com");
  expect(intern.getSchool).toBe("Xavier's School for Gifted Youngsters");
});

test("test getName() method", () => {
  expect(intern.getName()).toBe("owen");
});

test("test getId() method", () => {
  expect(intern.getId()).toBe("8675309");
});

test("test getEmail() method", () => {
  expect(intern.getEmail()).toBe("bigcheese@gmail.com");
});

test("test getSchool() method", () => {
  expect(intern.getSchool()).toBe("Xavier's School for Gifted Youngsters");
});
