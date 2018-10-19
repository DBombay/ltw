// This file *defines* the classes for each Person-type

import React from 'react'

// Person base class contains the basic elements for the engine to add family members
export class Person {
  constructor(ageGroup, firstName, lastName, gender, insured = false) {
    this.ageGroup = ageGroup; //string value, should ALWAYS be set to the classname
    this.firstName = firstName; //string value, generated by Faker
    this.lastName = lastName; //string value, generated by Faker and shared for a family
    this.gender = gender; //string, determines pronouns for stories
    this.insured = insured; //boolean value, affects and affected by events
  }
}

//The Adult class will typically be the primary member added to a family. This class represents individuals between
// 18 and 64 years old.
export class Adult extends Person {
  constructor(ageGroup, firstName, lastName, gender, insured = false, employment = false, disabled = false, hasChild = false) {
    super(ageGroup, firstName, lastName, gender, insured);
    this.employment = employment; //boolean value, affects and affected by events
    this.disabled = disabled; //boolean value, affects events
    this.hasChild = hasChild; //boolean value, affects events
  }
}

// The Child class generates after a family has at least 1 Adult present. This class represents individuals under 18 years old.
// Fires child-specific events.
export class Child extends Person {
  constructor(ageGroup, firstName, lastName, gender, insured = false) {
    super(ageGroup, firstName, lastName, gender, insured)
  }
}

// The Senior class can also be the primary member added to a family. This class represents individuals 65 and over.
// Fires Senior-specific events.
export class Senior extends Person {
  constructor(ageGroup, firstName, lastName, gender, insured = false, disabled = false) {
    super(ageGroup, firstName, lastName, gender, insured);
    this.disabled = disabled; //boolean value, affects events
  }
}