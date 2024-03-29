import {
  Controller,
  UseInterceptors,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { BookDocument } from './schemas/book.schema';
import { BookDto } from './dto/book.dto';
import { BookService } from './book.service';
import { ExceptionInterceptor } from './book.excpt.interceptor';
import { HttpExceptionFilter } from './book.http.exception.filter';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

// @UseInterceptors(ExceptionInterceptor)
@UseGuards(JwtAuthGuard)
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
