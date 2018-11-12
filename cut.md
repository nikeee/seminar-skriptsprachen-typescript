```JavaScript
function getLength(name) {
	return name.length; // return length of string name
}

let len = getLength("Albert");
```

???
- Stellt Euch vor, ihr arbeitet nicht alleine an dem Code

---
```JavaScript
function getLength(name) {
	return name.length; // return length of string name
}

let len = getLength("Albert");
// ...
let someName = getName(); // getName ist an anderer Stelle definiert
len = getLength(someName);
```

---
```JavaScript
function getLength(name) {
	return name.length; // return length of string name
}

let len = getLength("Albert");
// ...
let someName = getName();
len = getLength(someName);
// Wenn someName null ist:
len = getLength(null);
```

---
```JavaScript
function getLength(name) {
	if(name === null) {
		return 0;
	}
	return name.length; // return length of string name
}

let len = getLength("Albert");
// ...
len = getLength(null); // :)
```

---
```JavaScript
function getLength(name) {
	if(name === null) {
		return 0;
	}
	return name.length; // return length of string name
}

let len = getLength("Albert");
len = getLength(null); // :)
// ...
len = getLength(1);
```

---
```JavaScript
function getLength(name) {
	if(name === null) {
		return 0;
	}
	if (typeof name === "number") {
		return name.toString().length;
	}
	return name.length; // return length of string name
}

let len = getLength("Albert");
len = getLength(null); // :)
// ...
len = getLength(1); // :)
```

---
```JavaScript
function getLength(name) {
	if(name === null) {
		return 0;
	}
	if (typeof name === "number") {
		return name.toString().length;
	}
	return name.length; // return length of string name
}

let len = getLength("Albert");
len = getLength(null); // :)
len = getLength(1); // :)
// ...
len = getLength(undefined);
len = getLength();
```

---
```JavaScript
function getLength(name) {
	if(name === null || name === undefined) {
		return 0;
	}
	if (typeof name === "number") {
		return name.toString().length;
	}
	return name.length; // return length of string name
}

let len = getLength("Albert");
len = getLength(null); // :)
len = getLength(1); // :)
// ...
len = getLength(undefined); // :)
len = getLength(); // :)
```
