import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateNoteDto {
  @ApiProperty({ example: 'TODO monday' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: '1. clean the fridge 2. pay the bills 3. buy some groceries',
  })
  @IsNotEmpty()
  content: string;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  authorId: string;
}

export class UpdateNoteDto {
  @ApiProperty({ example: 'TODO tuesday (correction)' })
  @IsOptional()
  title: string;

  @ApiProperty({
    example:
      '1. finish backend feature 2. call tigo to stop receiving calls 3. check bank account',
  })
  @IsOptional()
  content: string;
}
