function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    //   descriptor.value = function () {  hardcoded message
    console.log("Before");
    original.call(this, ...args);
    // original.call(this, "Blue sky");  hardcoded message
    console.log("After");
  };
}

class PersonDecorator {
  @Log
  say(message: string) {
    console.log("Person says", message);
  }
}

let person = new PersonDecorator();
person.say("Hello");
