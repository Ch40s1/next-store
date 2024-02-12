"use client";
import Image from "next/image";
import Link from "next/link";
import userSvg from "@/public/svg/user.svg";
import bagSvg from "@/public/svg/bag.svg";
import homeSvg from "@/public/svg/home.svg";
import { Cart } from "@/app/ui/cart/cart";
import { useState } from "react";

export default function NavBars() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className="bg-white fixed w-full bottom-0 h-[8rem] z-50 shadow-inner pb-6"
      >
        <ul className="flex justify-around items-center align-middle h-full text-white">
          <li className="w-20 p-2 flex bg-red-500 justify-center text-center rounded-full">
            <Link href="/">
              <Image src={homeSvg} alt="home" width={40} />
            </Link>
          </li>
          <li className="w-20 p-2 flex justify-center bg-purple-500 rounded-full">
            <Link href="/products">
              <Image src={bagSvg} alt="shop" width={40} />
            </Link>
          </li>
          <li className="w-20 p-2 flex bg-blue-400 justify-center text-center rounded-full">
            <Link href="/login">
              <Image src={userSvg} alt="login" width={40} />
            </Link>
          </li>
          <li className="w-20 p-2 flex text-black bg-yellow-400 justify-center text-center rounded-full">
            <Cart />
          </li>
        </ul>
      </div>
    </>
  );
}
