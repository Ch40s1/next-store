import Cards from "./ui/home/cards";
import catShirt from "@/public/img/shirt-category.png";
import catHat from "@/public/img/yarn-hat.png";
import catJacket from "@/public/img/jacket-category.png";

const categories = [
  {
    id: 1,
    name: "Shirts",
    image: catShirt,
    link: "/products/shirts",
  },
  {
    id: 2,
    name: "Hats",
    image: catHat,
    link: "/products/hats",
  },
  {
    id: 3,
    name: "Jackets",
    image: catJacket,
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
