"use client";

import Link from "next/link";
import cartSvg from "../../../public/svg/cart.svg";
import barsSvg from "../../../public/svg/bars.svg";
import Image from "next/image";
import Cart from "../cart/cart";
import { useState } from "react";

export default function NavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleCartClick() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <nav>
      <div className="flex justify-end gap-10">
        <ul className="flex flex-grow justify-end items-center gap-10">
          <li>
            {" "}
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Shop</Link>
          </li>
        </ul>
        {/* <Image
          src={barsSvg}
          alt="bars"
          width={50}
          height={50}
          className="pt-5"
        /> */}
        <Image
          src={cartSvg}
          alt="cart"
          width={100}
          height={50}
          className="pr-4 pt-5 cursor-pointer"
          onClick={handleCartClick}
        />
      </div>

      <div>
        {isCartOpen && (
          <div className="border-y-4 border-black py-7 my-4">
            <Cart />
          </div>
        )}
      </div>
    </nav>
  );
}
