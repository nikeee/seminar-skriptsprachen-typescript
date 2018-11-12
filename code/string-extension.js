String.prototype.greet = function () { // Erweiterung des String-Prototyps
	return "Hello " + this;
};
let world = "World"; // Erstellen eines String-Objektes mit verädertem Prototyp
console.log(world.greet()); // Ausgabe: Hello World
