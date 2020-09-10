// living, non-living

var Living = function () {};
Living.prototype.alive = true;

// Humans, animals,...etc

var Person = function (firstname, lastname) {
	Living.call(this);
	this.firstname = firstname;
	this.lastname = lastname;
};

Person.prototype = Object.create(Living.prototype);
Person.constructor = Person;

Person.prototype.fullname = function () {
	return `${this.firstname} ${this.lastname}`;
};

// Teachers, Students, Athletes......

var Teacher = function (firstname, lastname, subject) {
	Person.call(this, firstname, lastname);
	this.subject = subject;
};

Teacher.prototype = Object.create(Person.prototype);
Teacher.constructor = Teacher;

Teacher.prototype.profession = "Teacher";

let teacherObj1 = new Teacher("Nik", "Sharma", "CS");
console.log(teacherObj1.firstname, teacherObj1.alive);