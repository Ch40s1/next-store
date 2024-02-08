import Link from "next/link";
import { Cart } from "@/app/ui/cart/cart";
import UserSession from "@/app/utils/userSession";
// import { BarsImage } from "@/app/utils/openCart";

export default function NavBar() {
  return (
    <nav>
      <div className="flex justify-end gap-10">
        <ul className="flex flex-grow justify-end items-center gap-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Shop</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <UserSession />
          <Cart />
          {/* <BarsImage /> */}
        </ul>
      </div>
    </nav>
  );
}
