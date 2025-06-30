function MinLength(length: number) {
  //property decorator function
  return (target: any, propertyName: string) => {
    let value: string;

    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },

      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(`${propertyName} should be at least ${length} long`);
        value = newValue;
      },
    };

    Object.defineProperty(target, propertyName, descriptor);
  };
}

class UserInSystem {
  @MinLength(5)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let userInSystem = new UserInSystem("1234");
console.log(userInSystem.password);
