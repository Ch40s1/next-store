import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>
        <li>
          <Link href="/">Go back Home</Link>
        </li>
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
