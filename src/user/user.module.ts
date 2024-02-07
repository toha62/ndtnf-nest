import { Module } from '@nestjs/common';
// import { BookController } from './book.controller';
// import { BookService } from './book.service';
// import { BookSchema, Book } from './schemas/book.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  // controllers: [BookController],
  // providers: [BookService],
  // exports: [BookService],
})
export class UserModule {}
