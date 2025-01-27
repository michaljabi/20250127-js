// @ts-check

// "use strict";
/**
 * Because JavaScript does not have the so-called strong typing (programmer attach type signature with a value)
 * allows us to do with variables "whatever we can think of"
 *
 * A bad idea (habit) will be:
 *  "dynamic change of variable type"
 *
 * With the "typeof" keyword, you can see what a primitive type variable is
 */

// first string:
const helloWorld = "Hello World";
console.log(
  "When you write your first program ever, is some programming language"
);
console.log('It is often called "', helloWorld, '"');
console.log("It is a combination of", helloWorld.split(" ").length, "words");
console.log(typeof helloWorld);

// then number:
const myLuckyNumber = 12333; 
// favor const over let.
console.log("I like the number", myLuckyNumber, "it is my favourite number");
console.log("did you know you can divide it by 3?, see:", myLuckyNumber / 3);
console.log(typeof myLuckyNumber);

// if you forget to use let or const for variable it leaks to global scope
// console.log(global.myLuckyNumber)

// then boolean:
let myFlag = true;
console.log("I do not know if this is", myFlag, "or", !myFlag);
console.log(typeof myFlag);

myFlag = "";
console.log(myFlag)

// then undefined:
let something;
console.log("This variable is:", something);
console.log(typeof something);

// # 1 Task:
// Refactor - change the above entries to the correct code
// Without changing the so-called "logic" (way of work) (that is, all console.logs stay and should show up as before)
