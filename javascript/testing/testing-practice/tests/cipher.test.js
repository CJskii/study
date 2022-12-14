const cipher = require("../src/cipher");

test("Cipher 1", () => {
  expect(cipher("abc", 1)).toBe("bcd");
});

test("Cipher 2", () => {
  expect(cipher("abcdefghijk", 2)).toBe("cdefghijklm");
});

test("Cipher 3", () => {
  expect(cipher("z", 1)).toBe("a");
});

test("Cipher 4", () => {
  expect(cipher("xyz", 1)).toBe("yza");
});

test("Cipher 5", () => {
  expect(cipher("order", 15)).toBe("dgstg");
});

test("Cipher 6", () => {
  expect(cipher("cipher", 24)).toBe("agnfcp");
});

test("Cipher 7", () => {
  expect(cipher("cipher", 25)).toBe("bhogdq");
});

test("Cipher 8", () => {
  expect(cipher("cipher", 26)).toBe("cipher");
});

test("Cipher 9", () => {
  expect(cipher("ABC", 1)).toBe("BCD");
});

test("Cipher 10", () => {
  expect(cipher("TO CASE", 2)).toBe("VQ ECUG");
});

test("Cipher 11", () => {
  expect(cipher("abc", 0)).toBe("abc");
});

test("Cipher 12", () => {
  expect(cipher("XYZ", 2)).toBe("ZAB");
});

test("Cipher 13", () => {
  expect(cipher("aBcD", 2)).toBe("cDeF");
});

test("Cipher 14", () => {
  expect(cipher("AaA BBB ccc", 7)).toBe("HhH III jjj");
});
