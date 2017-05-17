function Telefon(marka, cena, kolor, rozdz) { 
	 this.marka = marka; 
	 this.cena = cena; 
	 this.kolor = kolor;
	 this.rozdz = rozdz;
}

Telefon.prototype.printInfo = function() { 
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + "."); 
}

Telefon.prototype.printRozdz = function() { 
	console.log("Rozdzielczość ekranu telefonu " + this.marka + " to " + this.rozdz + "."); 
}


var iPhone6S = new Telefon("Apple", 2250, "srebrny", "7\"");
var galaxy = new Telefon("Samsung", 1250, "złoty", "9\"");
var onePlus = new Telefon("OnePlus One", 250, "biały", "8\"");

iPhone6S.printInfo();
galaxy.printInfo();
onePlus.printInfo();

iPhone6S.printRozdz();
galaxy.printRozdz();
onePlus.printRozdz();


