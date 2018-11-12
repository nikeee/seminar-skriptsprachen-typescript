let color = { // Instanziierung mit Objekt-Notation
	red: 255, green: 0, blue: 128,
	sum() {
		return this.red + this.green + this.blue;
	}
};

class Point2D { // Klassen-Syntax
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	abs() {
		return Math.sqrt(this.x ** 2 + this.y ** 2 );
	}
}

function Vector3D(x, y, z) { // function-Syntax
	this.x = x;
	this.y = y;
	this.z = z;
}
Vector3D.prototype.abs = function() {
	return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
}


let v = new Vector3D(13, 42, 37);
console.log("v.abs(): " + v.abs());

let p = new Point2D(100, 200);
console.log("p.abs(): " + p.abs());

String.prototype.greet = function () { // Erweiterung des String-Prototyps
	return "Hello " + this;
};
let world = "World"; // Erstellen eines String-Objektes mit verädertem Prototyp
console.log(world.greet()); // Ausgabe: Hello World
