// Pop & Push
// unshift and shift
// concat

let arr1 = ["A", true, 1, 2];
console.log(arr1.push("B"));
console.log(arr1);
console.log(arr1.pop()); //removes the last value
console.log(arr1);

let arr2 = ["A", true, 1];
console.log(arr2.unshift("B"));
console.log(arr2);

console.log(arr2.shift());
console.log(arr2);

let arr3 = ["A", "B", 1];
let arr4 = ["D", true, 2];

console.log(arr3.concat(arr4));