const reverseString = require("../src/reverseString");

test("Reverse (million -> noillim", () => {
  expect(reverseString("million")).toBe("noillim");
});

test("Reverse (Bike -> ekiB)", () => {
  expect(reverseString("Bike")).toBe("ekiB");
});

test("Reverse (MAREK MARECKI -> IKCERAM KERAM", () => {
  expect(reverseString("MAREK MARECKI")).toBe("IKCERAM KERAM");
});

test("Reverse (Greetings from Earth - > htraE morf sgniteerG)", () => {
  expect(reverseString("Greetings from Earth")).toBe("htraE morf sgniteerG");
});
