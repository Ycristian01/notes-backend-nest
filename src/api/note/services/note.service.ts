import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note, NoteDocument } from 'src/schemas/note.schema';
import { CreateNoteDto, UpdateNoteDto } from '../dto/note.dto';
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

  async update(id: string, body: UpdateNoteDto): Promise<Note> {
    await this.handleNoteExistence(id);
    return this.noteModel.findByIdAndUpdate({ _id: id }, body, { new: true });
  }

  async delete(id: string): Promise<Note> {
    await this.handleNoteExistence(id);
    return this.noteModel.findByIdAndDelete({ _id: id }).exec();
  }

  async handleNoteExistence(id: string): Promise<void> {
    const note = await this.findOne(id);
    if (!note) {
      throw new NotFoundException(`Note with id: ${id} was not found.`);
    }
  }
}
