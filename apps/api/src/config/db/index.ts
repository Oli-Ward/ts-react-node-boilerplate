import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from './schema';

const sqlite: Database.Database = new Database("db.sqlite");

export const db = drizzle(sqlite, { schema });

console.log("Database connected");
export const closeDb = () => {
    sqlite.close();
};

