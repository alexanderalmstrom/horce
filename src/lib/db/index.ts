import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "./schema/users";
import { Pool } from "pg";
import { DATABASE_URL } from "../config/env";

const pool = new Pool({
  connectionString: DATABASE_URL,
});

export const db = drizzle({
  client: pool,
  schema: { users: usersTable },
});
