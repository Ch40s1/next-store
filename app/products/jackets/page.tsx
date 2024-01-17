import ProductMap from "../../ui/products/productMap";

const jackets = [
  {
    id: 1,
    price: 100,
    name: "Jacket 1",
    description: "Jacket 1 description",
    image: "/img/bike-leather.png",
  },
  {
    id: 2,
    price: 200,
    name: "Jacket 2",
    description: "Jacket 2 description",
    image: "/img/jean-jacket.png",
  },
  {
    id: 3,
    price: 300,
    name: "Jacket 3",
    description: "Jacket 3 description",
    image: "/img/leather-jacket.png",
  },
  {
    id: 4,
    price: 400,
    name: "Jacket 4",
    description: "Jacket 4 description",
    image: "/img/winter-vest.png",
  },

];

export default function Page() {
  return (
    <>
      <div>
        <h1>Jackets</h1>
        <ProductMap productArray={jackets} />
      </div>
    </>
  );
}
