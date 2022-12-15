const analyzeArray = require("../src/analyzeArray");

test("Analyze array average", () => {
  const arr = [1, 8, 3, 4, 2, 6];
  const analysis = analyzeArray(arr);
  expect(analysis.average).toBe(4);
});

test("Analyze array min", () => {
  const arr = [1, 8, 3, 4, 2, 6];
  const analysis = analyzeArray(arr);
  expect(analysis.min).toBe(1);
});

test("Analyze array max", () => {
  const arr = [1, 8, 3, 4, 2, 6];
  const analysis = analyzeArray(arr);
  expect(analysis.max).toBe(8);
});

test("Analyze array length", () => {
  const arr = [1, 8, 3, 4, 2, 6];
  const analysis = analyzeArray(arr);
  expect(analysis.length).toBe(6);
});
