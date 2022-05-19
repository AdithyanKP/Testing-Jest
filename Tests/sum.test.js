const sumOfTwoNumbers = require("../js/sum"); //importing the function

//testing with jest
test("properly adds two numbers", () => {
  //Test case 1 : simple addition
  expect(sumOfTwoNumbers(1, 2)).toBe(3);
});
