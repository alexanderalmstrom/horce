ALTER TABLE "users" ADD COLUMN "fullName" varchar(255) DEFAULT '' NOT NULL;--> statement-breakpoint
CREATE TYPE roles AS ENUM ('admin', 'user');
ALTER TABLE "users" ADD COLUMN "role" "roles" DEFAULT 'user' NOT NULL;