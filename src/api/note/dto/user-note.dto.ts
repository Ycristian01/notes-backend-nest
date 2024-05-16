import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class ListUserNotesDto {
  @ApiProperty({ example: '2' })
  @IsNotEmpty()
  @IsString()
  authorId: string;

  @ApiProperty({ example: true })
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}

export class updateNoteStatusDto {
  @ApiProperty({ example: true })
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}
