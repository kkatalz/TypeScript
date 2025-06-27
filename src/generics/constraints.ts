class PersonGeneric {
  constructor(public name: string) {}
}

class CustomerGeneric extends PersonGeneric {}

function echo<T extends CustomerGeneric>(value: T): T {
  return value;
}

console.log(echo(new PersonGeneric("a")));
console.log(echo(new CustomerGeneric("a")));
