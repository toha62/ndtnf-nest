import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BookDto } from './dto/book.dto';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  getAllBooks() {
    return this.bookService.getBooks();
  }

  @Get(':id')
  getBookById(@Param('id') id: string) {
    return this.bookService.getBook(id);
  }

  @Post()
  createBook(@Body() createBookData: BookDto) {
    return this.bookService.createBook(createBookData);
  }

  @Post(':id')
  updateBookById(@Param('id') id: string, @Body() updateBookData: BookDto) {
    return this.bookService.updateBook(id, updateBookData);
  }

  @Delete('id')
  deleteBookById(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }
}
