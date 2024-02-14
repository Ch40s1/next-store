"use client";
import Image from "next/image";
import Link from "next/link";
import userSvg from "@/public/svg/user.svg";
import barsSvg from "@/public/svg/bars.svg";
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
        className={`bg-white fixed w-full bottom-0 h-[8rem]
        ${
          isMenuOpen
            ? "md:relative md:mt-20 md:transition-transform md:transform md:-translate-x-0 md:duration-300"
            : "md:translate-x-full"
        }
        z-50 shadow-inner pb-6`}
      >
        <ul className="flex justify-around items-center align-middle h-full text-white">
          <li className="flex flex-col justify-center items-center">
            <Link href="/">
              <Image src={homeSvg} alt="home" width={45} />
            </Link>
            <h4 className="text-black">Home</h4>
          </li>
          <li className="flex flex-col justify-center items-center">
            <Link href="/products">
              <Image src={bagSvg} alt="shop" width={40} />
            </Link>
            <h4 className="text-black">Shop All</h4>
          </li>
          <li className="flex flex-col justify-center items-center">
            <Link href="/login">
              <Image src={userSvg} alt="login" width={40} />
            </Link>
            <h4 className="text-black">Login</h4>
          </li>
          <li className="text-black flex flex-col justify-center items-center">
            <Cart />
            <h4 className="text-black">Cart</h4>
          </li>
        </ul>
      </div>
      <div className="hidden md:block lg:hidden">
        <Image
          src={barsSvg}
          alt="menu"
          width={40}
          className="cursor-pointer absolute top-5 left-5 z-50"
          onClick={toggleMenu}
        />
      </div>
    </>
  );
}

export function SideNav() {
  return (
    <div className="flex flex-col justify-center gap-8 p-10">
      <Link href="/" className="flex gap-10 items-center border p-4 border-b-black">
        <Image src={homeSvg} alt="home" width={45} />
        <h4>Home</h4>
      </Link>
      <Link href="/products" className="flex gap-10 items-center border p-4 border-b-black">
        <Image src={bagSvg} alt="shop" width={40} />
        <h4>View All Products</h4>
      </Link>
      <Link href="/login" className="flex gap-10 items-center border p-4 border-b-black">
        <Image src={userSvg} alt="login" width={40} />
        <h4>Login</h4>
      </Link>
      <div className="flex gap-10 items-center border p-4 border-b-black">
        <Cart />
        <h4>Cart</h4>
      </div>
    </div>
  );
}
