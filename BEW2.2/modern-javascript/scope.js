// Variable Scope and Definitions

// 2 different types of scope (technicallly 3)
// - Function Scope
// - Block Scope
// - Global Scope (By default)

// Keywords to declare a variable
/*
    var - Function Scope
    let - Block Scope
    const - Block Scope
*/

// What is a Scope?
// Scope is the area of code in which a variable is relevant
// Commonly defined by curly brackets
// Most commonly used by if/else, loops and functions

var name = 'jack';

function printName() {
    var name = 'John';
    console.log(name); // John
}

printName();
console.log(name); // jack

// ---------------------

var name = 'jack';

if(true){
    var name = "John";
    console.log(name) // John
}

// printName();
console.log(name); // John


// Use block-scoped declaration: let and const

let fruit = "Apple"

if(true){
    let fruit = "Banana";
    console.log(fruit)
}

console.log(fruit)


// The difference between var + let vs const = is that const, you cannot reassign the variable
// const car = 'Toyota';
// car = 'Honda'; // Uncaught TypeError: Assignment to constant variable.

const car = 'Toyota';

if (true) {
    const car = 'Honda';
    console.log(car); // Honda
}

console.log(car); // Toyota

// can put block inside a block

const newCar = 'Toyota';

if (true) {
    const newCar = 'Honda';
    console.log(newCar); // Honda
    if(true){
        const newCar = "Mazda"
        console.log(newCar)
    }
}

console.log(newCar); // Toyota

// -----------------------------------

const ball = ["volleyball", "basketball", "football"]

ball.push("american football")

console.log(ball)