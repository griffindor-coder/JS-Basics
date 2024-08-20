// runtime context of "this" is bound to the defined object itself
const obj = {
  name: "Vedaansh",
  checkIn: function () {
    console.log(this);
    return this;
  },
};

const obj1 = new Object();
console.log(typeof obj1);
console.log(obj1);

console.log(typeof obj.checkIn);
// invoking the function
console.log(obj === obj["checkIn"]());

console.log("==========================");

// runtime context of "this" is bound to global object
function anotherCheckIn() {
  console.log(this);
  return this;
}
anotherCheckIn();

console.log("==========================");

console.log(this);

console.log("==========================");

console.log(globalThis);

console.log(anotherCheckIn() === globalThis);
