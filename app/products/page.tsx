import ProductMap  from "../ui/products/productMap";

const allProducts = [
  {
    id: 1,
    price: 100,
    name: "Shirt 1",
    description: "Shirt 1 description",
    image: "/img/dress-shirt.png",
  },
  {
    id: 2,
    price: 200,
    name: "Shirt 2",
    description: "Shirt 2 description",
    image: "/img/hip-shirt.png",
  },
  {
    id: 3,
    price: 300,
    name: "Shirt 3",
    description: "Shirt 3 description",
    image: "/img/pacman-shirt.png",
  },
  {
    id: 4,
    price: 400,
    name: "Shirt 4",
    description: "Shirt 4 description",
    image: "/img/white-t.png",
  },
  {
    id: 5,
    price: 100,
    name: "Jacket 1",
    description: "Jacket 1 description",
    image: "/img/bike-leather.png",
  },
  {
    id: 6,
    price: 200,
    name: "Jacket 2",
    description: "Jacket 2 description",
    image: "/img/jean-jacket.png",
  },
  {
    id: 7,
    price: 300,
    name: "Jacket 3",
    description: "Jacket 3 description",
    image: "/img/leather-jacket.png",
  },
  {
    id: 8,
    price: 400,
    name: "Jacket 4",
    description: "Jacket 4 description",
    image: "/img/winter-vest.png",
  },
  {
    id: 9,
    price: 100,
    name: "Hat 1",
    description: "Hat 1 description",
    image: "/img/black-hat.png",
  },
  {
    id: 10,
    price: 200,
    name: "Hat 2",
    description: "Hat 2 description",
    image: "/img/la-hat.png",
  },
  {
    id: 11,
    price: 300,
    name: "Hat 3",
    description: "Hat 3 description",
    image: "/img/sun-hat.png",
  },
  {
    id: 12,
    price: 400,
    name: "Hat 4",
    description: "Hat 4 description",
    image: "/img/nike-hat.png",
  },
  {
    id: 13,
    price: 500,
    name: "Hat 5",
    description: "Hat 5 description",
    image: "/img/fedora-straw.png",
  }
];


export default function Page() {
  return (
    <>
      <div>
        <h1>Products</h1>
        <ProductMap productArray={allProducts} />
      </div>
    </>
  );
}
