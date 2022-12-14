const capitalize = require("../src/capitalize");

test("Capitalize (word -> Word)", () => {
  expect(capitalize("word")).toBe("Word");
});

test("Capitalize (MoNkEY -> Monkey)", () => {
  expect(capitalize("MoNkEY")).toBe("Monkey");
});

test("Capitalize (CJSKI -> Cjski)", () => {
  expect(capitalize("CJSKI")).toBe("Cjski");
});

test("Capitalize (MAREK MARECKI -> Marek marecki", () => {
  expect(capitalize("MAREK MARECKI")).toBe("Marek marecki");
});
