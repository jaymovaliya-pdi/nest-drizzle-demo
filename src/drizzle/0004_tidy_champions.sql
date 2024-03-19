DO $$ BEGIN
 CREATE TYPE "todo_status" AS ENUM('Not Started', 'InProgress', 'Completed');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
