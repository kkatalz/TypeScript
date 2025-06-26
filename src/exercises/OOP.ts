// Define a class called Logger that takes the name of a file in its constructor and provides a method
//  for writing messages to that file. Don’t worry about the actual file I/O operations. Just define the class with the right members.

class Logger {
  constructor(public logFile: string) {}

  log(message: string) {
    console.log(message);
  }
}

// Given the Person class below, create a getter for getting the full name of a person.
class MyPerson {
  constructor(public firstName: string, public lastName: string) {}

  get fullPersonName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Create a new class called Employee that extends Person and adds a new property called salary.
class Employee extends MyPerson {
  constructor(public salary: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}
