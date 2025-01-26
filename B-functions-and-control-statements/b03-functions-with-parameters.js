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
function sumTwoNumbers(a, b) {
	return a + b
}

// Call and assignment of the returned value from function:
const result = sumTwoNumbers(10, 20)


// #1 Task:
// Show the addition result of 10 + 20 on the screen


// #2 Task:
// Count how many is 30 + 560


// #3 Task:
// What if we want to count 450 + 200 + 100?



/* ---------------------- */
// Functions after 2015 may have default parameters:

function greetings(user = 'Admin') {
	console.log('Hello', user)
}

// #4 Task:
// try to call greetings with arguments and no argument, what will happen?


// #5 Task:
// After completing task #4, remove the default user value - what will happen?
