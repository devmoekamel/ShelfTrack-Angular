import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../models/book';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  BookEndPoint: string = 'book';
  constructor(private http: HttpClient) {}

  getallBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(environment.apiUrl + this.BookEndPoint);
  }
}
