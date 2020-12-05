import Information from "./Information.js";
import Student from "./Students.js";
import Teacher from "./Teachers.js";
import ClassName from "./ClassName.js";

export default class ClassManager {
  name;
  teacher;
  students;
  constructor(name) {
    this.name = name;
    this.students = [];
  }

  addTeacher(teacher) {
    if (teacher instanceof Teacher) {
      this.teacher = teacher;
    }
  }

  showTeacher(){
    console.log(this.teacher);
  }

  addStudent(student) {
    if (student instanceof Student) {
      this.students.push(student);
    } else console.log("Day khong la student");
  }

  deleteStudentByCode(code) {
    for(let i = 0; i < this.students.length; i++){
      if(this.students[i].code === code){
        this.students.splice(i, 1);
      }
    }
    this.showStudentList();
  }

  showStudentList() {
    console.log("Những học sinh trong lớp học là: ",this.students);
  }

  changeStudentInformation(code, name, age, schoolYear) {
    for(let student of this.students){
      if(student.code === code){
        student.name = name;
        student.age = age;
        student.schoolYear = schoolYear;
      }
    }
    this.showStudentList();
  }

  findStudentByCode(codeStudent) {
    let FoundStudent = () => {
      return this.people.filter((Student) => Student.code == codeStudent);
    };
    if (FoundStudent == null) {
      FoundStudent = "Không tìm thấy học sinh này";
    }
  }

  findStudentByName(name) {
    let StudentList = [];
    for (let student of this.students) {
      if (student.name === name) {
        StudentList.push(student);
      }
    }
    console.log("Những học sinh tên",name,"là",StudentList);
  }
}

let DongDa = new ClassManager("DongDa");
let Teacher1 = new Teacher("0110", "Minh", 35, "Tiến Sĩ");
let Person1 = new Student("0111", "Quang", 18, "2020");
let Person2 = new Student("0010", "Jake", 18, "2020");
let Person3 = new Student("0210", "Mike", 18, "2020");
let Person4 = new Student("1021", "Giang", 18, "2020");

DongDa.addTeacher(Teacher1);
DongDa.addStudent(Person1);
DongDa.addStudent(Person2);
DongDa.addStudent(Person3);
DongDa.addStudent(Person4);
DongDa.showStudentList();
DongDa.showTeacher();
DongDa.changeStudentInformation("0110", ":V bủh", 20, "2020");
DongDa.findStudentByName('Quang');