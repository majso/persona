import { DB } from '../../deps.ts';

const db = new DB('./api/db/database.sqlite');

db.query(`
  CREATE TABLE IF NOT EXISTS feeds (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    url TEXT
  )
`);

export default db