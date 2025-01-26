/**
*
* In JavaScript a very important role is played by ranges, actually called: SCOPE
*
* The point is that a function has access to what is "outside it"
* we will call it "outer scope"
*
* This allows us to use values that are defined outside the function.
*
* The range at the "very top" is the so-called Global Scope
* However, we know that in Node.js each file has its own scope - so calling it "global"
* is technically wrong. However, we can talk about scope of the module.
*
* The actual global scope in the whole Node.js is achieved by referring to the object:
* global
*
*
* */


// a) Module (per file) SCOPE
const model = 'Q2'

function mySuperCar () {
	// b) local SCOPE of (mySuperCar) | each function has its own scope.

	function getName() {
		// In inner scope, you can either use the constant model
		// or
		// Define new constant / variable or parameter
		// you can use the same name, because naming of those things is unique inside the scope.
		// In other scopes you can use the same names - however - this prevents you to access same named things from outer scip
		return 'Audi'
	}

	console.log('My cool car is:')
	console.log(getName())
	console.log(model)
}

mySuperCar();
