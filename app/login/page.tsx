"use client";

import { log } from 'console';
import { useState } from 'react';

export default function Login() {
  const [error, setError] = useState('');
  // console.log('email', email);
  // console.log('password', password);

  function handleSubmit(e: any) {
    e.preventDefault();
    const email = e.target.email;
    const password = e.target.password
    console.log('email', email);
    console.log('password', password);

  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <label>
        Email
        <input
          type="text"
        />
      </label>
      <label>
        Password
        <input
          type="password"
        />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}
