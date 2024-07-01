// Explicit Types
let character: string;
let age: number;
let isLoggedIn: boolean;

// Arrays
let example: string[] = [];
example = ['Sam', 'Willow'];
example.push('Greg');
console.log(example);

// Union Types
let mixed: (string | number | boolean)[] = [];
mixed.push('Sam');
mixed.push(1);
mixed.push(false);
console.log(mixed);

let uid: string | number;
uid = 123;
uid = 'XXX';

// Objects
let example1: object;
example1 = { name: 'Sam', age: 30 };
console.log(example1);

let example2: {
  name: string;
  age: number;
  height: string;
};

example2 = { name: 'Sam', age: 30, height: '5ft 11' };
console.log(example2);
