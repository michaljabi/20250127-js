//"use strict";
/**
* Unfortunately in JavaScript it is possible to declare and assign a variable without using a keyword.
*
* We shouldn't be doing this !.
* However, with the standard settings, JS will not return an error.
*
* Remember to always use let or const.
*
* But let's see what happens if we don't
* */

function makeAHello() {
	hello = 'World';
	// The line above is acceptable in JS. (note the missing: var / let / const)
	// This, however, causes a problem.
}

makeAHello();

// the variable hello is not what we think is in the scope of the makeAHello () function right now!
// it has been assigned to global space
// here's the proof in Node.js:
console.log(global.hello);

// Conclusion:
// ALWAYS REMEMBER THE KEYWORD before declaring a variable!

// Can this behavior be changed?!
// Could JavaScript throw an error in this case - to help us catch such moments?

// YES.
// Uncomment "use strict" at the top and restart the interpreter (restart Quokka.js or JS REPL)
// Then our eyes will see a beautiful mistake.
// That's exactly what we wanted!


// More about strict mode?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode
