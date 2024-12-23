import { z } from "zod";

export const DATABASE_URL = z
  .string({
    message: "DATABASE_URL is required",
  })
  .parse(process.env.DATABASE_URL);
