import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateNoteDto {
  @ApiProperty({ example: 'TODO monday' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: '1. clean the fridge 2. pay the bills 3. buy some groceries',
  })
  @IsNotEmpty()
  content: string;

  @ApiProperty({ example: '6644e59ff3fb47a9db6776fa' })
  @IsNotEmpty()
  authorId: string;
}
