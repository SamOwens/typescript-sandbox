let age: any = 25;
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'Sam' };
console.log(age);

let mixed: any[] = [];
mixed.push(25, 'Hello', false);
console.log(mixed);

let example: { name: any; age: any };
example = { name: 'Sam', age: 24 };
console.log(example);

example = { name: 'Sam', age: '24' };
console.log(example);
