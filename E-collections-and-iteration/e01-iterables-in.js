/**
 * Iterable collections - these are constructions on which you can iterate with loops.
 *
 * For example, the simplest JavaScript iterable collection is just a string
 * */

const movie = 'Ender \' s Game ';

for (let x = 0; x < movie.length; x ++) {
	console.log(movie[x])
}

/**
 * In ES6 we get a more convenient loop for computing any iterable collection
 * for...of
 * */

for (const letter of 'Fight Club') {
	console.log(letter)
}

// # 1 Task:
// Prove that for...of loop can also be used for Arrays
