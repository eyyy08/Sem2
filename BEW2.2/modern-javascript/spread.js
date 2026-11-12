// Spread Operator
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const nums3 = [...nums1, ...nums2];
// the three dots is spread operator
console.log(nums3); // [1, 2, 3, 4, 5, 6]


//                        pass nums1 in as an array (have array within an array)
const numsWithoutSpread = [nums1, nums2]
console.log(numsWithoutSpread) // [[1, 2, 3], [4, 5, 6]]



// Spread Operator with Objects
const person = {
    name: 'John Doe',
    age: 18
};

const student = {
    ...person,
    grade: 'Diploma'
};

console.log(student); // { name: 'John Doe', age: 18, grade: 'Diploma' }



const studentWithoutSpread = {
    person,
    grade: 'Diploma'
}
//                                             leaving whatever is inside only
console.log(studentWithoutSpread) // { person: { name: 'John Doe', age: 18 }, grade: 'Diploma' }




// Using Spread Operator in Function Arguments
function sum(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
console.log(sum(...nums)); // 6




// Destructuring and Spread Together

// Array
const phones = ['iPhone', 'Samsung', 'Oppo', 'Vivo', 'Nokia']
const [first, ...rest] = phones
console.log(first) // iPhone
console.log(rest) //['Samsung', 'Oppo', 'Vivo', 'Nokia']


// Object
const phone = {
    brand: 'Apple',
    name:' iPhone 18 Pro Max',
    year: 2026
}

const updatedPhone = {
    ...phone,
    name: 'iPhone Duo'
}

console.log(updatedPhone) // { brand: 'Apple', name: 'iPhone Duo', year: 2026 }


// Combining Destructuring and Spread in Function Arguments
const printSoldierInfo = ({ name, ...rest}) => {
    console.log(name)
    console.log(rest)
}

const soldier = {
    id: 101,
    name: 'Yoo Si Jin',
    age: 27,
    rank: 'Captain'
}

printSoldierInfo(soldier)
// Yoo Si Jin
// { id: 101, age: 27, rank: 'Captain' }