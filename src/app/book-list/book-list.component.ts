/**
 * Name: Trevor McLaurine
 * Date: 9/11/2023
 * Assignment: Exercise 6.2 - Input/Output Properties, Part 1
 * Description: Book List component
**/

import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books: Array<IBook> = [];
  book: IBook

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe(res => {
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author) {
              return author.name;
            })
          }

          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13[0] : res[key].details.isbn_10[0],
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
          console.log(this.books)
        }
      }
    })
  }
  showBookDetails(isbn: string) {
    this.book = this.books.find(book => book.isbn === isbn)

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      }, 
      disableClose: true, 
      width: '800px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'confirm') {
        this.book = null; 
      }
    })
  }
}
