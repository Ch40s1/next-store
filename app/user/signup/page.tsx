import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>
        <li>
          <Link href="/">go back Home</Link>
        </li>
      </div>
      <div>
        <label>Username</label>
        <input type="text" placeholder="Username" />
      </div>
      <div>
        <label>Email</label>
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" placeholder="Password" />
      </div>
    </>
  );
}
