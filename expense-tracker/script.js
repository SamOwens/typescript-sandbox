// Declare a variable 'character' with explicit type 'string'
var character;
// Declare a variable 'age' with explicit type 'number'
var age;
// Declare a variable 'isLoggedIn' with explicit type 'boolean'
var isLoggedIn;
// Declare a variable 'example' with explicit type of an array of strings, initialized as an empty array
var example = [];
example = ['Sam', 'Willow'];
example.push('Greg');
console.log(example);
// Declare a variable 'mixed' with explicit type of an array that can contain strings, numbers, and booleans, initialized as an empty array
var mixed = [];
mixed.push('Sam');
mixed.push(1);
mixed.push(false);
console.log(mixed);
// Declare a variable 'uid' with explicit union type of 'string' or 'number'
var uid;
uid = 123;
uid = 'XXX';
// Declare a variable 'example1' with explicit type 'object'
var example1;
example1 = { name: 'Sam', age: 30 };
console.log(example1);
// Declare a variable 'example2' with an explicit type that defines its structure with 'name' (string), 'age' (number), and 'height' (string)
var example2;
example2 = { name: 'Sam', age: 30, height: '5ft 11' };
console.log(example2);
