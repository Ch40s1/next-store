import Link from "next/link";
import { signOut } from '@/auth';
// import { getUser} from '@/auth';

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/products">Shop</Link>
      <Link href="/user/login">Login</Link>
      <Link href="/user/signup">Sign-up</Link>
      {/* <h1>{auth.name}</h1> */}
      <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button>
            <div>Sign Out</div>
          </button>
        </form>
      <Link href="/user/profile">Profile</Link>
    </nav>
  );
}
