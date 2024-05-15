import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note, NoteDocument } from 'src/schemas/note.schema';
import { CreateNoteDto } from '../dto/note.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class NoteService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  async create(body: CreateNoteDto, author: User): Promise<Note> {
    const newNote = new this.noteModel({ ...body, author });
    return newNote.save();
  }

  async findAll(): Promise<Note[]> {
    return this.noteModel.find().exec();
  }

  async findOne(id: string): Promise<Note> {
    return this.noteModel.findOne({ _id: id }).exec();
  }
}
