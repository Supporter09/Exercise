import Information from "./Information.js";

export default class Teacher extends Information{
  age;
  degree;
  constructor(code, name, age, degree) {
      super(code, name);
      this.age = age;
      this.degree = degree;
  }
}
