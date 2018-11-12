function findBook(title: string | null | undefined) {
	if(title == null || title === undefined) {
		return null;
	}
	let result: Book | null = null;
	// Buch wird gesucht und -- wenn es gefunden wird -- "result" zugewiesen
	return result;
}

let foundBook = findBook("Applied Cryptography");
console.log(foundBook.name); // Fehler, foundBook könnte null sein
if (foundBook != null) {
	console.log(foundBook.name); // Okay, foundBook ist garantiert nicht null
}
