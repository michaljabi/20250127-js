/**
 * in JavaScript there are so-called Truthy and Falsy values.
 *
 * In practice, this means that any variable or constant can be checked directly in a conditional statement.
 *
 * For example:
 *   0 is false, because the if (0) block will not execute, but any other digit (-1 and below and 1 and above)
 *   It will give us true value - so it is "truthy"
 *
 * https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 * */

if(0) {
	console.log('I am working !')
}
if(false) {
	console.log('I am working !')
}
if('') {
	console.log('I am working !')
}
if('') {
	console.log('I am working !')
}
if(NaN) {
	console.log('I am working !')
}

if(1 === '1') {
	console.log('I am working !')
}

// #1 Task:
// Check the conditions and think about how to "reverse" them to get the code blocks to execute.

// #2 Task:
// What will name be below?
// why is this happening?

const name = 0 || false || '' || 'Jack'


// #3 Task:
// Correct isFinal and profile so that otherName become "Alice"

const isFinal = false;
const profile = '';
const otherName = profile && isFinal && 'Alice'

console.log(otherName);

