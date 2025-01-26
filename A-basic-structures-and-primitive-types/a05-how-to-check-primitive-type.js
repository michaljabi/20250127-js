/**
* There is an operator: typeof
 *
 * It is used to check what primitive type is value of.
 * Using this operator on variable will cause to return of a string, with a name in it.
 *
 * But value can be non-primitive?! What then?
 * Well, then you have 2 options:
 *  - it is a method or function, and you will have: 'function' result
 *  - it is other object, and you will have: 'object' result
 *
* */


// List of all primitive types in JS 2022 (ES13):
// There are 7 of them
let myUndefined;
const mySecretVar = 'my sample';
const mySecretVar2 = true;
const mySecretVar3 = 123;
const mySecretVar4 = 123n;
const mySecretVar5 = Symbol();
const mySecretVar6 = null;

console.log(typeof mySecretVar) // string
console.log(typeof mySecretVar2) // boolean
console.log(typeof mySecretVar3) // number
console.log(typeof mySecretVar4) // bigint
console.log(typeof mySecretVar5) // Symbol
console.log(typeof myUndefined) // undefined

// A special simple type that cannot be previewed with the "typeof" operator
console.log(typeof mySecretVar6) // null - NOTE to typeof in this case it shows "object"

// null in this case (as object) is obviously a mistake - bug. Which, due to backward compatibility, stayed in JS.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null


// more about primitives and data structures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures


// Simple types - are passed by values, not by references.
// Which in practice means that they cannot be "mutated" as in the case of objects - which are passed by references.

// All other types are object types, and cannot be specified exactly with the "typeof" operator:

console.log(typeof {})
console.log(typeof [])
console.log(typeof new Date())
console.log(typeof new RegExp('\d', 'g'))


// Addition:
// typeof can only help us with functions (which are in fact a special objects in JS):
console.log(typeof function(){} ) // function

