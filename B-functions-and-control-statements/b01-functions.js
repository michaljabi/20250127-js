/**
* Functions - these are some basic elements you can't skip when building an application.
*
* Fist: they allow to close the executed code in the form of procedures.
* Put simply: avoiding repetitions, because something we wrote can be triggered several times by using function
*
* Second: they are able to convert data in a way defined by us.
 * Having parameters (Input)
 * Generate output data and return it (Output).
 * more about it in /b03-functions-with-parameters.js example
*
* You can name function however you want, but by convention:
* Name of the function is a verb - and you separate words using theCamelCase
 */

// Declaration:
function sayHello() {
	console.log('Hello!')
}

// Call:
sayHello()


// # 1 Task:
// How To Quickly Repeat These Entries 4 Times On The Screen:
// we want to see 4 boxes one below the other

console.log('  ____________')
console.log('|  in the box  |')
console.log('  ------------')
