/**
 * When it comes to conditional statements, we distinguish:
 *
 *   if ()
 *   else if ()
 *   else
 *
 *   switch
 *
 *   ternary operator
 *
 *   we can also use logical operators
 *
 *
 * Caution:
 * In JavaScript, we have to be careful with comparisons.
 * You must use the === comparison sign
 *
 * look
 * https://dorey.github.io/JavaScript-Equality-Table/
 * */

const value = 300
// Example of condition:
if(value > 200) {
	console.log('Value is more than 200')
}

console.log('HELLO'.toLowerCase())
console.log('hello'.toUpperCase())

console.log('code', 'Code')

const capitalize = (word = '') => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

console.log(capitalize('HELLO'))
console.log(capitalize('hELLO'))
console.log(capitalize('hello'))
console.log(capitalize('h'))
console.log(capitalize(''))

const word = 'Hello';
if(word.toLowerCase() === 'hello') {
	console.log('This will not fire...');
}

/*
		The condition if...else if
*/
let numericCondition = 1;

// || - OR
// && - AND
// ! - NOT

console.log( 11 || 200  )
console.log( 200 || 200 )
console.log( false || null || undefined || 0 || 200 )

console.log( false && 200 )
console.log( false && null && 200 )
console.log( false && null && 200 )

console.log( 2 && 3 && 200 )

console.log( !true )
console.log( !false )
console.log( !'' )
console.log( !'heee' )
console.log( !11 )

if(numericCondition === 1 || numericCondition === 22) {
	console.log('if !')
} else if (numericCondition){
	console.log('else if !')
} else {
	console.log('else !?')
	console.log('else !?')
}

/*
		The ternary operator
*/
const x = 100;
const higherThen10 = x > 10;
const helloValue = higherThen10 ? 'hello' : 'goodbye';

console.log(helloValue);
/*
		Switch
*/
switch(helloValue) {
	case 'hello':
	case 'hello2':
		console.log('logic for hello...');
		break;
	case 'goodbye':
		console.log('logic for goodbye...');
		break;
	default:
		throw new Error('I cannot handle this case')
		// console.log('logic for unknown value')
}


// #1 Task
// Find out what value hello will have if you change x to be less than 10
// Why is this happening?

// #2 Prepare your own console.log which will write "take a" and "coat" or "t-shirt"
// depending on the weather variable which can take the values "windy" and "sunny"
// use the ternary operator

