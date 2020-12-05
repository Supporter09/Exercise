import Information from "./Information.js";

export default class Student extends Information {
  age;
  schoolYear;
  constructor(code, name, age, schoolYear) {
    super(code, name);
    this.age = age;
    this.schoolYear = schoolYear;
  }
}
