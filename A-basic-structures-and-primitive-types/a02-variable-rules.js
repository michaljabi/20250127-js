// 1st, note: you can hold a string - "textual" value inside a variable:

const welcomeMessage = "Hello World!";

console.log(welcomeMessage);

/**
 *
 * GENERAL RULES WITH VARIABLES:
 *
 * - 1: variable names are case-sensitive!
 * - 2: you cannot have 2 variables with the same name inside the same "scope" (you see later what a scope is)
 * - 3: you should use only letters and numbers and 2 chars: $ _ to settle variable name
 * - 4: you cannot start variable name with a number
 * - 5: you cannot have a variable named wit a reserved keyword (there are some of them like: for, do, switch)
 *
 *
 * CONVENTIONS:
 * When you write a program, some rules are settled by programmers, not by language itself.
 * This kind of rules, are called "conventions". It is not an "error" when you break them, it more like:
 * "you want to follow them, to write better code".
 * */

// let, const and naming conventions:

// Write the names of the variables camelCase:
let myNumber = 10;

// We try not to change the type of variables, so number should stay a number:
myNumber = 100;
console.log(myNumber + 200);

// If we know that we are not going to change the value of a variable anywhere - then we make a constant instead:
const luckyNumber = 7;

// luckyNumber = 10; // this operation is not allowed now - and that's what we wanted.

// Names of special constants - often used in most applications
// Defined for several "files" (modules)
// we can write capital letters in SNAKE_CASE:

const MAX_SCREEN_WIDTH = 1920;

// In JS you don't have to write semicolons at the end,
// in most cases - this has no consequences (but, there are exceptions 😑)
console.log("Hello !");
console.log("Hello 1!");
console.log("Hello 2!");
