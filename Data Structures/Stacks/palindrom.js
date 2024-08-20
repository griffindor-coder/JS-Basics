// A stack implemented with the help of an Array
const word = "racecar";
const letters = [];
let rword = "";

for (let index = 0; index < word.length; index++) {
  letters.push(word[index]);
}

for (let index = 0; index < word.length; index++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(rword + " is a palindrome.");
} else {
  console.log(rword + " is not a palindrome.");
}