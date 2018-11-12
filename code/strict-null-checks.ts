interface Person {
	firstName: string;
	lastName: string | null | undefined;
};

function getFullName(person: Person): string {
	// person.lastName ist optional und kann deshalb undefined sein.
	// wenn person.lastName "falsy" ist, ist es entweder null, undefined oder ""
	if (!person.lastName) {
		return person.firstName;
	}

	// person.lastName ist hier garantiert ein gültiger string -> Konkatenation gültig
	return person.firstName + person.lastName;
}
