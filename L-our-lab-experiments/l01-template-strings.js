// Consider example:
const numA = 200;
const numB = 30;
const sum = numA + numB;

console.log('You added ' + numA + ' to ' + numB + '.\nThe result is: ' + sum + '!');

/*
	We got A LOT OF concatenation here...
	Second problem is we want those things to be separate lines.
	That is why this \n must be placed to escape "enter" char in our console.log.

	You cannot just type it like that:

	console.log('You added ' + numA + ' to ' + numB + '.
	The result is: ' + sum + '!');

	That will cause an error... because the signs ' or " does not allow you to have "multiline string".
 */

// We can simplify this by using special notation of so-called TEMPLATE STRINGS:
// It is a new (since 2015) syntax, where you use another sign: ` - called backtick
// https://en.wikipedia.org/wiki/Backtick

// To write multiline string with interpolation (this syntax ${} - inside where JS expressions works!):
console.log(`You added ${numA} to ${numB}.
The result is: ${sum}!`);

console.log(`Another example ${20 + 30 * 2}`)

// MORE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
