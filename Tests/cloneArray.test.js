const cloneArray = require("../js/cloneArray");

test("Properly clones arry", () => {
  let arr = [1, 2, 3];
  //Test case 1 : when spreading array then creates a new array with new memory space. *equal but not Same
  expect(cloneArray(arr)).toEqual(arr);

  //Test case 2 :here we check the two arrys are not really equal
  expect(cloneArray(arr)).not.toBe(arr);
});
