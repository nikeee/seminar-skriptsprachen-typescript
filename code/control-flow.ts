function foo(i: number) { // Rückgabetyp geschlussfolgert durch returns: number | string
	if (i % 2 === 0) { return 1; }
	else { return "odd"; }
}

let bar = foo(2); // bar hat Typ: number | string
if (typeof bar === "number") {
	// bar hat Typ: number
	console.log(bar * 2); // Multiplikation zulässig, da number
	console.log("Länge: " + bar.length); // Compilerfehler, bar.length ist unmöglich
} else {
	// bar hat Typ: string (number wurde explizit ausgeschlossen)
	console.log("Länge: " + bar.length); // .length zulässig, da string
}

let baz = bar as string; // Type Assertion zu string
console.log(baz.length); // baz ist string, kann aber zur Laufzeit Fehler verursachen
