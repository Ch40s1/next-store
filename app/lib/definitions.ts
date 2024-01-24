export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  username: string;
  email: string;
  items: string[];
};
export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};
