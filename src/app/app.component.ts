import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksComponent } from "./pages/books/books.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookstore';
}
