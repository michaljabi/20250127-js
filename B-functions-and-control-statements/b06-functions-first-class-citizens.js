/**

Why are functions so important?

	First:  they allow part of our code to be "closed" and called at any time.
	Second: they cause that we do not have to repeat ourselves with the code
	Third:  we can define their input parameters and return final result of the operation


# Tasks
1. What happens if you try to call "sumMyNumbers" before the declaration?
2. What returns a function that returns nothing?

*/


/* INTRO */

// there are 2 main ways to write a function inside JS
// both of them are important to know and understand.

// 1st - you already familiar with:
/* FUNCTION DECLARATION (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) */
function iAmAFunctionDeclaration() {
	return 'hello from Declaration';
}

// Call:
iAmAFunctionDeclaration();


// 2nd - looks just like we assign a value to a variable or constant!:
/* FUNCTION EXPRESSION (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) */
const iAmFunctionExpression = function() {
	return 'hello from Expression';
}

// Call looks the same, but we need a "reference" - so the variable or const, to call:
iAmFunctionExpression();

/*

	For now lets assume that BOTH of the "definitions" works the same.
	(that is fairly good assumption, but there is some differences when it comes to "since when I can use this function within my code")

	Understanding both of them - is crucial to move forward to callbacks and arrow function syntax.

	As you can see above, Function can be treated as a value, and pass to parameters as an argument.
	You can have reference to some function.

	Function expression can be "anonymous" - you can see that there is no name given to function itself in line :34
	We can run this function because we got a const reference to it (!).

*/



/*-----------> PART 1: Function expression >---------------------------------*/

// Anonymous function that has the "sumMyNumbers" reference
// Only by reference (constant) - we can refer to it later!
const sumMyNumbers = function(a = 0, b = 0) {
    return a + b
}

console.log(sumMyNumbers())
console.log(sumMyNumbers(10, 20))


/*-----------> PART 2: >---------------------------------*/

// Hmmm ... since we can treat functions as ordinary "values" e.g.
let sampleNumber = 10
// Then we should be able to pass them as a parameter in the function:

const sayHello = function() {
	console.log('Hello John!')
}
// The code written above is the so-called "Function expression"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function

function greetings(sayHelloFn, luckyNumber) {
	sayHelloFn()
	console.log('Your lucky number is', luckyNumber)
}
// The code written above is the so-called "Function declaration"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function

greetings(sayHello, sampleNumber)


/*-----------> PART 3: >---------------------------------*/

// Hmmm ... if a function accepts a function, it can also return it !?

function welcome() {
	return function() {
		console.log('Welcome stranger')
	}
}

// # 3 Task:
// How to get and call "Welcome stranger" on the screen?


