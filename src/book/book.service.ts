import { Injectable } from '@nestjs/common';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BookService {
  private readonly books: BookDto[] = [];

  createBook(book: BookDto) {
    this.books.push(book);
  }

  getBook(id: string): BookDto | null {
    const index = this.books.findIndex((item) => item.id === id);

    if (index === -1) {
      return null;
    }
    return this.books[index];
  }

  getBooks(): BookDto[] {
    return this.books;
  }

  updateBook(id: string, updatedData: BookDto): BookDto | null {
    const index = this.books.findIndex((item) => item.id === id);

    if (index === -1) {
      return null;
    }

    this.books[index] = updatedData;

    return this.books[index];
  }

  deleteBook(id: string): boolean {
    const index = this.books.findIndex((item) => item.id === id);

    if (index === -1) {
      return false;
    }

    this.books.splice(index, 1);

    return true;
  }
}
