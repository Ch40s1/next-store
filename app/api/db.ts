// /app/api/db.ts
import sqlite3 from 'sqlite3';

const dbPath = './path/to/your/database.db';

export function openDatabase(): sqlite3.Database {
  return new sqlite3.Database(dbPath);
}
