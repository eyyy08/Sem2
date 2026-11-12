// // Arrow function syntax
const multiply = (a, b) => a * b
// in arrow function we do not write 'function', instead you declared it like a variable
// never ever declared arrow function with let

// // Traditional function syntax
function traditionalMultiply(a, b){
    return a * b
}




// // Display all items from an argument
const displayAll = (arr) => {
    for (item of arr){
        console.log(item)
    }
}

const phones = ["iPhone", "Samsung", "Oppo"]
displayAll(phones)


const convertCMtoM = (cm) => {
    const m = cm / 100
    return m
    // nothing will happen after return
}

const lengthOfCarInCm = 300
console.log(convertCMtoM(lengthOfCarInCm))

// ------or--------

const lengthOfCarInM = convertCMtoM(lengthOfCarInCm)
const lengthOfLongCarInM = convertCMtoM(500)
console.log(lengthOfCarInM)
console.log(lengthOfLongCarInM)




// Write an arrow function that converts kgs to lbs, then returns the result.
const convertKgToLbs = (kg) => {
    const lbs = kg * 2.20
    return lbs
}

const weightInKg = 70
console.log(convertKgToLbs(weightInKg))

// ------or--------

const weightInLbs = convertKgToLbs(weightInKg)
console.log(weightInLbs)


// -----answer----------


const convertKgToPounds = (kgs) => kgs * 2.20

const dTrump = 108
const dTrumpInPounds = convertKgToPounds(dTrump)
console.log(dTrumpInPounds)



// Arrow Function in Callbacks
// What are callbacks?

// Example of callbacks
// .map, .filter, .reduce -> Array methods to do specific actions
// .filter -> is to find only the elements that fit the specified criteria
// .map -> is essentially behaves like a for...of loop but simple, it will also create a new array
// .reduce -> used for calculating total / accumulation of value

const list = [2, 4, 6, 8 ];
//                        This is the call back
//                        required to put in a function into the callback's bracket?
const list2 = list.filter(num => num > 5);
console.log(list2); // [ 6, 8 ] 



//                              This is the call back
const listMultiplied = list.map(num => num * 2)
console.log(listMultiplied)


// exp without arrow function in callback
const listSquared = list.map(function(num){
    return num * num
})
console.log(listSquared)


//                       need 2 parameters (accumulate value, the element in array)
const sum = list.reduce((total, num) => total + num, 0 /* starting number is 0 */)
console.log(`The result of .reduce is ${sum}`)



// a product of the array using .reduce method, in arrow function
const product = list.reduce((prod, num) => prod * num, 1 /* starting number is 1 */)
console.log(`The result of .reduce is ${product}`)