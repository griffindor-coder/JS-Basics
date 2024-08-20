// fat arrow function.
// Special thing about "fat arrow function" it changes the context of "this" keyword. It inherits "this" from its parent non-arrow function.
// Implicit return values, we don't need to use the return keyword.
// Must be assigned to a variable.

// implicit return
// const add = (a, b) => a + b;
// console.log(add(1, 2));

// const subtract = (a, b) => {
//   // explicit return
//   return a - b;
// };
// console.log(subtract(2, 1));

// //  "this" context is inherited from parent

function a() {
  const materialProps = {
    matType: ["ROH", "HALB"],
    matGrp: ["PLX", "IM"],
  };
  //   console.log(materialProps);
  console.log(this);

  const b = () => console.log(this);
  b();
}

// function invocation
a();
