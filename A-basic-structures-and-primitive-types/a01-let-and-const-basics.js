/**
 * After 2015, we get the lexical scope of variables and 2 keywords
 * we use let and const instead of var
 *
 * Using "var" is dangerous - because a variable declared with "var" does not have a so-called "lexical scope"
 * (in other words, it 'spills' out of for loops, conditional statements, and other non-function {code blocks})
 *
 * When you will get comfortable using: const and let keywords, then you can read more about var - but in new code,
 * you will rather never use it directly in favor of using "let".
 *
 *
 * Additional materials:
 * https://www.w3schools.com/js/js_variables.asp
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#declaring_a_variable
 *
 * About var:
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#a_note_about_var
 * */

/**

	PRO HINT:

	In front-end (browser, web, HTML websites) a console.log() is just FOR DEVELOPER.

  What is: console.log() then ?!

  For us it is a "helper" to see what is going on, for example what value a variable holds,
  or what result some expression gives.

  You will use a console.log() on daily basis to see "what is going on".
  But when you will code HTML + CSS + JS, nobody will care about them (only Developers).
  So you can think of it as a "way of learning" or "test" your code.

  Check "what is going on" = console.log(100 + 2 - 3)

  console.log - has special meaning on "back-end" so "terminal" / "console" programs!
  There it is crucial to use it to communicate with User, when your program is a CLI (Command Line Interface)

  ON TRAINING:
  - we will use console.log many, many times - and you should get use to it, when you learn how to JavaScript :)

 */

/* something 


else

*/

// This is a variable:
sample 

let myVar;
// You SHOULD use the "let" keyword to declare a variable
// You can check its value, like that:
console.log(myVar);
// You will see undefined, that is because, we declare variable myVar, but it was NEVER assigned a value
// If you want to do this, you will need to write, e.g.:
myVar = 200;
console.log(myVar);
// Now it shows 200, that is because INTERPRETER is going "line by line" executing this code.
// You can increase the myVar by typing, for example:
myVar = myVar + 2;
console.log(myVar);
// Now it shows: 202
// We RE-ASSIGNED a value

// undefined - is actually a value itself, primitive type. This value means "no value" :) We will discuss it later on.

// When you use "const" keyword, you MUST:
// DECLARE and ASSIGN a value.
// And you will never be able to REASSIGN it again !!!
const otherVar = 300;

// That will cause an error:
// otherVar = otherVar + 2;

// This too:
// otherVar = 300;

// You must assign a value, so this is also error:
// const wait;

/**

	PRO HINT:

	Well, we got 2 options here, either const or let - which one to choose then?

	General rule is to: "favor const over let".
	We will talk about the types, and you see that we would like to avoid to change them, const will help us with that.

 */
