import Cards from "./ui/home/cards";

const categories = [
  {
    id: 1,
    name: "Shirts",
    image: "bg-shirt-image",
    link: "/products/shirts",
  },
  {
    id: 2,
    name: "Hats",
    image: "bg-hat-image",
    link: "/products/hats",
  },
  {
    id: 3,
    name: "Jackets",
    image: "bg-jacket-image",
    link: "/products/jackets",
  },
];

export default function Home() {
  return (
    <>
      {categories.map((category) => (
        <div key={category.id}>
            <Cards
              backgroundUrl={category.image}
              categoryName={category.name}
              imageLink={category.link}
            />
        </div>
      ))}
    </>
  );
}
