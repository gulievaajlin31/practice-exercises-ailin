import { Person, Student, Teacher } from './index.js';

const person = new Person("Bakai", 45);
const student = new Student("Aida", 20, "SE-101");
const teacher = new Teacher("Azamat", 35, "JavaScript & OOP");

console.log("--- School Directory ---");
person.introduce();  // Output: Hi, I'm Bakai, 45 years old.
student.introduce(); // Output: Hi, I'm Aida, I study in group SE-101.
teacher.introduce(); // Output: Hi, I'm Azamat, I teach JavaScript & OOP.