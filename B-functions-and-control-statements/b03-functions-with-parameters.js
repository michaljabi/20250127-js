/**
* Functions can be declared with the so-called parameters.
* These are the entries for the arguments (data) passed to the function.
* Name of the parameters - are up to you!
* Number of parameters that function will have - are up to you!*
*
* You can define them theoretically "infinitely many"
* using the appropriate notation with the operator rest "..." (we will get to it later on).
*
* However, in practice, we do not want these parameters to be more than 5-7.
* For the readability of our code and the convenience of its use.
*
*
* When declaring the letters a and b are "parameters"
*
* while the transmitted data 10 and 20 are called arguments
*
*/

// Declaration:
function sumTwoNumbers(a, b, c = 0) {
	return a + b + c
}

// Declaration:
function sumThreeNumbers(a, b, c = 0) {
	return a + b + c
}

// Call and assignment of the returned value from function:
const result = sumTwoNumbers(10, 20)
// #1 Task:
// Show the addition result of 10 + 20 on the screen
// solution 1.1
console.log(10 + 20);
// solution 1.2
console.log(result)
// solution 1.3
console.log(sumTwoNumbers(10, 20))

// #2 Task:
// Count how many is 30 + 560
console.log(30 + 560);
const result2 = sumTwoNumbers(30, 560);
console.log(result2);
console.log(sumTwoNumbers(30, 560))

// #3 Task:
// What if we want to count 450 + 200 + 100?
// solution 3.1 (add 3rd parameter - we should rename function!)
console.log(sumTwoNumbers(450, 200, 100))
// solution 3.2:
const partialSum = sumTwoNumbers(450, 200);
const finalResult = sumTwoNumbers(partialSum, 100);
console.log(finalResult);
// solution 3.3:
console.log(sumTwoNumbers(sumTwoNumbers(450, 200), 100))

/* ---------------------- */
// Functions after 2015 may have default parameters:

function greetings(user = 'Admin') {
	console.log('Hello', user)
	//return 'Hello ' + user
}

greetings()

// #4 Task:
// try to call greetings with arguments and no argument, what will happen?
// console.log(greetings())
greetings()
greetings('Michał')
greetings('Kasia')


// #5 Task:
// After completing task #4, remove the default user value - what will happen?
