const addition = require("../calc");

describe("Calculator", () => {
  describe("Addition", () => {
    test("Should return 42 for 20 + 22", () => {
      expect(addition(20, 22)).toBe(42);
    });
    test("Should return 73 for 42 + 31", () => {
      expect(addition(42, 31)).toBe(73);
    });
  });
  describe("Subtraction", () => {});
  describe("Multiply", () => {});
  describe("Division", () => {});
});

// TODO - Add more tests for the other operations
// TODO - Add more test cases for each operation
// TODO - Add tests for edge cases
// TODO - Add tests for invalid inputs
