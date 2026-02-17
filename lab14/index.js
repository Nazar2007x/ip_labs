import { Course } from "./models/Course.js";
import { Teacher } from "./models/Teacher.js";
import { Student } from "./models/Student.js";

// Курси
const jsCourse = new Course("JavaScript");
const webCourse = new Course("Web Programming");

// Викладач
const teacher = new Teacher("Іван Петренко");
teacher.addCourse(jsCourse);
teacher.addCourse(webCourse);

// Студенти
const s1 = new Student("Олена");
const s2 = new Student("Андрій");

// Запис на курси
s1.enroll(jsCourse);
s2.enroll(jsCourse);
s2.enroll(webCourse);


// ===== Демонстрація =====
teacher.showCourses();

console.log("---------------");

s1.showCourses();
s2.showCourses();

console.log("---------------");

jsCourse.showStudents();
webCourse.showStudents();
