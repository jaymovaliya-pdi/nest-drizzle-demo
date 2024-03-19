CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"decription" text,
	"status" "todo_status" DEFAULT 'Not Started',
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp
);
