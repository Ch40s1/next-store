import Link from "next/link";
import Image from "next/image";

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
      <nav>
        <Link href="/">Home</Link>
      </nav>

      <div>
        <h1>Jackets</h1>
        <ul>
          {jackets.map((jacket) => (
            <li key={jacket.id}>
              <Link href={`/products/jackets/${jacket.id}`}>
                <Image src={jacket.image} alt={jacket.name} width={500} height={500} />
                <div>{jacket.name}</div>
                <div>{jacket.price}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
