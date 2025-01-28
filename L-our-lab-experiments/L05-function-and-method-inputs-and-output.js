const ADULT_AGE = 18;

// parameters are the INPUT of the function
function sayHello(name = '', age = 0) {

    // what you return here is the OUTPUT of the function
	return {
        message: 'Hello ' + name,
        age: age,
        isAdult: age >= ADULT_AGE,
    };
}

// how to call it?
sayHello()

// 1 here I can insert data to that function
sayHello('Michał', 55);

// 2 here I can insert data + collect the output:
const userMessage = sayHello('Kasia', 17);
console.log(userMessage);

console.log(userMessage.isAdult);
console.log(userMessage.message);
console.log(userMessage.age);

// console.log(sayHello())

// If the function is attached to object - it is called a METHOD:

const myObject = {
    // this is a method (function attached to object)
    sayHello(name = '') {
        console.log('Hello', name)
        return name;
    }
}

myObject.sayHello('Michał')

console.log(myObject.sayHello('Kasia'))