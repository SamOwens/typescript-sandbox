//let greet: Function;

// Example 1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)
}
greet('Sam', 'Hello');

// Example 2
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add'){
    return numOne + numTwo
  } else {
    return numOne - numTwo
  }
}
console.log(calc(1,2,'add'))

// Exmaple 3
let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number}

logDetails = (example: person) => {
  console.log(`${example.name} is ${example.age} years old`)
}
logDetails({name: 'Sam', age: 32});

