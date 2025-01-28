/*
  _____         _      _              _             _         _               |___ \ 
 |_   _|_ _ ___| | __ | |_ ___    ___| |_ __ _ _ __| |_    __| | __ _ _   _    __) |  
   | |/ _` / __| |/ / | __/ _ \  / __| __/ _` | '__| __|  / _` |/ _` | | | |  / __/ 
   | | (_| \__ \   <  | || (_) | \__ \ || (_| | |  | |_  | (_| | (_| | |_| | |_____|  
  _|_|\__,_|___/_|\_\  \__\___/  |___/\__\__,_|_|   \__|  \__,_|\__,_|\__, |
                                                                      |___/                                                                                                                                             
*/

const helloWorld = "hello World!";


function printFirstAndLast() {
    // console.log(helloWorld)
    // console.log(helloWorld.charAt(0))
    // console.log(helloWorld.length)
    // console.log(helloWorld.length - 1)
    // console.log(helloWorld.charAt(helloWorld.length -1))
    console.log(helloWorld.charAt(0) + helloWorld.charAt(helloWorld.length - 1))
    console.log(helloWorld[0] + helloWorld[helloWorld.length - 1])
    // solution 2 (error prone):
    console.log(helloWorld[0])
    console.log(helloWorld[helloWorld.length - 1])
    // because of this:
    console.log(helloWorld.charAt(100))
    console.log(helloWorld[100])

    // solution 3 (also error prone 😢):
    console.log(helloWorld.at(0) + helloWorld.at(-1))

    // solution 4 (another cool solution):
    console.log(helloWorld.charAt(0) + helloWorld.slice(-1))
}

printFirstAndLast();

// # 1 Task:
// Prepare the function then call it
// Let it refer to the outer scope and use helloWorld to show to the screen
// first and last character of the string = 'h!'
// helping hand?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
console.log(helloWorld.length)
helloWorld.length = 100;
console.log(helloWorld.length)

