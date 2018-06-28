
console.log("Example with class");

// Instead of a function that creates a car,
// we define a class Car

// A class looks much cleaner, and has many other advantages.

class Car {

	// The constructor initializes the properties.
	// It gets called when we do: new Car(some_brand)
	constructor(brand, model) {
		this.brand = brand;
		this.model = model;
		this.speed = 0;
		this.movement = false;
	}

	// methods:

	// (notice that now we don't say "function" and that we
	//  don't put a comma after closing brace of the function)

	accelerate(amount) {
		this.speed += amount;
		this.movement = true;
	}

	brake(amount) {
		this.speed >= amount ? this.speed -= amount : console.log('speed cannot be less then Zero');
		const res = this.speed === 0 ? this.movement = false : console.log(`still driving ... ${this.speed}`);
		return res;
	}

	fullStop() {
		this.speed = 0;
		this.movement = false;
	}

	status() {
		const res =	this.movement ? `The ${this.brand} ${this.model} is running at ${this.speed} km/h` : `the car is not moving`;
		return res;
	}
}


// Now we use create a Car object using the class

var car = new Car("Ford", "Focus");

console.log(car.status());
car.accelerate(50);
console.log(car.status());
car.accelerate(100);
console.log(car.status());
car.brake(25);
console.log(car.status());


// We may create other cars easily

var car2 = new Car("Ferrari", "Testarossa");
car2.accelerate(200);
console.log(car2.status());


// TV Class with all kinds of good attributes

class TV {

	constructor(brand) {
		this.brand   = brand;
		this.channel = 1;
		this.volume  = 50;
	}

	changeVolume(amount) {
		const warningMessage = 'cant do that, volume would end up';
		if (Math.sign(amount) === 1 ) {
			const res = this.volume !== 0 && this.volume !== 100 ? this.volume += amount : console.log(`${warningMessage} too loud`);
		} else {
			const res = this.volume !== 0 && this.volume !== 100 ? this.volume += amount : console.log(`${warningMessage} muted`);
		}
		return res;
	}
	setChannel(number) {
		const warningMessage = 'cant do that,';
		const res = number < 0 || number > 50 ? console.log(`${warningMessage} you only have channels 1 - 50`): this.channel = number;
		return res;
	}

	reset() {
		this.channel = 1;
		this.volume  = 50;
	}

	status() {
		console.log(`The ${this.brand} is on Volume Level: ${this.volume} and Channel: ${this.channel}`);

	}

}

const SamsungTV = new TV('Samsung');