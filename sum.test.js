const sumOfTwoNumbers = require("./sum");

test("properly adds two numbers", () => {
  expect(sumOfTwoNumbers(1, 2)).toBe(3);
});
