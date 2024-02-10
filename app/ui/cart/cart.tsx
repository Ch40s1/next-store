"use client";
import { useState } from "react";
import cartSvg from "../../../public/svg/cart.svg";
import Image from "next/image";

export function Cart() {
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
          width={37}
          className="cursor-pointer"
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

  return (
    <>
      <div className={`fixed top-0 right-0 h-full w-full bg-black bg-opacity-50 z-50 ${isCartOpen ? '' : 'hidden'}`}>
        <div className={`transform transition-transform ml-3 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="border-4 border-black py-7 my-4 absolute right-1 top-40 bg-white rounded w-full md:w-1/2 lg:w-1/3 h-100">
            <div className="flex mb-8">
              <button
                className="bg-slate-400 w-14 h-14 absolute -top-5 order-2 -left-4 rounded-full"
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
        </div>
      </div>
    </>
  );
}
