//This works because of hoisting
//console.log(add(2,8));

//Function signature
function add(x, y) {

    //Function body
    return x + y;
}

// Anonymous function after the equal sign
const addInAVariable = function add(x, y) {
    return x + y;
}

// console.log(addInAVariable(2, 5));

// Arrow function as a one-liner
const addArrowFunction = (x, y) => x + y;

function doActionWithSomeone(anyFunctionReference, name) {
    anyFunctionReference(name);
}

const running = (name) => console.log(`${name} is running`);

doActionWithSomeone(running, "Anders");

const walking = (name) => console.log(`${name} is walking`);

doActionWithSomeone(walking, "Sebastian");

doActionWithSomeone((name) => console.log(`${name} is sleeping`), "Sebastian");