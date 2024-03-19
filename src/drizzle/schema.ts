import { relations } from 'drizzle-orm';
import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey().notNull(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at'),
});

export const userRelations = relations(users, ({ many }) => ({
  todos: many(todos),
}));

export const todoStatusEnum = pgEnum('todo_status', [
  'Not Started',
  'InProgress',
  'Completed',
]);

export const todos = pgTable('todos', {
  id: serial('id').primaryKey().notNull(),
  title: text('title').notNull(),
  description: text('decription'),
  status: todoStatusEnum('status').default('Not Started'),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at'),
});

export const todoRelations = relations(todos, ({ one, many }) => ({
  user: one(users, { fields: [todos.userId], references: [users.id] }),
  categories: many(todoCategories),
}));

export const categories = pgTable('categories', {
  id: serial('id').primaryKey().notNull(),
  name: text('name').notNull(),
});

export const categoryRelations = relations(categories, ({ many }) => ({
  todos: many(todoCategories),
}));

export const todoCategories = pgTable('todo_categories', {
  id: serial('id').primaryKey().notNull(),
  todoId: integer('todo_id')
    .notNull()
    .references(() => todos.id),
  categoryId: integer('category_id')
    .notNull()
    .references(() => categories.id),
});

export const todoCategoriesRelations = relations(todoCategories, ({ one }) => ({
  todo: one(todos, {
    fields: [todoCategories.todoId],
    references: [todos.id],
  }),
  category: one(categories, {
    fields: [todoCategories.categoryId],
    references: [categories.id],
  }),
}));
