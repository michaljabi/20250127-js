// In the case of complex data structures, we always get the answer from "typeof": "object"
// We won't learn much by trying to check these structures with the typeof operator
// Conclusions:
// 1. The typeof operator is only suitable for checking simple types
// 2. due to the error: `typeof null` - we can't rely on what" typeof "returns if the tested value is null




// Additional info:
// To check a complex type, we need to know the constructor (the class) we are looking for and use the instanceof operator
console.log({} instanceof Array);

console.log([] instanceof Array);
console.log({} instanceof Object);
console.log(new Date() instanceof Date);
