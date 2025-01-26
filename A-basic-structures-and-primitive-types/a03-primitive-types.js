/**
 * We have 7 primitive types in JavaScript (state for ES15 - year: 2024).
 *
 * https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 *
 * They are passed on by value and immutable.
 * Thanks to them, we can save basic information as a string, boolean, number etc.
 */

// Primitives:
console.log('example', '- is a string')
console.log(1, '- is a number')
console.log(1n, '- is a bigint')
console.log(true, '- is a boolean')
console.log(Symbol(), '- is a symbol')
console.log(null, '- is a null')
console.log(undefined, '- is an undefined')

// string (a "chain of characters", can be both written as: "abc" or 'abc')
const myString = 'My Sample Text';

// Number (in JavaScript there is no type distinction according to Integer, Double, Float etc.!)
// there is one type. it can contain both floating point numbers and integers (precision as in double)
const myNumber = 123;

// Boolean (two values: true or false)
let myBoolean = true;

// Standard "checking what's happening" way - console.log:
console.log(myString);

// reminder:
// the word "const" does not mean that the value cannot be changed (but it actually happens when you use primitives!),
// means that we cannot change the assignment, e.g .:
// myNumber = 1233;


// Most of the time you will widely use 4 of primitive types:
// string - to show and compute text information
// number - to show and calculate numeric information
// boolean - to use some logical calculations inside program
// undefined - to handle "no value" or missing information

// You can make some operations with types:
// Most basic is addition:
const sum = 20 + 30;
// in case of strings, concatenation (adding text values):
const sentence = 'This' + ' ' + 'is' + ' cool';

console.log(sum);
console.log(sentence);

// With numbers, you can do some math:
console.log(800 + 200 + 4 * 2 - 1000);
console.log(800 + (200 + 4) * 2 - 1000);

// add:
console.log(20 + 2)
// subtract:
console.log(20 - 22)
// multiply
console.log(2 * 2.5)
// divide:
console.log(800 / 2);
// reminder ("left over" from the division):
console.log(9 % 2);

// https://www.w3schools.com/js/js_operators.asp
// https://www.w3schools.com/js/js_arithmetic.asp

