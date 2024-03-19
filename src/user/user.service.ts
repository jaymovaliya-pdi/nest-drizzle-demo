import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../drizzle/schema';
import { eq } from 'drizzle-orm';
import { users } from '../drizzle/schema';

@Injectable()
export class UserService {
  constructor(@Inject('DEV') private db: NodePgDatabase<typeof schema>) {}

  async findAll() {
    return this.db.query.users.findMany({
      with: {
        todos: true,
      },
    });
  }

  async createUser(input: CreateUserDto) {
    return this.db
      .insert(users)
      .values({
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .returning();
  }

  async updateUser(input: UpdateUserDto) {
    return this.db
      .update(users)
      .set({
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .where(eq(users.id, input.id))
      .returning();
  }

  async deleteUser(id: number) {
    return this.db.delete(users).where(eq(users.id, id)).returning();
  }
}
