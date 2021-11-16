var person = {
	name : "Van"
};
var anotherPerson = Object.create(person, {
	name : {
		value : "Louis"
	}
});
person.name = 'ddd';
console.log(anotherPerson.name);//"Louis"
