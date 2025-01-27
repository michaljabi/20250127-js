
const x = 2;
const y = 3;

// # 1 Task:
// Show the result of adding x and y (expected: 5)
console.log(x + y);

// # 2 Task:
// Show the result of the power of x to 3 (or x to y) (expected: 8)
// 2.1: hardcoded solution
console.log(x * x * x);
// 2.2: Math.pow()
console.log(Math.pow(x, y))
// 2.3: ** (works after 2015)
console.log(x ** y);

//------------------------------------------------------------
const hello = 'Hello';
const almostWorld = 'Almost World';

// # 3 Task:
/*
	Show the result of adding hello + almostWorld
	So that the text "Hello World" appears on the console
	use the appropriate built-in method on the almostWorld (!) constant
*/
// 3.1 solution:
console.log(hello, almostWorld.substring(7))
// 3.2 solution:
console.log(hello, almostWorld.slice(-5))
// other variant of the solutions above
console.log(hello + ' ' + almostWorld.slice(-5))
console.log(hello + ' ' + almostWorld.substring(7))

//------------------------------------------------------------
let isAnAdmin = true; // 4.2 you can change the code only in this line
console.log(isAnAdmin)
isAnAdmin = false; // 4.1 uncomment this line before start !
console.log(isAnAdmin)

// # 4 The task
// Uncomment and fix the error in the line with the code "isAnAdmin = false"
// You should see the following output on the console:
// true
// false


console.log(String.fromCharCode(65))
console.log(String.fromCharCode(66))

// in MDN if you got this: String.prototype.trim()
// with String.prototype, Number.prototype, and so on....
// it means you need a string value
console.log('  hello World  ')
console.log('  hello World  '.trim())