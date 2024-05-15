import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NoteService } from '../services/note.service';
import { CreateNoteDto } from '../dto/note.dto';
import { Note } from 'src/schemas/note.schema';
import { UserService } from 'src/api/user/services/user.service';

@Controller('notes-admin')
@ApiTags('note-admin')
export class NotesAdminController {
  constructor(
    private readonly notesAdminService: NoteService,
    private readonly usersAdminService: UserService,
  ) {}

  @Post()
  async create(@Body() body: CreateNoteDto): Promise<Note> {
    const author = await this.usersAdminService.findOne(body.authorId);
    return this.notesAdminService.create(body, author);
  }

  @Get()
  async findAll(): Promise<Note[]> {
    return this.notesAdminService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Note> {
    return this.notesAdminService.findOne(id);
  }
}
