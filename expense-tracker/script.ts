// Declare a variable 'character' with explicit type 'string'
let character: string;

// Declare a variable 'age' with explicit type 'number'
let age: number;

// Declare a variable 'isLoggedIn' with explicit type 'boolean'
let isLoggedIn: boolean;

// Declare a variable 'example' with explicit type of an array of strings, initialized as an empty array
let example: string[] = [];
example = ['Sam', 'Willow'];
example.push('Greg');
console.log(example);

// Declare a variable 'mixed' with explicit type of an array that can contain strings, numbers, and booleans, initialized as an empty array
let mixed: (string | number | boolean)[] = [];
mixed.push('Sam');
mixed.push(1);
mixed.push(false);
console.log(mixed);

// Declare a variable 'uid' with explicit union type of 'string' or 'number'
let uid: string | number;
uid = 123;
uid = 'XXX';

// Declare a variable 'example1' with explicit type 'object'
let example1: object;
example1 = { name: 'Sam', age: 30 };
console.log(example1);

// Declare a variable 'example2' with an explicit type that defines its structure with 'name' (string), 'age' (number), and 'height' (string)
let example2: {
  name: string;
  age: number;
  height: string;
};

example2 = { name: 'Sam', age: 30, height: '5ft 11' };
console.log(example2);
