/**
* Functions can return something,
 * after being executed you can receive a value from the function.
 */

// Declaration:
function giveMeTheName() {
	// Function can return only one thing at a time:
	return 'Kendra'
}

// giveMeTheName call + assign the return value to name:
const personName = giveMeTheName();

// Show the value on console:
console.log(personName);

// We can also write this as:
console.log(giveMeTheName())



// More examples:
function makeSomeComplicatedCalculation() {
	const firstNo = 6;
	const secondNo = 2;
	const result = (100 * 2) + firstNo ** secondNo / 2 - 90;

	return result;
}

console.log(makeSomeComplicatedCalculation())

function makeOtherCalculations() {
	return 89 + 2 * 3;
}

console.log(makeOtherCalculations())


// Function that is not explicitly returns a value
// in fact - return undefined!

function whatIfNoReturn() {
	const hello = 'World';
}

console.log(whatIfNoReturn())

// The same is true, when you have "empty return":

function whatIfEmptyReturn() {
	const hello = 'World2';
	return;
}
console.log(whatIfEmptyReturn())


// Return keyword will STOP executing rest of the function, when it is called:
// Things that you place after return statement, will be ignored, and are so-called "unreachable code"
function showUnreachable() {
	return 'Code below won\'t be executed';
	const x = 12 + 3;
	const y = 900;
	const sum = x + y;
}

console.log(showUnreachable())
