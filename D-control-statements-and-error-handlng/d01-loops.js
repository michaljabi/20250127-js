/**
 * There are basically three types of loops in JavaScript:
 *
 * 1. while
 * 2. do - while
 * 3. for
 *
 * additionally, the for loop has several variants (for - of) (for - in)
 * they will be discussed in more detail when discussing arrays and iterable collections.
 * */

// while loop - rotates as long as the logical condition it checks - evaluates to: true
let flag = true;
while ( flag ) {
	console.log('Hello once')
	flag = false;
}

// the do-while loop works very similarly, but we are sure that the logic contained in its block - will be executed at least once
// in other words, "while" condition is only checked at the end of loop's rotation
do {
	console.log('Hello once again')
} while ( flag )

// The for loop works in a very similar way as in other programming languages
// It is the most flexible in terms of use
// has 3 parts separated by a semicolon;
//
// for ([setting initial values]; [condition]; [expression executed at the end of each loop rotation])
//

// most common use:
for(let x = 10; x <= 15; x++) {
	console.log('count up...', x);
}

for(let x = 3; x >= 0; x--) {
	console.log('count down...', x);
}

// loop that will never execute:
for(;false;) {
	  console.log('FOR NEVER !')
}

// for a change, changing the condition to a static entry: true - we get an infinite loop
