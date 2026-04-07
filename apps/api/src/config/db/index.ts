import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"

import { logger } from "../logger"
import * as schema from "./schema"

const sqlite: Database.Database = new Database("db.sqlite")

export const db = drizzle(sqlite, { schema })

logger.info("🔌 Database connected successfully")
export const closeDb = () => {
    sqlite.close()
}
