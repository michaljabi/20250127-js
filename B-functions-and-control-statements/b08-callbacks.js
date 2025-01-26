/**
* A callback is a function that will be passed and called by another.
*
* If we didn't define the logic that would trigger the callback
* - we are not sure when it will happen (unless we know the documentation).
*
* The simplest example of using a callback is clicking on the button.
*
* You do not know when the user will do it, but you use the so-called listener,
* to whom you pass the callback "click" - then after clicking, your logic will be executed.
*
* */

function onClick() {
	console.log('Button clicked')
}

function listenToTheClick(fireLogic) {
	fireLogic();
}

listenToTheClick(onClick);


// Let's see it in another example:
function dialNumber(phoneNumber, conversation) {
	console.log('Calling number', phoneNumber)
	conversation()
	console.log('connection interrupted...')
}

function onCallConversation() {
	console.log('Hello, can I order a pizza?')
	console.log('Yes...')
	console.log('Just not hawaiian please!')
}

// Example of use:
// Note that we are not calling the function, - we are just passing function declaration name!!!
dialNumber(123456789, onCallConversation)
