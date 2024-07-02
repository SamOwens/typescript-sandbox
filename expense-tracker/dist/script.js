"use strict";
//let greet: Function;
// Example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greet('Sam', 'Hello');
// Example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(1, 2, 'add'));
// Exmaple 3
let logDetails;
logDetails = (example) => {
    console.log(`${example.name} is ${example.age} years old`);
};
logDetails({ name: 'Sam', age: 32 });
