
const fruits = ['cherry', 'apple', 'banana'];
const shopName = 'Fruit shop'

function greetings() {
	return 'welcome!'
}

/* #1 Task:
	Create a shop object
	which will have the fields: fruits name greetings
	they about to have the same values as the things declared above
*/
const shopObj = {
	fruits: fruits,
	shopName: shopName,
	greetings: greetings
}
console.log(shopObj);
// shorthand alternative to solve taks 1:

const shopShort = {
	fruits,
	shopName,
	greetings
}
console.log(shopShort);

const shop = {
	name_$222: shopName
}
console.log(shop)

const shop2 = {
	shopName: shopName
}
console.log(shop2);
// object property shorthand:
const shop3 = {
	shopName
}
console.log(shop2);

console.log({})

// #2 Task:
// show "banana welcome!" on the console using data from the object

console.log(shopShort.fruits[2] + " " + shopShort.greetings())

// #3 Task:
// create 2 concurrentShop object which will be a clone of the previous one (declare with the same values)
// additionally it will also have a banner method - which will return "here prices are the lowest!"

const concurrentShop = {
	fruits,
	shopName,
	greetings,
	banner() {
		return "here prices are the lowest!"
	}
}

console.log(concurrentShop)

// #4 Tasks:
// Show all field names of shop object on the console
console.log({})
console.log(new Object())

console.log({age: 1})
console.log(new Object({ age: 1}))

console.log(Object.keys({}))
console.log(Object.keys({age: 1}))
console.log(Object.keys(shopShort))
console.log(Object.keys(concurrentShop))

console.log(Object.values({ age: 12 }))
console.log(Object.keys({ age: 12 }))
console.log(Object.entries({ age: 18, name: 'John' }))

// export {};