// #1 Task:
// Write a function that will display the following text on the screen: 'Hello Stranger'
// called without an argument
// when called with the argument 'Michael' will display the text: 'Hello Michael'
// Consider the correct names for the function and its parameter
function sayHello(name = 'Stranger') {
    // console.log('Hello', name)
    console.log('Hello ' + name)
}

sayHello()
sayHello('Michael')