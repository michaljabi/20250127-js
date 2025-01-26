// STRINGS
// ----------------------------------------------------------------------------------------------
// Common operations on strings:
console.log('connect' + ' two ' + 'strings');
console.log(myString + '😎');

// Examples, built-in methods:
console.log('>> STRINGS:');
console.log(myString.substring(3));
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.charAt(4));
console.log('Hello World'.charAt(6));
console.log('Hello World'.slice(-5));
console.log('Ha'.repeat(10));
console.log(String.fromCharCode(65));

// strings in JavaScript are indexed collections, so you can use indexes to extract single char from string:
console.log('Some Text'[3])
// That will show "e" on the console, because it has 3rd index (count from 0).

// Combine it with using variables and constants:
const text = 'Some Text';
console.log(text[3])

// more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// NUMBERS
// ----------------------------------------------------------------------------------------------
// Common operations on numbers:
console.log('Addition', 9 + 10 + 20);
console.log('Subtraction', 14 - 2 - 1 - 1);
console.log('Multiplication', 4.3 * 2);
console.log('Divide', 4 / 2);
console.log('Exponentiation', 4 ** 2);
// we need to use the built-in JS native for square root: Math.sqrt ();
console.log ('remainder from division', 80 % 3);

console.log ('Order of operations :)', 2 + 2 * 2);

// Examples, built-in methods:
console.log('>> NUMBERS:');
console.log(myNumber.toFixed(3));
console.log(Number.isInteger(2.3));
console.log(Number.parseInt('00110001111101', 2));
console.log(Number.parseInt('00110001111101', 10));
// more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// BOOLEANS
// ----------------------------------------------------------------------------------------------
// Common operations on boolean:
console.log('Comparison:', true === true)
console.log('OR:', false || true)
console.log('AND:',true && false)
console.log('NOT:',!false)

// Common operations resulting as a boolean:
console.log('Result is:', 10 > 220);
console.log('Result is:', 10 <= 220);
console.log('Result is:', 10 + 300 < 220);

// Example built-in method:
console.log('>> BOOLEANS:');
console.log(myBoolean.toString());
// more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
