ALTER TABLE "todos" DROP CONSTRAINT "todos_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "todos" ALTER COLUMN "user_id" SET NOT NULL;