// One Central Object for Date
// This Object contains both Date and Time
// Internally Time is stored as number of milliseconds since Jan 1, 1970

// Month counting in JavaScript starts from 0 which is Jan
// Day counting starts from Sunday which is 0
const randomDate = new Date(2024, 0, 31, 12, 30, 30);
console.log(randomDate);

// we have different setter and getter methods
const now = new Date();
now.setFullYear(2024); // sets year
now.setMonth(3); // Sets Month counting from 0 hence April
now.setDate(4); // sets day

now.setHours(4); // 24 hour clock
now.setMinutes(24); // sets minutes
now.setSeconds(46); //sets seconds

console.log(now);

// Calculates time since Jan 1, 1970
console.log(now.getTime());
console.log(now.getFullYear());