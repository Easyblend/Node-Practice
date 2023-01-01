//Getting Serious with classes and OOP

class Person {
  constructor(height, complextion, age) {
    this.height = height;
    this.complextion = complextion;
    this.age = age;
  }

  animatePerson() {
    console.log(
      `Mark is ${this.height}cm tall and he is ${this.complextion} in complextion`
    );
  }

  //A static Method to check if two person instatiated from the Person class are the same
  static checkProperties(person_a, person_b) {
    return (
      person_a.height === person_b.height &&
      person_a.complextion === person_b.complextion &&
      person_a.age === person_b.age
    );
  }

  //Using setter to create a method
  // set person(height) {
  //   this.height = height;

  //   console.log(`New height is ${this.height}`);
  // }
}

const person_1 = new Person(182, "light skin", 21);
const persom_2 = new Person(182, "light skin", 21);

console.log(Person.checkProperties(persom_2, person_1));
