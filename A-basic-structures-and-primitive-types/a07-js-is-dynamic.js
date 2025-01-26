/**
 * Because JavaScript does not have the so-called strong typing (programmer attach type signature with a value)
 * allows us to do with variables "whatever we can think of"
 *
 * A bad idea (habit) will be:
 *  "dynamic change of variable type"
 *
 * With the "typeof" keyword, you can see what a primitive type variable is
 */

// first string:
let helloWorld = "Hello World";
console.log(
  "When you write your first program ever, is some programming language"
);
console.log('It is often called "', helloWorld, '"');
console.log("It is a combination of", helloWorld.split(" ").length, "words");
console.log(typeof helloWorld);

// then number:
helloWorld = 12333;
console.log("I like the number", helloWorld, "it is my favourite number");
console.log("did you know you can divide it by 3?, see:", helloWorld / 3);
console.log(typeof helloWorld);

// then boolean:
helloWorld = true;
console.log("I do not know if this is", helloWorld, "or", !helloWorld);
console.log(typeof helloWorld);

// then undefined:
helloWorld = undefined;
console.log("This variable is:", helloWorld);
console.log(typeof helloWorld);

// # 1 Task:
// Refactor - change the above entries to the correct code
// Without changing the so-called "logic" (way of work) (that is, all console.logs stay and should show up as before)
