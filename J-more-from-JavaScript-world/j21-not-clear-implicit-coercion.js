/**
 * In JavaScript there is a mechanism called implicit type coercion.
 *   It is important to know about its existence to save yourself some time
 *   to think over why something does not work as we expected.
 *
 *   By default, in most high-level languages this type of operation:
 *
 *   '1' + 100
 *   is not allowed!
 *
 *   You have to "cast" explicitly the type to the same (either string or number)
 *   otherwise the compiler will return an error.
 *
 *   The programmer then has to show his intentions and come back (correct) the code.
 *
 *   In JavaScript, such operations is valid, because JS will cast the types for us!
 *
 * */

// The evaluation of this look similar:
console.log(1 + '');
console.log('' + 1);

// The fact that the order of these calculations matters is shown in the example below:
console.log(1 + 1 + 1 + '222')
console.log('222' + 1 + 1 + 1)

// Other examples of implicit coercion
console.log(true + false)
console.log(false + true)
console.log(true + true + true + true)
console.log(2 + true)
console.log(2 - true)

console.log(true + 1 + '')
console.log('' + true + 1)

console.log(true / 2)

// Even if the operation cannot be "cast" implicitly
// JavaScript won't throw an error anyway.
// Just display the result to us as NaN -> (Not a Number)
console.log(true * 'false')

// There is one more "strange" numeric result - obtainable in JavaScript:
// for example, let's take a closer look at the impossible "divide by zero" in mathematics:
console.log(1900 / 0)


// #1 Task:
// Proving understanding of the implicit coercion
// Write a line of code that will show "Hello Infinity" on the screen
// Use as few characters as possible in the code !!!


// # 2 Task:
// Without looking from console.log() try to answer
// what value is the constant myCoercionFriend
const myCoercionFriend = true + 1 + 2 * 3 + ' is your lucky flag!'
