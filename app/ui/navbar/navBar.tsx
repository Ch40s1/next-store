import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/products">Shop</Link>
      {/* <Link href="/user/profile">Profile</Link> */}
    </nav>
  );
}
