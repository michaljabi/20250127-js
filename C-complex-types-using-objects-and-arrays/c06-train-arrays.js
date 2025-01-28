// #1 Task:
// Declare a new array with the numbers 1 up to 8
// Remove the first and last value out of it
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);


console.log(numbers.pop());
console.log(numbers.shift());

console.log(numbers);

// cool trick!
const numbersAsStr = Array.from('12345678', Number)
console.log(numbersAsStr);


// #2 Task:
// Show on the console "one above the other" the result of multiplying the fields of this array by 3
for(const el of numbers) {
    console.log(el * 3)
}

// #3 Task:
// Check the documentation for the "indexOf" method for arrays. How to use it? Show an example of use
numbers.push(3);

console.log(numbers)
console.log(numbers.indexOf(7))
console.log(numbers.indexOf(2))
console.log(numbers.indexOf('2'))
console.log(numbers.indexOf(11))

console.log(numbers.indexOf(3))
console.log(numbers.indexOf(3, 2))

const letters = Array.from('ABCDEFGB')
console.log(letters.indexOf('B'))
console.log(letters.indexOf('B', 2))

console.log(letters.indexOf('b'))

console.log('B' === 'b')

// #4 Task:
// Show the 1st and last element of the array on the console (one below the other)
console.log(numbers);

// solution 1:
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

// solution 2:
console.log(numbers.at(0));
console.log(numbers.at(-1));

console.log([].at(0));
console.log([].at(-1));

console.log([][0]);


const someArray = [1, 2, 3, 4];
// conditional logic:
if(someArray.length === 1) {
    console.log(someArray);
} else if(someArray.length > 1) {
    console.log('You got, more then one element', someArray.length)
} else {
    console.log('Array is empty')
}

