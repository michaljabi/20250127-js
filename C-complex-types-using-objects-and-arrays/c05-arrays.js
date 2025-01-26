/**
 * Arrays are indexed collections of items of different (or the same) types.
 * In JavaScript, they are always dynamic. Which means - you can always add new, or remove existing from that collection.
 *
 * Even specifying the size of an array - using the constructor
 * - it can be changed later - by adding elements
 *
 *
 * In an array, elements have a specific order, and can be referenced by index.
 * An array is usually created with the following characters: [] - this is the so-called an array literal
 * That's enough (we don't use a class constructor)
 *
 * */

// Array example:
const mutableArray = [ 'a', 'b', 'c', 'd' ];

// Check the length of the array
console.log(mutableArray.length);

// Read an array element at a specific index:
console.log(mutableArray[2]);

// Modify an array element at a specific index:
mutableArray[2] = 'x'

// This is a collection that can be iterated.
// Both with a for loop
for(let x = 0; x < mutableArray.length; x++) {
	// then we refer to indexes of the array:
	console.log(mutableArray[x]);
}
// and the "for of" loop
for(const element of mutableArray) {
	console.log(element);
}
// and the built-in forEach method + callback here:
mutableArray.forEach(element => {
	console.log(element)
})

// Methods mutating an array (changing its elements):
// More ? check: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype

// add element (s) to the end:
mutableArray.push( 'e', 'f', 'g' );

// "remove" the last element:
mutableArray.pop();

// add element (s) to the beginning:
mutableArray.unshift( 'x', 'y' );

// "remove" the first element:
const first = mutableArray.shift();

console.log(first);
console.log(mutableArray);

// WARNING ! Array with elements of different types | ! -WE DO NOT PRACTICE THIS-! |
const myBadArray = [ 1, 2, 'banana', 44, 55, 3, 'apple' ];

// although JS allows us to hold different types of elements in an Array, we don't want to do that.
