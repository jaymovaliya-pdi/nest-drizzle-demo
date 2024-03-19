import { Inject, Injectable } from '@nestjs/common';
import * as schema from '../drizzle/schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { todos } from '../drizzle/schema';
import { CreateTodoDto, UpdateTodoDto } from './dto/todo.dto';
import { eq } from 'drizzle-orm';

@Injectable()
export class TodoService {
  constructor(@Inject('DEV') private db: NodePgDatabase<typeof schema>) {}

  async findAll() {
    return this.db.query.todos.findMany({
      with: {
        user: true,
        categories: {
          columns: {
            id: false,
            todoId: false,
            categoryId: false,
          },
          with: {
            category: {
              columns: {
                name: true,
              },
            },
          },
        },
      },
    });
  }

  async createTodo(input: CreateTodoDto) {
    return this.db
      .insert(todos)
      .values({
        title: input.title,
        description: input.description,
        userId: input.userId,
      })
      .returning();
  }

  async updateTodo(input: UpdateTodoDto) {
    return this.db
      .update(todos)
      .set({
        title: input.title,
        description: input.description,
      })
      .where(eq(todos.id, input.id))
      .returning();
  }

  async deleteTodo(id: number) {
    return this.db.delete(todos).where(eq(todos.id, id)).returning();
  }
}
