import { DB } from '../../deps.ts';

const db = new DB('database.db');

db.query(`
  CREATE TABLE IF NOT EXISTS feeds (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    url TEXT
  )
`);