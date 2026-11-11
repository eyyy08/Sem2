// // FOR LOOP
// // Write a for loop that console log from 1 - 5
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// // // use the same loop, use 6 instead of 5, but still achieve the same result
// for (let i = 1; i < 6; i++) {
//     console.log(i);
// }


// // WHILE LOOP
// // Write a while loop that makes you do push-ups for 20 times
// let i = 1;
// while (i <= 20) {
//   console.log("You did " + i + " push-ups!");
//   i++;
// }

// Loops with arrays
// let fruits = ['Apple', 'Banana', 'Orange'];
// for(let fruit of fruits){
//     console.log(fruit)
// }
// // This is an example of an array for...of loop

// // Loops with Objects
// const user = { name: "Alex", role: "Admin"}
// Object.values(property).forEach((prop) => {
//     console.log(prop)
// })
// // More similar version to for...of
// for(const [key, value] of Object.entries(user)){
//     console.log(`${key}: ${value}`)
// }

// Array of Objects interaction with Loops
const listOfUser = [
    {
        name: "Alex",
        age: "27",
        role: "Software Developer",
        experience: 60
    },
    {
        name: "James",
        age: "24",
        role: "Network Engineer",
        experience: 24
    },
    {
        name: "Alicia",
        age: "22",
        role: "Software Developer",
        experience: 24
    }
]

// Output the user's name, age, role and experience
// for(const user of listOfUser){
//     console.log(`This user's name is ${user.name}`)
//     console.log(`This user is ${user.age} years old`)
//     console.log(`This user's role is ${user.role}`)
//     console.log(`This user has ${user.experience} months of experience`)
// }

// Modify the code above, feel free to add anything, but need the amount of experience displayed to be listed as years and months
for(const user of listOfUser){
    const years = Math.floor(user.experience / 12)
    const months = user.experience % 12
    // % - modulus
    
    console.log(`This user's name is ${user.name}`)
    console.log(`This user is ${user.age} years old`)
    console.log(`This user's role is ${user.role}`)
    if (months == 0) {
        console.log(`This user has ${years} years of experience`);
    } else {
        console.log(`This user has ${years} years and ${months} months of experience`);
    }
}