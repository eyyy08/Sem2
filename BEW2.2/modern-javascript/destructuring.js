// Object Destructuring
// use curly bracket
const student = {
    name: 'John Doe',
    age: 25,
    grade: "Diploma",
    parents: {
        father: 'Mark Doe',
        mother: 'Jane Doe'
    }
};

const name = student.name; // The noob way
const { age, grade } = student // The pro way (destructuring)
// use curly bracket

// Nested Destructuring
const { parents: { father, mother }} = student
const{ parents } = student
// with blue color can be put into console.log() and run?

console.log(name); // John Doe
console.log(age); // 25
console.log(grade);
console.log(father);
console.log(mother);
// cannot put console.log(parents) if no const{parents} = student
console.log(parents)




// Destructuring Arrays
// user square bracket
const colors = ['red', 'green', 'blue']
const [firstColor, secondColor, thirdColor] = colors
console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)



// Destructuring Function Parameters
function greetPerson({ name, age}) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
}

const person = {
    name: 'Jackie Chan',
    age: 67
};

greetPerson(person); // Hello, Jackie Chan. You are 67 years old.


// Write me the above function, name it greetPersonWithoutDestructuring, 
// do it the way without destruturing. The call of the function has to be the same, 
// only passing person as an entire object variable in.
function greetPersonWithoutDestructuring(aPerson) {
    console.log(`Hello, ${aPerson.name}. You are ${aPerson.age} years old.`);
}

const aPerson = {
    name: 'Jackie Chan',
    age: 67
};

greetPersonWithoutDestructuring(aPerson); // Hello, Jackie Chan. You are 67 years old.

// in arrow function
// const greetPersonWithoutDestructuring = (aPerson) => {
//     console.log(`Hello, ${aPerson.name}. You are ${aPerson.age} years old.`);
// }
// greetPersonWithoutDestructuring(aPerson);



// Default values with Desturing
const car ={
    brand: 'Toyota',
    model: 'Camry',
    color: 'blue' // You can try commenting this line
}

// 上面color没有写，会拿default的

//                    Default value of 'color' is black
const { brand, model, color = 'black' } = car
console.log(color)

// You can do the same thing with arrays
const shoes = ['Air Jordan', 'Yeezy', 'White Shoe']
const [firstShoe, secondShoe, thirdShoe = 'Speedcat'] = shoes
console.log(thirdShoe)