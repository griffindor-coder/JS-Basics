// An Array is a collection of values
// An Array is an object in JavaScript
// It has special properties like length
// It has several functions like push(), pop() and peek()
// An Array can contain different data types

let materialType = ["FERT", "ROH", "DIEN", "SFG", 1, true];
console.log(materialType.length);

let arrayLength = 3;
let materialGroup = Array(arrayLength);
materialGroup[0] = "Plastics";
materialGroup[1] = "Instruments";
materialGroup[2] = "Molded Plastics";
materialGroup.push("Consumables");

console.log(materialGroup.length);
console.log(materialGroup[2]);

// array.length - 1 gives the last element of the array
console.log(materialGroup[materialGroup.length - 1]);