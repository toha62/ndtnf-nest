import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { BookDocument } from './schemas/book.schema';
import { BookDto } from './dto/book.dto';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  getAllBooks(): Promise<BookDocument[]> {
    return this.bookService.getBooks();
  }

  @Get(':id')
  getBookById(@Param('id') id: string): Promise<BookDocument> {
    return this.bookService.getBook(id);
  }

  @Post()
  createBook(@Body() createBookData: BookDto): Promise<BookDocument> {
    return this.bookService.createBook(createBookData);
  }

  @Put(':id')
  updateBookById(@Param('id') id: string, @Body() updateBookData: BookDto) {
    return this.bookService.updateBook(id, updateBookData);
  }

  @Delete(':id')
  deleteBookById(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }
}
