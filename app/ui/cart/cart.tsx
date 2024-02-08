"use client";

import { useState } from "react";
import cartSvg from "../../../public/svg/cart.svg";
import barsSvg from "@/public/svg/bars.svg";
import Image from "next/image";


export function Cart(){
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen(!isCartOpen);
  };
  return (
    <div>
      <div>
      <Image
        src={cartSvg}
        alt="cart"
        width={50}
        height={50}
        className="pr-4 pt-5 cursor-pointer"
        onClick={handleCartClick}
      />
      </div>
      {isCartOpen && <CartImage isCartOpen={isCartOpen} setCartOpen={setCartOpen} />}
    </div>
  );
}

export function CartImage({ isCartOpen, setCartOpen }: { isCartOpen: boolean, setCartOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

  const handleCartClick = () => {
    setCartOpen(!isCartOpen);
  };

  if (isCartOpen) {
    return (
      <>
        {/* This is going to be start of the cart planning */}
        {/* First I need to get a login setup
    this will allow me to then query a user from the session and
    use its id to query the cart items from the database
    I will then need to display the items in the cart and allow the user to remove items from the cart
    I will also need to display the total of the cart
    I will also need to allow the user to checkout and pay for the items in the cart
    I will also need to allow the user to add items to the cart from the product page
    I will also need to allow the user to update the quantity of the items in the cart
    I will also need to allow the user to add a discount code to the cart
     in order to ge the user i will need to use the useSession hook from next-auth. This means setting up authentication in the app
    */}
        <div className="border-4 border-black py-7 my-4 absolute right-0 top-7 bg-white rounded w-full md:w-1/2 lg:w-1/3 h-1/2">
          <div className="flex mb-8">
            <button
              className="bg-slate-500 w-14 h-14 absolute -top-5 order-2 -left-4 rounded-full"
              onClick={handleCartClick}
            >
              X
            </button>
            <h1 className="w-full text-center underline">Cart</h1>
          </div>
          <div>
            <ul className="flex flex-col gap-8">
              <div className="grid grid-cols-4">
                <div className="grid grid-cols-subgrid gap-6">
                  <h3>Item</h3>
                  <div>Nike cap</div>
                  <div>LA cap</div>
                </div>
                <div className="grid grid-cols-subgrid gap-6">
                  <h3>Price</h3>
                  <div>40.99</div>
                  <div>42.99</div>
                </div>
                <div className="grid grid-cols-subgrid gap-6">
                  <h3>Shipping</h3>
                  <div>19.99</div>
                  <div>20.99</div>
                </div>
                <div className="grid grid-cols-subgrid gap-6">
                  <h3>Total</h3>
                  <div>60.98</div>
                  <div>63.98</div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export function BarsImage() {
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen(!isCartOpen);
  };
  // ecentually this is going to hold some props that will allow me to open the navbar
  // and make it repsponsive
  return (
    <div>
      <Image src={barsSvg} alt="bars" width={50} height={50} className="pt-5" />
    </div>
  );
}
