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
    <main className="flex flex-col items-center justify-between">
      <div>
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-cover w-[31rem] h-[20rem] flex justify-center items-center"
          >
            <Cards
              backgroundUrl={category.image}
              categoryName={category.name}
              imageLink={category.link}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
