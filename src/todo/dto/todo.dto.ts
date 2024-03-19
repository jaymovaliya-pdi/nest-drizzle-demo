import { IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  title: string;

  description: string;

  @IsNotEmpty()
  userId: number;
}

export class UpdateTodoDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  title: string;

  description: string;

  status: string;
}

export class DeleteTodoDto {
  @IsNotEmpty()
  id: number;
}
