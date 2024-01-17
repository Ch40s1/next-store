import Link from "next/link";
import Image from "next/image";

const hats = [
  {
    id: 1,
    price: 100,
    name: "Hat 1",
    description: "Hat 1 description",
    image: "/img/black-hat.png",
  },
  {
    id: 2,
    price: 200,
    name: "Hat 2",
    description: "Hat 2 description",
    image: "/img/la-hat.png",
  },
  {
    id: 3,
    price: 300,
    name: "Hat 3",
    description: "Hat 3 description",
    image: "/img/sun-hat.png",
  },
  {
    id: 4,
    price: 400,
    name: "Hat 4",
    description: "Hat 4 description",
    image: "/img/nike-hat.png",
  },
  {
    id: 5,
    price: 500,
    name: "Hat 5",
    description: "Hat 5 description",
    image: "/img/fedora-straw.png",
  }

];

export default function Page() {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
      </nav>

      <div>
        <h1>Hats</h1>
        <ul>
          {hats.map((hat) => (
            <li key={hat.id}>
              <Link href={`/products/hats/${hat.id}`}>
                  <Image src={hat.image} alt={hat.name} width={500} height={500} />
                  <div>{hat.name}</div>
                  <div>{hat.price}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
