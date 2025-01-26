// First lets see once again what value parameter have, if no argument is provided:
function shoutMyName(name) {
	return 'Your name is: ' + name;
}

// NOTE: no argument provided, and it is not an error 🤔...
const result = shoutMyName();

// So, lets check out what is the result:
console.log(result);

// Well, this is not what we wanted...
// But it is how JS works.
// In one hand: you can define parameter
// On the other: you don't have to provide arguments at all, or - as you will see, provide more than you should:

const otherResult = shoutMyName('Mike', 'Katie');

console.log(otherResult);

// Over here, the 'Katie' argument is IGNORED, that is logical because shoutMyName definition - expects to have
// JUST ONE parameter "name"!

// What is interesting... that it IS NOT an error in JavaScript world..

// In fact - those are bad news to us...
// We should keep those things in mind while programing, and provide the right amount of arguments,
// otherwise code can produce some BUGs (unexpected, wrong behavior)

// The only time when you do not have to put any arguments, when call a function
// is when this function has defined "default" parameters:

function giveFavouriteNumber(no = 77) {
	return no;
}

console.log(giveFavouriteNumber())
console.log(giveFavouriteNumber(987))




// You cannot access to outer scope when your parameter name is the same as value from other scope:
// We will discuss scopes later, but in general you can have access to outer value like that:

const outer = 567;

function showOuter() {
	 console.log(outer);
}

showOuter()

// Code above is 100% fine, ad will work, as the inner scope of function showOuter, has access to outer scope.


// HERE IS an "SHADOWING" performed:
// A kind of operation where you want to access the outer scope and use some value from, but it is IMPOSSIBLE
// because your parameter name is the same as outer scope parameter:

function shadowedValue(outer) {
	console.log(outer);
}

shadowedValue(890);

// Code above will always show 890, or other value that you pass through argument to it.
// But from THE INSIDE of the shadowedValue scope, you will never be able to access "outer" from outer scope.
// Solution: either rename outer parameter, or pass outer from the outer scope as an argument.


