class Course {
    constructor(title, hours) {
        this.title = title;
        this.hours = hours;
    }

    describe() {
        console.log(`${this.title} – ${this.hours} hours`);
    }

    isLong() {
        return this.hours >= 60;
    }
}

const course1 = new Course("Advanced JavaScript", 80);
const course2 = new Course("Introduction to HTML", 15);

course1.describe();                             // Output: Advanced JavaScript – 80 hours
console.log("Is course1 long?", course1.isLong()); // Output: true

course2.describe();                             // Output: Introduction to HTML – 15 hours
console.log("Is course2 long?", course2.isLong()); // Output: false