import { InferSelectModel } from "drizzle-orm";
import { pgTable, timestamp, integer, text } from "drizzle-orm/pg-core";
import { productsTable } from "./products";

export const variantsTable = pgTable("variants", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  productId: integer()
    .notNull()
    .references(() => productsTable.id),
  price: integer(),
  description: text(),
});

export type Variant = InferSelectModel<typeof variantsTable>;
