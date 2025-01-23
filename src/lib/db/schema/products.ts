import { InferSelectModel } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  varchar,
  integer,
} from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
});

export type Product = InferSelectModel<typeof productsTable>;
