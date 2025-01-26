/**
 * What is lexical scope?
 *
 * Well, we will discuss te "Scope" concept more precisely - later on.
 * For now, you should just know, that, your variables, are available on some "Zones"
 *
 * Those "zones" are defined by functions or control statements / we will discuss them in a moment...
 *
 * For now, when you use "let" and "const" - just wrapping some part
 * of code with, curly braces { .... } will introduce a new scope to it.
 * */

// Example: There cannot be situation where you will declare 2 variables with the same name
// in the same scope

let someText = 'Hello';
// uncomment line below to see the error:
// let someText = 'ok';
// ^ SyntaxError: Identifier 'someText' has already been declared (18:4)

// But when I create new block-scope, with curly braces:
{
	// This is legal (we got the same name, but in other scope)
	let someText = 'I am inside of other scope';

	// You got access to local scope
	console.log(someText)
}

// In outer scope:
console.log(someText)

