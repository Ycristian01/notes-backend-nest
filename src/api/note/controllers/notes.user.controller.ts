import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserNotesService } from '../services/user-notes.service';
import { Note } from 'src/schemas/note.schema';
import { updateNoteStatusDto, ListUserNotesDto } from '../dto/user-note.dto';

@Controller('user-notes')
@ApiTags('user-notes')
export class NotesUserController {
  constructor(private readonly userNotesService: UserNotesService) {}

  @Get()
  async listUserNotes(@Query() query: ListUserNotesDto): Promise<Note[]> {
    return this.userNotesService.listUserNotes(query);
  }

  @Patch(':id')
  async updateNoteStatus(
    @Param('id') id: string,
    @Body() body: updateNoteStatusDto,
  ): Promise<Note> {
    return this.userNotesService.updateNoteStatus(id, body);
  }
}
