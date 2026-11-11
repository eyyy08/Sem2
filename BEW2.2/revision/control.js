const trueStatement = true

if(trueStatement){
    console.log("This statement is true")
}else{
    console.log("This statement is false")
}

// Using Comparison Operators
const marks = 70
const failGrade = 59

if(marks <= failGrade){
    console.log("You failed")
}else{
    console.log("You passed")
}

// Write me the if else, but the code blocks for if and else have to be flipped
if(marks > failGrade){
    console.log("You passed")
}else{
    console.log("You failed")
}


const standardPay = 8
const minimumHours = 40
const otHours = 20

// Calculate for me the amount of OT pay, if you have OT for more thant 15 hours, the rate is 2x the standard rate, orthwerwise you get 1.5x the standard rate
let otRate;

if (otHours > 15) {
    otRate = standardPay * 2;
} else {
    otRate = standardPay * 1.5;
}

const otPay = otHours * otRate;

console.log("Your OT Rate is", otRate);
console.log("Your OT Pay is", otPay);

// 
let OTRate = 1.5

if(otHours > 15){
    OTRate = 2
}

console.log("Your OT Pay is " + OTRate * standardPay * otHours)