import React from 'react'

export class Person {
  constructor(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
  }
}

export class Parent extends Person {
  constructor(firstName, lastName, gender, employment, disability ) {
    super(firstName, lastName, gender);
    this.employment = employment;
    this.disability = disability;
  }
}

export class Child extends Person {
  constructor(firstName, lastName, gender) {
    super(firstName, lastName, gender)
  }
}