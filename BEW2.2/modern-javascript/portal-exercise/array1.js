// Exercise 1: Arrow Functions and Array Methods in JavaScript
// 1. .map() method and Arrow Functions
// You are given an array of numbers. Use the .map() method and arrow function syntax to return a new array where every number is squared.
const numbers = [1, 2, 3, 4, 5];
const squaredNumber = numbers.map(num => num * num);
console.log(squaredNumber);


// 2..filter() method and Arrow Functions
// Given the same array of numbers, use the .filter() method and arrow function syntax to return a new array that only contains numbers greater than 2.
const newNumbers = numbers.filter(num => num > 2);
console.log(newNumbers);


// 3. .forEach() method and Arrow Functions
// Use the .forEach() method and arrow function syntax to console log each number from the original numbers array.
numbers.forEach((number) => console.log(number));


// 4. .find() method and Arrow Functions
// Use the .find() method and arrow function syntax to find the first number in the array that is divisible by 3.
const firstDivisibleByThree = numbers.find((number) => number % 3 === 0);
console.log(firstDivisibleByThree);


// 5. Chaining Methods
// Use a combination of .filter() and .map() to return a new array that contains the squares of the numbers greater than 2.
const squares = numbers.filter((number) => number > 2) .map((number) => number * number);
console.log(squares)