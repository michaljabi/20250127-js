/**

 -> ES6

After 2015, we got a short function notation the so-called: arrow functions.
(in some programming languages it is called e.g. lambda expressions)

Arrow functions, apart from the abbreviated text, add a few more things:
    a) are always anonymous and written as expressions
    b) if we can write them on one line as a valid expression that evaluates to value,
  this value will be returned as the result of the function - without need to use the "return" keyword

# Tasks
1. Compare and check the actions of "arrow functions" by calling these functions and displaying their values on the console

*/

// ES6 + news (after 2015):
// we get Arrow functions:
const newFunc = ( name ) => `Hello ${name}!`;
const newFunc2 = name => `Hello ${name}!`;
const newFunc3 = ( name ) => {
    return `Hello ${name}!`;
};

// Reminder:
// A function can return another function:
function hello() {
    return () => 'World';
}

const innerFn = hello();
// # 2 Task:
// How do I get the "World" result?


/*

In arrow function:

When it is in one line and evaluate to value - you do not have to place "return" keyword.
Function will return whatever is after the => fat arrow notation.

If you got one parameter - you do not have to wrap it in parentheses.

 */

// Other examples:

const sum = (a, b) => a + b;

console.log(sum(10, 20))

const multiplyBy2 = num => num * 2;

console.log(multiplyBy2(10))
console.log(multiplyBy2(20))
console.log(multiplyBy2(40))

const addExclamation = word => word + '!';

console.log(addExclamation('Fresh apples'))
console.log(addExclamation('Up to 50% sale'))




