function Vector(x, y) { // Konstruktor
	this.x = x; // Eigenschaften werden durch "this.foo = " definiert und zugewiesen
	this.y = y;
}
let first = new Vector(13, 37); // Neuen Vector erstellen

// Instanzfunktion für alle Vector-Prototyp-Instanzen hinzufügen
Vector.prototype.abs = function() {
	return Math.sqrt(this.x ** 2 + this.y ** 2);
}
let second = new Vector(23, 42);
// mult-Funktion wird **nur** dem Objekt "first" hinzugefügt
first.mult = function (f) { this.x *= f; this.y *= f; }
first.mult(2);
console.log("first.abs(): " + first.abs()); // Ausgabe: first.abs(): 78.434...

let third = { // Instanziierung mit Objekt-Notation
	x: 42,
	"y": 23, // Mit Anführungsstrichen
	abs() { return Math.sqrt(this.x ** 2 + this.y ** 2); }
};
console.log("third.abs(): " + third.abs()); // Ausgabe: third.abs(): 47.885...
