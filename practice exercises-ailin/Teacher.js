import { Person } from './Person.js';

export class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, I teach ${this.subject}.`);
    }
}