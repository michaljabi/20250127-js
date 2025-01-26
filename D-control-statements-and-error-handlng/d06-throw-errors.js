/**

	In general, we want to avoid any errors in our code.

  But there can be situations, when you want to make an error - intentionally!
  Those are situations where you want to avoid potential logic mistakes later in out code.

  Consider a simple action, you want to multiply number by 10;

 */

function multiplyBy10(num) {
	 return num * 10;
}

// Pretty simple right?

// So now, we want to multiply number by 10, and it works as expected:

console.log(multiplyBy10(5));

// But if we provide something that is not number, this will happen:
console.log(multiplyBy10('hello'))

// Obviously, we are mistaken - and we should not provide a string over there,
// But if you imagine that we do not know the so-called "implementation" of multiplyBy10
// - in other words: we do not know the code inside it.
// then, we can make that mistake - and even do not know about it unless we find that bug.

// That is why, sometimes it's handy to GUARD, against those situations, like that:

function multiplyBy20(num) {
	if(typeof num !== 'number') {
		throw new Error('You need to provide a number!');
	}
	return num * 20;
}

// You WILL NEED to comment line below - to se how try - catch works later in this example
console.log(multiplyBy20('hello'));

console.log('This console log, won\'t work');

// Now, we solved problem with a potential BUG, when someone provides argument other type then number,
// we will throw an error.

// But?! Wait... out program is not working anymore...
// Line :41 will never fire?!

// Yes, because we got a "runtime exception" that we plan to throw anytime, when something is not
// meeting our condition. Well, so what now?! we still want our program to WORK!

// There is a way!
// You need to introduce new try {} catch {} statement to your code, in place where you EXPECT something to throw:

// Look:

try {
	// Try to run this code:
	console.log(multiplyBy20('Woooh !'));
	// Code below will run ONLY if the above not throw an error:
	console.log('This console log, won\'t work');
} catch (e) {
	// In case we catch en error - the programmer can "resolve" it here, but our code go along
	console.log(e.message)
}

console.log('This code is working fine, see:', 300 + 45 + 67);


// The try - catch block, can catch errors, deep inside the code.
// that means, that if multiplyBy20 will call other function inside - and that function throw en error,
// we will still be able to catch it here on the "top" level call.

/*
 * WHERE TO PUT MY try ... catch block ?
 *
 * In place where you CALL a function that might throw en error,
 * you will wrap that place
 */

