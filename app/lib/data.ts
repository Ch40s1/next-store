import { sql } from '@vercel/postgres';

import {
  User,
  Customer,
  Product,
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function getUser(email: string) {
  noStore();
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function fetchCustomers() {
  noStore();
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

export async function fetchAllProducts() {
  noStore();
  try {
    // Use SELECT to fetch all rows from the "products" table
    const data = await sql`SELECT * FROM products`;

    // Return the array of rows
    return data.rows as Product[];
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all products.');
  }
}

export async function fetchProductById(id: string) {
  noStore();
  try {
    // Use SELECT to fetch a single row from the "products" table
    const data = await sql`SELECT * FROM products WHERE id=${id}`;

    // Return the first row
    return data.rows[0];
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch product.');
  }
}

export async function fetchAllProductHat() {
  noStore();
  try {
    // Use SELECT to fetch a single row from the "products" table
    const data = await sql`SELECT * FROM products WHERE category='hats'`;

    // Return all rows
    return data.rows as Product[];
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch product.');
  }
}

export async function fetchAllProductShirt() {
  noStore();
  try {
    // Use SELECT to fetch a single row from the "products" table
    const data = await sql`SELECT * FROM products WHERE category='shirts'`;

    // Return the first row
    return data.rows as Product[];
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch product.');
  }
}

export async function fetchAllProductJackets() {
  noStore();
  try {
    // Use SELECT to fetch a single row from the "products" table
    const data = await sql`SELECT * FROM products WHERE category='jackets'`;

    // Return the first row
    return data.rows as Product[];
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch product.');
  }
}
