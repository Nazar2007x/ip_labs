import { Person } from "./Person.js";

export class Student extends Person {
    constructor(name) {
        super(name);
        this.courses = [];
    }

    enroll(course) {
        this.courses.push(course);
        course.addStudent(this);
    }

    showCourses() {
        console.log(`Курси студента ${this.name}:`);
        this.courses.forEach(c => console.log("- " + c.title));
    }
}
