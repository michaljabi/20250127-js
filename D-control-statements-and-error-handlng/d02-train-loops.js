/*                                                                  🚀
(_______)          | |         _                    _                    _         | |                (_____ \ 
    _  _____   ___ | |  _    _| |_  ___      ___  _| |_  _____   ____  _| |_     __| | _____  _   _    _____) )
   | |(____ | /___)| |_/ )  (_   _)/ _ \    /___)(_   _)(____ | / ___)(_   _)   / _  |(____ || | | |  (_____ ( 🚀
   | |/ ___ ||___ ||  _ (     | |_| |_| |  |___ |  | |_ / ___ || |      | |_   ( (_| |/ ___ || |_| |   _____) )
   |_|\_____|(___/ |_| \_)     \__)\___/   (___/    \__)\_____||_|       \__)   \____|\_____| \__  |  (______/ 
            🚀                                                                               (____/            
*/
// #1 Task
// Show numbers from 1 to 10 on the console, one below the other:
// 1
// 2
// 3
// 4
for (let x = 1; x <= 10; x++) {
    console.log(x)
}


// #2 Task
// Show a sequence of numbers 1 to 10 next to each other on the console:
// 1 2 3 4 5 6 7 8 9 10
let collector = '';
for (let x = 1; x <= 10; x++) {
    // collector = collector + x + ' ';
    collector += x + ' ';
}
console.log(collector.trim())