// == checks for equality and ignores data type checking. Its negation form is !=
// === checks for equality with strict type checking. Its negation form is !==

const stats = 200;

if (stats === 200) {
  console.log("Status is OK!");
} else if (stats === 400) {
  console.log("status is not OK!");
} else {
  console.log("unknown error");
}

// Ternary (instant)
const message = (stats === 200) ? 'OK' : 'Error';