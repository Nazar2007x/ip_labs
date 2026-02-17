export class Course {
    constructor(title) {
        this.title = title;
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    showStudents() {
        console.log(`Студенти курсу "${this.title}":`);
        this.students.forEach(s => console.log("- " + s.name));
    }
}
