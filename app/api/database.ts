// /app/api/database.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { openDatabase } from './db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Open the SQLite database
  const db = openDatabase();

  // Query the message from the database
  const query = 'SELECT content FROM messages';
  db.get(query, (err, row) => {
    // Close the SQLite database
    db.close();

    if (err) {
      console.error('Error querying message:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    if (!row) {
      res.status(404).json({ error: 'Message not found' });
      return;
    }

    const message = (row as { content: string }).content;

    // Send the message as JSON response
    res.status(200).json({ message });
  });
}
