import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, DeleteUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.findAll();
  }

  @Post('create-user')
  async createUser(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
  }

  @Put('update-user')
  async updateUser(@Body() body: UpdateUserDto) {
    return this.userService.updateUser(body);
  }

  @Delete('delete-user')
  async deleteUser(@Body() body: DeleteUserDto) {
    return this.userService.deleteUser(body.id);
  }
}
