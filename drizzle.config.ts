import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { DATABASE_URL } from "~/lib/config/env";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/lib/db/schema",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
});
