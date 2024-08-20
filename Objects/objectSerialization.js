const book = {
  titles: ["1984", "1985"],
  authors: ["George Orwell", "George Orwell"],
  isAvaialble: [false, true],
};

// JavaScript object -> JSON representation
// Serialization
const bookJSON = JSON.stringify(book);
console.log(bookJSON);
console.log(typeof bookJSON);

// JSON -> Object
// De-Serialization
const bookObj = JSON.parse(bookJSON);
const bookArray = new Array(bookObj);
console.log("================");
console.log(typeof bookObj);
console.log(Array.isArray(bookObj));
console.log(bookObj);

console.log("================");
console.log(typeof bookArray);
console.log(Array.isArray(bookArray));
console.log(bookArray);