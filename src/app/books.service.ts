/**
 * Name: Trevor McLaurine
 * Date: 9/30/2023
 * Assignment: In-N-Out Books
 * Description: Book Service
**/

import { Injectable } from '@angular/core';
import { IBook } from './book.interface'
import { Observable, of, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ];

  constructor(private http: HttpClient) { }

  getBooks() {
    let params = new HttpParams()
    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`)
    params = params.append('format', 'json')
    params = params.append('jscmd', 'details')

    return this.http.get('https://openlibrary.org/api/books', { params: params})
  }


}
