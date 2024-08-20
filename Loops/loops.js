// commom loop types

// ----while loop----
const names = ["Sarah", "James", "Henry"];

let index = 0;

while (index < names.length) {
  let name = names[index];
  index++;
  console.log(name);
}

//  ----for loop----
for (let index = 0; index < names.length; index++) {
  let name = names[index];
  console.log(name);
}

// ----for...of----
//  It doesn't need an index
// It is suited for arrays/collection
for (const name of names) {
  //   name = "Value1";
  console.log(name);
}

// ----for...each----
// It works on an array or object
// It is suited for arrays/collection
names.forEach((name) => {
  console.log(name);
});
