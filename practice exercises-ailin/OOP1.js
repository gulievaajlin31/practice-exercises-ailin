class Student {
    constructor(firstName, lastName, group) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
    }

    greet() {
        console.log(`Hi, I'm ${this.firstName} from ${this.group}`);
    }
}

const student1 = new Student("Aida", "Uulu", "SE-101");
const student2 = new Student("Nurlan", "Bekov", "SE-102");

student1.greet(); // Output: Hi, I'm Aida from SE-101
student2.greet(); // Output: Hi, I'm Nurlan from SE-102