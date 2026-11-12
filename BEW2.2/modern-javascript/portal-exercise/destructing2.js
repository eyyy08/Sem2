// Exercise 4: Destructuring Assignment and Spread Operator 2

// 1. Destructuring Assignment
// Here is an object representing a book:
const book = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    characters: ['Bilbo', 'Gandalf', 'Thorin', 'Smaug'],
    publication: {
        year: 1937,
        publisher: 'George Allen & Unwin'
    }
};

// Your task is to:
// - Use destructuring assignment to create variables title, author, and characters from the book object.
// - Use destructuring to create variables year and publisher from the publication object inside book.
const { title, author, characters } = book;
const { year, publisher } = book.publication;

console.log(title);
console.log(author);
console.log(characters);
console.log(year);
console.log(publisher);


// 2. Spread Operator
// Here are two objects:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
// Your task is to:
// - Use the spread operator to create a new object obj3 that includes all properties from obj1 and obj2.
// - Create a new object obj4 that is a copy of obj1 using the spread operator.
const obj3 = {...obj1, ...obj2};
const obj4 = {...obj1};

console.log(obj3);
console.log(obj4);


// 3. Destructuring and Spread Together
// Here is an object with nested arrays:
const data = {
    numbers1: [1, 2, 3, 4],
    numbers2: [5, 6, 7, 8]
};
// Your task is to:
// - Use destructuring assignment to create two new arrays: array1 and array2 from data.
// - Use the spread operator to create a new array array3 which is a combination of array1 and array2.
const { numbers1: array1, numbers2: array2 } = data;
const array3 = [...array1, ...array2];

console.log(array1);
console.log(array2);
console.log(array3);