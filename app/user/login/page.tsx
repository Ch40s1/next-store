"use client";

import Link from "next/link";
import { authenticate } from "../../lib/actions";
import { useFormState, useFormStatus } from "react-dom";

export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <>
      <div>
        <li>
          <Link href="/">Go back Home</Link>
        </li>
      </div>
      <form action={dispatch}>
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <LoginButton />
        <div aria-live="polite" aria-atomic="true">
          {errorMessage && (
            <>
              <p>{errorMessage}</p>
            </>
          )}
        </div>
      </form>
    </>
  );
}
function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending} type="submit">
      Login
    </button>
  );
}
