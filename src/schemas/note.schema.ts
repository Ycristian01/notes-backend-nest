import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schema';
import { Type } from 'class-transformer';

export type NoteDocument = HydratedDocument<Note>;

@Schema()
export class Note {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  @Type(() => User)
  author: User;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
