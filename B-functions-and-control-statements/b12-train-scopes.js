/*
  _____         _      _              _             _         _               |___ \ 
 |_   _|_ _ ___| | __ | |_ ___    ___| |_ __ _ _ __| |_    __| | __ _ _   _    __) |  
   | |/ _` / __| |/ / | __/ _ \  / __| __/ _` | '__| __|  / _` |/ _` | | | |  / __/ 
   | | (_| \__ \   <  | || (_) | \__ \ || (_| | |  | |_  | (_| | (_| | |_| | |_____|  
  _|_|\__,_|___/_|\_\  \__\___/  |___/\__\__,_|_|   \__|  \__,_|\__,_|\__, |
                                                                      |___/                                                                                                                                             
*/

const helloWorld = "hello World!";


function h() {
    // console.log(helloWorld)
    // console.log(helloWorld.charAt(0))
    // console.log(helloWorld.length)
    // console.log(helloWorld.length - 1)
    // console.log(helloWorld.charAt(helloWorld.length -1))
    console.log(helloWorld.charAt(0) + helloWorld.charAt(helloWorld.length - 1))
}

h();

// # 1 Task:
// Prepare the function then call it
// Let it refer to the outer scope and use helloWorld to show to the screen
// first and last character of the string = 'h!'
// helping hand?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
console.log(helloWorld.length)
helloWorld.length = 100;
console.log(helloWorld.length)

