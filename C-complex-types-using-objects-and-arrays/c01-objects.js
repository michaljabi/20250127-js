/**
* JavaScript has the so-called object literals.
* They allow you to create a given object -
* without the need to define plans of its structure like in other object-oriented languages - which use classes.
*/

// A simple example of an object:
const user = {
	name: 'Marek'
};

console.log(user);

// Access to property inside object:
console.log(user.name);

// assign the value of the object property to another variable / constant:
const theName = user.name;

console.log(theName);

// What will happen when property does not exist:
console.log(user.age);
console.log(user.age === undefined);

// But, JavaScript is also dynamic in case of objects
// We can define NEW object fields (properties):
user.lastName = 'Kowalsky'

console.log(user);
console.log(user.lastName);

// You can also modify existing property values:
user.name = 'Katie';

console.log(user);
console.log(user.name);
