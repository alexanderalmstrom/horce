import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { z } from "zod";

export const db = drizzle(
  z
    .string({
      message: "DATABASE_URL is required",
    })
    .parse(process.env.DATABASE_URL),
);
