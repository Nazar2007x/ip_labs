import { Person } from "./Person.js";

export class Teacher extends Person {
    constructor(name) {
        super(name);
        this.courses = [];
    }

    addCourse(course) {
        this.courses.push(course);
    }

    showCourses() {
        console.log(`Курси викладача ${this.name}:`);
        this.courses.forEach(c => console.log("- " + c.title));
    }
}
