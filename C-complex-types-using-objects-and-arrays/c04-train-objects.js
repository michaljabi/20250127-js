/* # 1 Task:
Define and assign a shoppingCartItem object with the fields:
	name (type: string)
price (type: number)
tax (type: number)

come up with sample values yourself
*/
const shoppingCartItem = {
	name: 'Komputer',
	price: 2000,
	tax: 1.23
}

const grossPrice = shoppingCartItem.price * shoppingCartItem.tax;
console.log(grossPrice);

/* # 2 Task:
Define and assign a shoppingCartItem2 object with the fields:
	name (type: string)
price (type: number)
tax (type: number)

come up with sample values yourself

Show in console.log the sums of prices (price) and taxes (tax) of both products as the value of the basket
*/

const shoppingCartItem2 = {
	name: 'Smatphone',
	price: 3000,
	tax: 1.23
}

const grossPrice2 = shoppingCartItem2.price * shoppingCartItem2.tax;
console.log(grossPrice2);

const cartTotalPrice = grossPrice + grossPrice2;
console.log(grossPrice + grossPrice2);

// # 3 Show that initializing two new empty objects after comparing === will give us false.
// Even when they got the same properties and values (!!!)
// Explain why this is happening?

const obj1 = {};
const obj2 = {};

console.log(obj1 === obj2)

// methematical solution to write it in one line;
console.log({} === {});

// another:
const isEqual = {} === {};
console.log(isEqual)
