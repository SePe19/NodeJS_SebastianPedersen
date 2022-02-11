// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const parse1 = parseFloat(numberOne);
const parse2 = parseFloat(numberTwo);
console.log("Exercise 1:");
console.log(parse1 + parse2);
console.log("--------------------------------------")

// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherparse1 = parseFloat(anotherNumberOne);
const anotherparse2 = parseFloat(anotherNumberTwo);

const total = anotherparse1 + anotherparse2;

console.log("Exercise 2:");
console.log(total.toFixed(2));
console.log("--------------------------------------")


// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;


// Show in the console the avg. with 5 decimals

average = (one + two + three) / 3;

console.log("Exercise 3:");
console.log(average.toFixed(5));
console.log("--------------------------------------")


// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

letters.substring(2);

console.log("Exercise 4:");
console.log(letters.substring(2));
console.log("--------------------------------------")

// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const capitalize = fact.replace("j", "J");

console.log("Exercise 5:");
console.log(capitalize);
console.log("--------------------------------------")

// --------------------------------------