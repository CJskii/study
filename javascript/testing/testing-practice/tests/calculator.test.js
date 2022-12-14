const calculator = require("../src/calculator");

test("Add (2 + 2 = 4)", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("Add (6 + 6 = 4)", () => {
  expect(calculator.add(6, 6)).toBe(12);
});

test("Substract (69 - 9 = 60)", () => {
  expect(calculator.substract(69, 9)).toBe(60);
});

test("Substract (777 - 555 = 222)", () => {
  expect(calculator.substract(777, 555)).toBe(222);
});

test("Multiply (69 * 69 = 4761)", () => {
  expect(calculator.multiply(69, 69)).toBe(4761);
});

test("Multiply (6 * 9 = 54)", () => {
  expect(calculator.multiply(6, 9)).toBe(54);
});

test("Multiply (6 * 0 = 0)", () => {
  expect(calculator.multiply(6, 0)).toBe(0);
});

test("Multiply (-2 * 2 = 0)", () => {
  expect(calculator.multiply(-2, 2)).toBe(-4);
});

test("Divide (10 / 0 = 0)", () => {
  expect(calculator.divide(10, 0)).toBe(null);
});

test("Divide (20 / 2 = 10)", () => {
  expect(calculator.divide(20, 2)).toBe(10);
});

test("Divide (-10 / 2 = -5)", () => {
  expect(calculator.divide(-10, 2)).toBe(-5);
});

test("Divide (0 / 2 = 0)", () => {
  expect(calculator.divide(0, 2)).toBe(0);
});
