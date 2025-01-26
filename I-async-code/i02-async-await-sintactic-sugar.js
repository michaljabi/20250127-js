/**
 *
 * Promises can be written in more convenient and shorten way.
 * Let's see example from i01 writen with 2 keywords:
 *
 * async / await
 *
 * Here we do not need to use .then .catch etc. with callbacks
 * You use more "synchronous" way to write the code.
 *
 * i01 example but with async / await syntax:
 * */

// PROVIDER
async function giveMePromise(password) {
    const someData = { userName: 'admin' };
    if(password === 's3cr3t k3y') {
        return someData;
    }
    throw new Error('Wrong password')
}


// To receive the promise we must do the following:
// CONSUMER 1:
const data = await giveMePromise('s3cr3t k3y');
console.log('I got data', data)


// However, above we only assume "Happy Path"
// What if there was an error?
// We should prepare for both cases:
// CONSUMER: 2:
try {
    const data = await  giveMePromise('wrong');
    console.log('I got data', data)
} catch (err) {
    console.log('[!!!] Error happened:', err.message)
}



