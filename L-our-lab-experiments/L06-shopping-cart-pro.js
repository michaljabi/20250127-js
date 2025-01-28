function makeProduct(name = '', price = 0, tax = 1.23) {
    return {
        name: name, 
        price, // if the name of the property is same as name of the identifier that already exist... 
        tax // ... then you can use shorten syntax
    }
}

// how empty product looks like:
console.log(makeProduct());

const shoppingCart = [ makeProduct('Computer', 2000), makeProduct('Smartphone', 3000) ];

// how many products?
console.log(shoppingCart.length);
console.log(shoppingCart);

// Use Functional Programming approach:

// map products to gross prices:
const grossPrices = shoppingCart.map(p => p.price * p.tax);
console.log(grossPrices);

// sum all gross prices from the array into one
const totalGrossPrice = grossPrices.reduce((acc, value) => acc + value, 0);
console.log(totalGrossPrice);



class ShoppingCart {

    items = [];

    constructor() {}

    addItem(name = '', price = 0, tax = 1.23) {
        this.items.push({name, price, tax});
    }
}