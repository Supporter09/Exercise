import Person from "./Person.js";

export default class Community {
  people;
  constructor() {
    this.people = [];
  }

  addPerson(person) {
    if (person instanceof Person) {
      this.people.push(person);
    }
  }

  addPersonF0(name, age, value) {
    let posX, posY;
    for (let person of this.people) {
      if (person.name === name && person.age === age) {
        person.value = value;
        posX = person.posX;
        posY = person.posY;
      }
    }
    findPersonF1(posX, posY);
  }

  findPersonF1(posX, posY) {
    let peopleF1 = [];
    for (let person of this.people) {
      if (person.value < 0) {
        if (
          Math.pow(Math.abs(posX - person.posX), 2) +
            Math.pow(Math.abs(posY - person.posY), 2) <
          4
        ) {
          person.value = 1;
          peopleF1.push(person);
        }
      }
    }
    findPersonF2(peopleF1);
  }

  findPersonF2(peopleF1) {
    for (let personF1 of peopleF1) {
      for(let person of this.people){
        if(person.value < 0){
          if (
            Math.pow(Math.abs(personF1.posX - person.posX), 2) + Math.pow(Math.abs(personF1.posY - person.posY), 2)<4
          ) {
            person.value = 2;
          }
        }
      }
    }
    findPersonF2();
  }

}
