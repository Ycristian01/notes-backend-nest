import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note, NoteDocument } from 'src/schemas/note.schema';
import { updateNoteStatusDto, ListUserNotesDto } from '../dto/user-note.dto';
import { NoteService } from './note.service';

@Injectable()
export class UserNotesService {
  constructor(
    @InjectModel(Note.name) private noteModel: Model<NoteDocument>,
    private readonly noteService: NoteService,
  ) {}

  async listUserNotes(query: ListUserNotesDto): Promise<Note[]> {
    return this.noteModel
      .find({
        author: query.authorId,
        isActive: query.isActive,
      })
      .exec();
  }

  async updateNoteStatus(id: string, body: updateNoteStatusDto): Promise<Note> {
    await this.noteService.handleNoteExistence(id);

    return this.noteModel.findByIdAndUpdate(
      { _id: id },
      { isActive: body.isActive },
      { new: true },
    );
  }
}
