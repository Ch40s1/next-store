import { sql } from '@vercel/postgres';

import {
  User,
  Customer,
} from './definitions';

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function fetchCustomers() {
  try {
    // Use SELECT to fetch all rows from the "customers" table
    const data = await sql`SELECT * FROM customers`;

    // Return the array of rows
    return data.rows as Customer[];
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}
