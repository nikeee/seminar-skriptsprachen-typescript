interface Book { title: string; }
// ...
interface Book { pages: number; } // Erweiterung des "Book"-Interfaces

let bar: Book = { pages: 13 }; // Fehler, "title" fehlt

let foo: Book = {
	title: "Per Anhalter durch die Galaxis",
	pages: 42
}; // Okay, "foo" deklariert alle benötigten Eigenschaften

interface Comic { title: string; pages: number; }

let baz: Comic = foo; // Gültig, da Struktur von "Comic" und "Book" identisch
