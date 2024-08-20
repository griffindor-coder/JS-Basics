const place = "World";
const greeting = "Hello";
console.log("%s, %s", greeting, place);

//Template Literals using backtick
console.log(`${greeting}, ${place}`);

// string concatenation
let str1 = "Hello";
let str2 = " World";

console.log(str1 + str2);

//using template literals to format strings

let str3 = "JavaScript";
let str4 = "fun";

console.log(`I am writing code in ${str3}`);
console.log(`Formatting in ${str3} is great ${str4}!`);

let bool1 = true;
console.log(`Opposite of true is ${!bool1}`);

// Data Types in JavaScript
// It is weakly typed language
// Simple Type System - Number(float), String, Boolean, Date, Function. Array and Object
// Special Types - NaN, null, undefined

//  Since JavaScript Type System is weak, we have have 2 operators to help us
//  typeof operator -
//  instanceof opeartor -
//  ==
//  ===

// Array
const people = ["Tanmoy", "Monolina", "Veddansh", "Joyasree"];
// Number defined using a literal
const one = 1;
// Number defined using a constructor
const two = new Number(2);
// String
const str = "Hello World";
// Boolean
const bool = true;
// Object
const person = {
  firstName: "Tanmoy",
  lastName: "Mondal",
};
// Function
function sayHello(person) {
  console.log(`Hello + ${person.firstName} +  ${person.lastName}`);
}

console.log("---typeof Operator---");
console.log(typeof people);

console.log(typeof one);
console.log(typeof two);

console.log(typeof str);
console.log(typeof bool);
console.log(typeof person);
console.log(typeof sayHello);

console.log("---instanceof operator---");

console.log(people instanceof Array);
console.log(one instanceof Number);

console.log(two instanceof Number);
console.log(str instanceof String);
console.log(bool instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);

let num1 = 100;

console.log(num1 + 100);
console.log(num1 - 10);
console.log(num1 * 100);
console.log(num1 / 100);
console.log(num1 % 10);
console.log(++num1);
console.log(--num1);
console.log(Math.PI);
console.log(Math.sqrt(num1));

// Converting between numbers and strings
let num2 = "150";
let flo2 = "1.50";

// Converting string to integers
console.log(parseInt(num2));
console.log(parseInt(flo2));
console.log(parseInt("ABC"));

// Converting string to Float
console.log(parseFloat(num2));
console.log(parseFloat(flo2));
console.log(parseFloat("ABC"));
console.log(parseInt(`${1 + 1}`));
console.log(typeof 100);
console.log((100).toString());
console.log(typeof (100).toString());