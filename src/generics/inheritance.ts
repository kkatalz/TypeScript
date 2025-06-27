interface ProductInheritance {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // keyof works the next way: If T is Product, then keyof T => "name" | "price".
  // Any other properties will be unavailable during COMPLIE time
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let storeKeyof = new Store<ProductInheritance>();
storeKeyof.add({ name: "a", price: 1 });
console.log(storeKeyof.find("name", "a"));

console.log(storeKeyof.find("price", 1));
// console.log(storeKeyof.find("nonExisting", 1));  // catch error on compile time by using KEYOF

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let store = new CompressibleStore<ProductInheritance>();
store.compress();

// Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  findByName(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// Fix the generic type parameter
class ProductStore extends Store<ProductInheritance> {
  filterByCategory(_category: string): ProductInheritance[] {
    return [];
  }
}
