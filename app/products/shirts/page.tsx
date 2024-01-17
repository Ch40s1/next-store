import Link from "next/link";
import Image from "next/image";


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
      <nav>
        <Link href="/">Home</Link>
      </nav>

      <div>
        <h1>Shirts</h1>
        <ul>
          {shirts.map((shirt) => (
            <li key={shirt.id}>
              <Link href={`/products/shirts/${shirt.id}`}>
                  <Image src={shirt.image} alt={shirt.name} width={500} height={500} />
                  <div>{shirt.name}</div>
                  <div>{shirt.price}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
