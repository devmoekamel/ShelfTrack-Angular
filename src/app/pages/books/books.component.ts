import { Component, OnInit, Pipe } from '@angular/core';
import { BookService } from '../../Services/book.service';
import { IBook } from '../../models/book';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookCardComponent } from './book-card/book-card.component';

@Component({
  selector: 'app-books',
  imports: [CommonModule, FormsModule, BookCardComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  Books!: IBook[];
  filteredBooks!: IBook[];
  searchQuery: string = '';
  constructor(public BookServices: BookService) {}
  ngOnInit(): void {
    this.BookServices.getallBooks().subscribe({
      next: (response) => {
        console.log(response);
        this.Books = response;
        this.filteredBooks = response;
      },
      error: () => {},
    });
  }

  searchBook() {
    console.log(this.searchQuery);
    this.filteredBooks =
      this.searchQuery != ''
        ? this.Books.filter((b) =>
            b.title.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
        : this.Books;
  }
}
