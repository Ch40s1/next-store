import Image from "next/image";
import Link from "next/link";

export default function ProductMap({ productArray }: { productArray: any;}) {
  return (
    <>
      <ul>
        {productArray.map((data: any) => (
          <li key={data.id}>
            <Link href={`/products/${data.id}`}>
              <Image
                src={data.image}
                alt={data.name}
                width={500}
                height={500}
              />
              <div>{data.name}</div>
              <div>{data.price}</div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
