import { NoteModule } from './api/note/note.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './api/user/user.module';

@Module({
  imports: [
    NoteModule,
    UserModule,
    MongooseModule.forRoot('mongodb://localhost/notes-implementation-db'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
