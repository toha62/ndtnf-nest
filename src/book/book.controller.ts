import {
  Controller,
  UseInterceptors,
  UsePipes,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
  UseFilters,
} from '@nestjs/common';
import { BookDocument } from './schemas/book.schema';
import { BookDto } from './dto/book.dto';
import { BookService } from './book.service';
import { ExceptionInterceptor } from './book.excpt.interceptor';
import { BookBodyValidationPipe } from './book.body.validation.pipe';
import { BookValidationPipe } from './book.validation.pipe';
import { HttpExceptionFilter } from './book.http.exception.filter';

// @UseInterceptors(ExceptionInterceptor)
@UseFilters(HttpExceptionFilter)
@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @UseInterceptors(ExceptionInterceptor)
  @Get()
  getAllBooks(): Promise<BookDocument[]> {
    return this.bookService.getBooks();
  }

  @UseInterceptors(ExceptionInterceptor)
  @Get(':id')
  getBookById(@Param('id') id: string): Promise<BookDocument> {
    return this.bookService.getBook(id);
  }

  @UsePipes(BookValidationPipe)
  @Post()
  createBook(@Body() createBookData: BookDto): Promise<BookDocument> {
    return this.bookService.createBook(createBookData);
  }

  @UsePipes(BookBodyValidationPipe)
  @Put(':id')
  updateBookById(@Param('id') id: string, @Body() updateBookData: BookDto) {
    return this.bookService.updateBook(id, updateBookData);
  }

  @Delete(':id')
  deleteBookById(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }
}
