"use client";

import Image from "next/image";
import Link from "next/link";
import gencraft from "../public/gencraft.png";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
    <main className="flex flex-col items-center justify-between">
      <nav>
        <ul>
          <li>
            <Link
              className={`link ${pathname === "/products" ? "active" : ""}`}
              href="/products"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link href="/user/login">Login</Link>
          </li>
          <li>
            <Link href="/user/signup">Sign-up</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Shirts</h1>
        <Link href="/products/shirts">
          <Image src={gencraft} alt="Sad Coding" width={500} height={500} />
        </Link>
      </div>
      <div>
        <h1>Hats</h1>
        <Link href="/products/hats">
          <Image src={gencraft} alt="Sad Coding" width={500} height={500} />
        </Link>
      </div>
      <div>
        <h1>Jackets</h1>
        <Link href="/products/jackets">
          <Image src={gencraft} alt="Sad Coding" width={500} height={500} />
        </Link>
      </div>
    </main>
  );
}
