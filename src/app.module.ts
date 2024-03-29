import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { DrizzleModule } from './drizzle/drizzle.module';

@Module({
  imports: [UserModule, TodoModule, DrizzleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
