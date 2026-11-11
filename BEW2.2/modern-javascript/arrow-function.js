// // // Arrow function syntax
// const multiply = (a, b) => a * b
// // in arrow function we do not write 'function', instead you declared it like a variable
// // never ever declared arrow function with let

// // // Traditional function syntax
// function traditionalMultiply(a, b){
//     return a * b
// }




// // // Display all items from an argument
// const displayAll = (arr) => {
//     for (item of arr){
//         console.log(item)
//     }
// }

// const phones = ["iPhone", "Samsung", "Oppo"]
// displayAll(phones)


// const convertCMtoM = (cm) => {
//     const m = cm / 100
//     return m
//     // nothing will happen after return
// }

// const lengthOfCarInCm = 300
// console.log(convertCMtoM(lengthOfCarInCm))

// // ------or--------

// const lengthOfCarInM = convertCMtoM(lengthOfCarInCm)
// const lengthOfLongCarInM = convertCMtoM(500)
// console.log(lengthOfCarInM)
// console.log(lengthOfLongCarInM)




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