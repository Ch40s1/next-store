import ProductMap from "../../ui/products/productMap";

const shirts = [
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

];

export default function Page() {
  return (
    <>
      <div>
        <h1>Shirts</h1>
        <ProductMap productArray={shirts} />
      </div>
    </>
  );
}
