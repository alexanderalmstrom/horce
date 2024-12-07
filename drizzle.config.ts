import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { z } from "zod";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: z
      .string({
        message: "DATABASE_URL is required",
      })
      .parse(process.env.DATABASE_URL),
  },
});
