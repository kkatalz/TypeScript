interface ProductMapping {
  name: string;
  price: number;
}

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

let product: ReadOnly<ProductMapping> = {
  name: "a",
  price: 1,
};
