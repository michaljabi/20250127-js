/*
  TASK:
  Repair this file without changing the final, console.log() call.

  When you see:
	You reached the end! - BRAVO

	on the terminal, that means you solve the task right.

	RULES:
	You should and can change code, but try to do as little changes as possible.
	The aim of this task is to understand communication about errors between you and the interpreter.

	Good luck!
*/

console.log('Program starts...');

let myHello = 'Hello';
console.log(myHello, 'World')

myHello = 'Serious';
const help = "HelpMe out"
console.log(help + ' right now!'); // HelpMe out right now!

const isDone = true;
const LARGE_NUMBER = 2048

// here, it supposes to be comment - that addNumber will return number
function addNumbers(a, b) {
	return a + b
}

const SCALE_FACTOR = 2.1
const result = addNumbers(10, 20 * SCALE_FACTOR);

console.log('Result is:', result);

console.log('You reached the end! - BRAVO')
