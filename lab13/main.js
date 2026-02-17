// ===== Базовий об'єкт Person (спільні властивості) =====
function Person(name) {
    this.name = name;
}

// Спільний метод для всіх людей
Person.prototype.getName = function () {
    return this.name;
};


// ===== Course =====
function Course(title) {
    this.title = title;
    this.students = [];
}

// Метод додавання студента
Course.prototype.addStudent = function (student) {
    this.students.push(student);
};

// Перегляд студентів
Course.prototype.showStudents = function () {
    console.log(`Студенти курсу "${this.title}":`);
    this.students.forEach(s => console.log("- " + s.getName()));
};


// ===== Teacher =====
function Teacher(name) {
    Person.call(this, name); // наслідуємо name
    this.courses = [];
}

// Наслідування від Person
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

// Додати курс викладачу
Teacher.prototype.addCourse = function (course) {
    this.courses.push(course);
};

// Перегляд курсів
Teacher.prototype.showCourses = function () {
    console.log(`Курси викладача ${this.name}:`);
    this.courses.forEach(c => console.log("- " + c.title));
};


// ===== Student =====
function Student(name) {
    Person.call(this, name);
    this.courses = [];
}

// Наслідування від Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Запис на курс
Student.prototype.enroll = function (course) {
    this.courses.push(course);
    course.addStudent(this);
};

// Перегляд курсів студента
Student.prototype.showCourses = function () {
    console.log(`Курси студента ${this.name}:`);
    this.courses.forEach(c => console.log("- " + c.title));
};


// ===== ТЕСТУВАННЯ =====

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

// Запис студентів
s1.enroll(jsCourse);
s2.enroll(jsCourse);
s2.enroll(webCourse);


// ===== Демонстрація роботи =====
teacher.showCourses();
console.log("---------------");

s1.showCourses();
s2.showCourses();
console.log("---------------");

jsCourse.showStudents();
webCourse.showStudents();
