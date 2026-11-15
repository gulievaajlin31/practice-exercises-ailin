import { Person } from './Person.js';

export class Student extends Person {
    constructor(name, age, group) {
        super(name, age);
        this.group = group;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, I study in group ${this.group}.`);
    }
}