let greet: Function;

greet = () => {
  console.log('Hello World');
};
greet();

// Define an arrow function named 'add' with three parameters:
// 'a' and 'b' are numbers, and 'c' is either a number or a string with a default value of 10.
// If we don't assign a default value to c, then it would be c? to indicate that its an optional param
const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};
add(5, 10, '200');

const minus = (a: number, b: number) => {
  // return type in inferred by the param types
  return a - b;
};
let result = minus(10, 7);
console.log(result);
