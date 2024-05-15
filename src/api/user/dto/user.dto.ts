import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Doe' })
  @IsOptional()
  lastName: string;

  @ApiProperty({ example: 'john_doe@email.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'secret123' })
  @IsOptional()
  password: string;
}
