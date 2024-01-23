import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private BookModel: Model<BookDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  createBook(data: BookDto): Promise<BookDocument> {
    const book = new this.BookModel(data);

    return book.save();
  }

  getBook(id: string): Promise<BookDocument> {
    return this.BookModel.findById(id).exec();
  }

  getBooks(): Promise<BookDocument[]> {
    return this.BookModel.find().exec();
  }

  updateBook(id: string, updatedData: BookDto): Promise<BookDocument[]> {
    return this.BookModel.findOneAndUpdate({ _id: id }, updatedData);
  }

  deleteBook(id: string): Promise<BookDocument[]> {
    return this.BookModel.findByIdAndDelete(id);
  }
}
