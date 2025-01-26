// Consider an Object:

const user = {
    name: 'Mike',
    lastName: 'Novak'
}

// If I want to access fields from the object, I need to type:

console.log(user.name);
console.log(user.lastName);

// That can be simplified, via so-called Object Destructuring:

const { name, lastName } = user;
// Now I am making 2 new consts: name and lastName based on values inside the Object

console.log(name);
console.log(lastName);


// Note: I'm making another scope here to not duplicate the Identifiers
{
    // this is a "shorthand" notation to make something like this:
    const name = user.name;
    const lastName = user.lastName;

    console.log(name);
    console.log(lastName);

}

// More:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://www.javascripttutorial.net/javascript-object-destructuring/
// https://www.javascripttutorial.net/es6/destructuring/
