import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from 'src/schemas/note.schema';
import { NotesAdminController } from './controllers/notes.admin.controller';
import { NoteService } from './services/note.service';
import { UserService } from '../user/services/user.service';
import { User, UserSchema } from 'src/schemas/user.schema';
import { NotesUserController } from './controllers/notes.user.controller';
import { UserNotesService } from './services/user-notes.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [NotesAdminController, NotesUserController],
  providers: [NoteService, UserService, UserNotesService],
})
export class NoteModule {}
