import { InferSelectModel } from "drizzle-orm";
import {
  integer,
  pgEnum,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("roles", ["admin", "user"]);

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  fullName: varchar({ length: 255 }),
  role: roleEnum().default("user").notNull(),
});

export type User = InferSelectModel<typeof usersTable>;
