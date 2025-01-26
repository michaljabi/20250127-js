/**
 * Promises work well where callbacks are not a sufficient solution.
 *
 *
 * Promise includes 2 solution options:
 * - something succeeds, it will return the result
 * or
 * - something goes wrong - we will get an error
 *
 * In addition to simplifying the notation for handling this state,
 * we also get the so-called chaining:
 *  - the possibility of almost "linear" code write for subsequent calls of asynchronous operations
 *
 * First, let's divide our journey of learning about Promise into 2 parts.
 * We can distinguish:
 *
 * - 1. PROVIDER - a piece of code / function - creating a Promise and determining how to send data or an error.
 *
 * - 2. CONSUMER(s) - (! any) number of recipients of our Promise
 *
 * */


// PROVIDER
function giveMePromise(password) {
    const someData = { userName: 'admin' };
    // Here we create a new instance of promise
    // It's simply a constructor that takes a function expression as an argument to the constructor
    return new Promise((resolve, reject) => {
        // parameters of this function are 2 other functions: resolve and reject
        // thanks to the fact that these are functions - we can safely perform ANY operation here,
        // Based on it, we will determine whether everything is OK and call resolve()
        // Is there something wrong, and we will call reject();
        if(password === 's3cr3t k3y') {
            resolve(someData);
        } else {
            reject(new Error('Wrong password'))
        }
    })
}

// CONSUMER(s):

// To receive the promise we must do the following:
// CONSUMER 1:
giveMePromise('s3cr3t k3y')
    .then(data => {
        console.log('I got data', data)
    })


// However, above we only assume "Happy Path"
// What if there was an error?
// We should prepare for both cases:
// CONSUMER: 2:
giveMePromise('wrong')
    .then(data => {
        console.log('I got data', data)
    })
    .catch(err => {
        console.log('[!!!] Error happened:', err.message)
    })
