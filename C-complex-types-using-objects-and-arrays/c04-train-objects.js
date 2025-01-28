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

// const grossPrice = shoppingCartItem.price * shoppingCartItem.tax;
const grossPrice = countGrossPrice(shoppingCartItem);
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

// const grossPrice2 = shoppingCartItem2.price * shoppingCartItem2.tax;
const grossPrice2 = countGrossPrice(shoppingCartItem2);
console.log(grossPrice2);

function countGrossPrice(item) {
	return item.price * item.tax;
}

// const cartTotalPrice = grossPrice + grossPrice2;
const cartTotalPrice = countGrossPrice(shoppingCartItem) + countGrossPrice(shoppingCartItem2);
console.log(cartTotalPrice);

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


const shoppingCart = [
	{
		name: 'Komputer',
		price: 2000,
		tax: 1.23
	},
	{
		name: 'Smatphone',
		price: 3000,
		tax: 1.23
	}
]

console.log(shoppingCart[0])
console.log(shoppingCart[1])

function totalGrossPriceOfAllItems(arrayOfItem) {
	let grossPrice = 0;
	for(const item of arrayOfItem) {
		grossPrice += item.price * item.tax;
	}
	return grossPrice;
}

console.log(totalGrossPriceOfAllItems(shoppingCart))