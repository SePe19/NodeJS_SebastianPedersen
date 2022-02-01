// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const alienMessage = {
	message: "Hello, earthling! I bring peace."
};

// Log the message 
console.log("Exercise 1:");
console.log(alienMessage.message);
console.log("--------------------------------------")

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const sebastian = {
	firstName : "Sebastian",
	age : 24
}

console.log("Exercise 2:");
console.log(sebastian);
console.log("--------------------------------------")

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};


// make a rule called isAllowed and let the value be true
stackOverflow.rule = true;
console.log("Exercise 3:");
console.log(stackOverflow);
console.log("--------------------------------------")

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {
	description: "The best song in the world."
}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;

thisSong.about = "Just a tribute";

console.log("Exercise 4:");
console.log(thisSong);
console.log("--------------------------------------")
// --------------------------------------