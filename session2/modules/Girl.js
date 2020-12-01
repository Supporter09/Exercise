import Person from "./Person.js";
export default class Girl extends Person {
  constructor(name, age, beauty) {
    super(name, age);
    this.beauty = beauty;
  }
}
