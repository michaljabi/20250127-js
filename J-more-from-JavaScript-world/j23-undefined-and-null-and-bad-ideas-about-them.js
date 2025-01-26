/**
 *  In JavaScript, several "assignment" states and variable declarations can be distinguished
 *
 * */

try {
	// We can have something that doesn't exist - and we want to use it:
	console.log( notExist )
} catch(e) {
	// in this system something has the "NOT DEFINED" status
	// this means neither more nor less - that the programmer wants to use something that has never been declared in the code
	console.log(e)
}

// The value below is declared but not assigned (undefined)
let iAmNotAssigned;
let iAmNothingAtTheBegin = null;
let iAmAssigned = 123;

console.log(iAmNotAssigned);
console.log(iAmNothingAtTheBegin);

// Uncomment the following to check the undefined value:
// console.log(iAmNotDefined);

// IMPORTANT:
// null and undefined values, do not execute on conditional statements:
// > because they are both falsy
if (iAmNotAssigned) {
	console.log('Boom !')
}
if (iAmNothingAtTheBegin) {
	console.log('Boom !')
}

/**
 * Declaring your variables this way is not a good idea.
 * Wherever possible - declare constants (then you have to assign them a value right away)
 *
 * use the rule: "favor const over let"
 * */

// #1 Task:
// Correct the following:
let hello;
//.....
// 36...
// 37...
// ...
// a bazillion lines of code further...
//.....
hello = 'World';
console.log(hello);

/**
* Additionally:
*
* Always try to define the so-called initial state - to immediately show the programmer's intentions
* and discover the "type" of data the programmer meant
*
* */

// avoid !! :
let showName = null;
// a bazillion lines of code further...
// ....
showName = 'Jan Janusz Kowalski Jr.'


// #2 Task:
// Think and answer what are the consequences of assigning a variable to null?
// ^ see above.


// #3 Task:
// Uncomment and repair
// const role;
// role = 'ADMIN'
