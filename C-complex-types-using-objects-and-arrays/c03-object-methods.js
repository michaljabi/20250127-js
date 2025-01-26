/**
* Unlike other high-level languages,
* despite its objectivity, JS does not need class
*
* Here when assigned to a variable or simply typed
* in the code of the so-called "Object Literal" {}
*
* A memory space and a new object instance are created
*
* Object can be dynamically extended with new fields, so-called properties.
* */

// Another example of a JS object:
// Once declared and assigned, it is ready to use!
const cat = {
	whiskers: 'long',
	eyes: 2,
	voice() {
		return 'Mrauuu';
	},
	alwaysLandsOn4Feet: true
};

// #1 Task:
// Show the voice method output on the console




// More examples:

// Initially, the user only has a "name" field
const myUser = {
	name: 'Jenny'
};

// Then the "lastName" field is dynamically added with the value:
myUser.lastName = 'Kowalsky'

// reminder:
// There is a notation that allows the object property to be accessed in a way just like a collection
// In this case, we can "dynamically" access the field in the object
// e.g.
console.log(myUser['name'])

// #2 Task:
// Assign a new object to a constant - check and prove that:
// a) You cannot have several fields with the same name in an object
// b) If such a situation occurs then "the value of the last field wins"



// Except dynamic saving, you can "get" to all fields of the object - thanks to the for ... in loop
for(let key in myUser) {
	console.log(key);
}


// Note that objects can be nested:
const tree = {
	branch: {
		leaf: 'green',
		isRoot: false
	}
}

console.log(tree.branch.leaf)

// # 3 Task:
// Show the isRoot value in the tree object on the console:


/**
* Unlike primitives.
*
* Objects are not passed by value, but by reference.
* In other words - creating one object and assigning it to a variable / constant.
* If we assign another variable / constant and compared to the previous one,
* we will NOT create an independent copy of the object (clone) - but only 2 references leading to the same place in the memory.
* */

const house = {
	name: 'MyHome'
}
console.log(house);

const otherHouse = house;
console.log(otherHouse);

// however, it's actually the same object:
console.log(house === otherHouse);
// but two pointing to the same place in memory references
// proof:
otherHouse.name = 'CHANGED NAME of my home 🏢'

console.log(house);
