import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/products">Shop</Link>
      <Link href="/user/login">Login</Link>
      <Link href="/user/signup">Sign-up</Link>
    </nav>
  );
}
