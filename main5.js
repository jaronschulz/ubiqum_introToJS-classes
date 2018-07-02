
console.log("Objects containing other objects");

// Let's remember our Product class

class Product {

	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	toString() {
		return this.name + " " + this.price + "€";
	}
}

// And create a couple of products
let p1 = new Product("vacuum cleaner", 100);
let p2 = new Product("pencil", 3);
let p3 = new Product("bike", 300);
let p4 = new Product("brush", 5);
let p5 = new Product("scooter", 3000);
let p6 = new Product("drink", 1);
let p7 = new Product("NASA pencil", 10);



// Now, let's create a ShoppingCart class, that will contain products

class ShoppingCart {

	constructor() {
		this.countedCart = {};
	}

	addProduct(product) {
		if (!this.countedCart[product.name]) {
			this.countedCart[product.name] = {};
			this.countedCart[product.name]["amount"] = 1;
			this.countedCart[product.name]["price"] = product.price;

		} else {
			this.countedCart[product.name]["amount"] += 1;
		}
	}

	replaceProduct(productName, replacementProduct) {
		for (const key in this.countedCart) {
			let numOfProd = this.countedCart[productName]["amount"];
			if (key == productName) {
				for (let i = 0; i < numOfProd; i++) {
					this.countedCart[productName]["amount"] -= 1;
					this.addProduct(replacementProduct);
				}
				break;
			} else {
				return console.log(`The product you want to replace is not in the basket.`);
			}

		}
	}

	// calculateDiscount() {

	// }

	// calculateFreebies() {

	// }

	displayCart() {
		let cartAsString = ''
		for (const key in this.countedCart) {
			this.countedCart[key]["amount"] > 1 ? cartAsString += `${this.countedCart[key]["amount"]} ${key}s, ` : cartAsString += `${this.countedCart[key]["amount"]} ${key}, `;
		}

		return cartAsString.slice(0, cartAsString.length-2);
	}

	toString() {
		return "cart with: " + this.displayCart();
	};

	totalPrice() {
		let numberOfCartItems = 0;
		let sum = 0;

		for (const key in this.countedCart) {
			numberOfCartItems += this.countedCart[key]["amount"]
			sum += this.countedCart[key]["price"] * this.countedCart[key]["amount"];
			const discountAmount = Math.floor(this.countedCart[key]["amount"] / 4);
			sum -= discountAmount * this.countedCart[key]["price"];
		};
		const discountGap = numberOfCartItems <= 0 ? 5 : 5 - numberOfCartItems;
		const endResult = numberOfCartItems < 5 && numberOfCartItems >= 0 ? `The total is: ${sum}; Buy ${discountGap} more Items to get a 10% Discount`: `including a 10% Discount the total is: ${sum - sum * 0.10}` ;

		console.log(endResult);

		return endResult;
	}
}


// We can create a cart and add the products we created before

let cart = new ShoppingCart();
// cart.addProduct(p1);
// cart.addProduct(p2);
// cart.addProduct(p3);
// cart.addProduct(p4);
// cart.addProduct(p5);
// cart.addProduct(p6);
cart.addProduct(p5);
cart.addProduct(p5);
cart.addProduct(p5);
cart.addProduct(p5);
cart.addProduct(p5);

cart.replaceProduct('scooter', p7);
cart.totalPrice();

console.log("We have a " + cart);


