let book = { name: "Der Hobbit", pages: 42 };
let person = { name: "Eich", firstName: "Brendan" };

function getName(item) {
	return item.name;
}

console.log(book.name.length); // Zugriff über Eigenschaft-Syntax
console.log(person["name"].length); // Zugriff über Array-Syntax
console.log(getName(book).length);
console.log(getName(person).length);
