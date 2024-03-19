import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto, DeleteTodoDto, UpdateTodoDto } from './dto/todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllTodos() {
    return this.todoService.findAll();
  }

  @Post('create-todo')
  async createUser(@Body() body: CreateTodoDto) {
    return this.todoService.createTodo(body);
  }

  @Put('update-todo')
  async updateUser(@Body() body: UpdateTodoDto) {
    return this.todoService.updateTodo(body);
  }

  @Delete('delete-todo')
  async deleteUser(@Body() body: DeleteTodoDto) {
    return this.todoService.deleteTodo(body.id);
  }
}
