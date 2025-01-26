/**
* Of course, it is also possible to cast types explicitly.
*
* However, we should not try to use it "everywhere".
* It's best to learn the basic dependencies of implicit casting,
* and use explicit only where it will improve the code's readability or understanding.
*
* Using an explicit cast looks similar to calling
* functions, using a static built-in primitive type constructor
*
* e.g. String(500) -> "500"
* */


// Cast to string
console.log(String(12344))
console.log(String(true))

// Cast to boolean
console.log(Boolean(0))
console.log(Boolean(-1))
console.log(Boolean(1))

// Cast to number
console.log(Number('1233'))
console.log(Number(false))
console.log(Number(true))

// sometimes it makes sense to use built-in helper functions
console.log(parseFloat('1.222'))

// thanks to parseInt we can pass a binary number as a string and return it in the decimal system
// in this case the argument passed to the "radix" parameter determines the number system
console.log(parseInt('101', 2))

// below is the reverse situation, we are casting number to string in binary format
console.log((5).toString(2))

console.log(44..toString(2))


