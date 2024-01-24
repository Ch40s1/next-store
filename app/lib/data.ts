import { sql } from '@vercel/postgres';

import {
  User,
  Customer,
  Product,
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

export async function fetchAllProducts() {
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
