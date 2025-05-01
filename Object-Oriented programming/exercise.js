
class Student{
    constructor (name, major, grades) {
         this.name = name;
         this.major = major;
         this.grades = grades;
    }

addGrade(grade) {
    this.grades.push(grade);

}
    gpa() {
        let averageGrade = 0;
        for (const grade of this.grades) {
            averageGrade += grade;

     }
     return averageGrade / this.grades.length;
    }

}

const eva = new Student("Eva", "Arts", [95, 75, 83])
console.log(eva);

eva.addGrade(89);

console.log(eva.gpa());


