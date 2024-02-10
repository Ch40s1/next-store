"use client";
import Image from "next/image";
import Link from "next/link";
import barsSvg from "@/public/svg/bars.svg";
import { Cart } from "@/app/ui/cart/cart";
import { useState } from "react";

export default function NavBars() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-end items-center gap-10 md:hidden p-3 mt-3 mr-3 ">
        <div className="border-2 border-black p-2 rounded-md">
          <Image
            src={barsSvg}
            alt="open cart"
            className="w-7 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <div className="border-2 border-black p-2 rounded-full w-1/4 flex justify-around">
          <h3 className="text-xl">2</h3>
          <Cart />
        </div>
      </div>
      <div
        className={`md:flex flex-grow justify-end items-center gap-10 rounded-xl ${
          isMenuOpen ? "transform translate-x-0 transition-transform duration-300" : "transform translate-x-full transition-transform duration-300"
        } sm:{block fixed bottom-0 w-full h-[8rem] bg-black order-3 }`}
      >
        {/* className="flex justify-end gap-10" */}
        <ul className="flex justify-around items-center align-middle h-full text-white">
          <li className=" w-20 border-b-2 border-white p-2 text-center">
            <Link href="/">Home</Link>
          </li>
          <li className=" w-20 border-b-2 border-white p-2 text-center">
            <Link href="/products">Shop</Link>
          </li>
          <li className=" w-20 border-b-2 border-b-white p-2 text-center">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
