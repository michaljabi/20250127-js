class User {
    name = '';
    constructor(name) {
        this.name = name
    }
}

// this is called instance of the User class
// this is an object
const myUser = new User('Marek');

console.log(myUser);
console.log(myUser.name);

console.log(myUser.constructor.name);

// in JS:
const myUser2 = {
    name: 'Marek'
}

// this is called instance of the Object class
// this is an object
console.log(myUser2);
console.log(myUser2.name);

console.log(myUser2.constructor.name);