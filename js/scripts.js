var iPhone6S,
	galaxy,
	onePlus;

function Phone(brand, price, color, screen) { 
	 this.brand = brand; 
	 this.price = price; 
	 this.color = color;
	 this.screen = screen;
}

Phone.prototype.printInfo = function() { 
	console.log("The phone brand is " + this.brand + ", the color is " + this.color + ", and price is " + this.price + "."); 
}

Phone.prototype.printScreen = function() { 
	console.log("The " + this.brand + " phone screen size is " + this.screen + "."); 
}

iPhone6S = new Phone("Apple", 2250, "silver", "7\"");
galaxy = new Phone("Samsung", 1250, "gold", "9\"");
onePlus = new Phone("OnePlus One", 250, "white", "8\"");

iPhone6S.printInfo();
galaxy.printInfo();
onePlus.printInfo();

iPhone6S.printScreen();
galaxy.printScreen();
onePlus.printScreen();


