class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, group) {
        super(name, age); // Calls the parent constructor for name and age
        this.group = group; // Extra field specific to Student
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, I study in group ${this.group}.`);
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); // Calls the parent constructor for name and age
        this.subject = subject; // Extra field specific to Teacher
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, I teach ${this.subject}.`);
    }
}

const student = new Student("Aida", 20, "SE-101");
const teacher = new Teacher("Azamat", 35, "JavaScript & OOP");

student.introduce(); // Output: Hi, I'm Aida, I study in group SE-101.
teacher.introduce(); // Output: Hi, I'm Azamat, I teach JavaScript & OOP.