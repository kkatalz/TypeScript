// Create a decorator for adding a sauce to Pizza instances:
function Sauce(sauce: string) {
  return (constructor: Function) => {
    console.log("Sauce decorator called", constructor);
    constructor.prototype.sauce = sauce;
  };
}

@Sauce("pesto")
class Pizza {}

let pizza = new Pizza() as any;
console.log(pizza.sauce);
