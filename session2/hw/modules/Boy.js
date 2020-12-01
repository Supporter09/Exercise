import Person from "./Person.js";

export default class Boy extends Person {
  constructor(name, age, handsome) {
    super(name, age);
    this.handsome = handsome;
  }
}
