import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { Book } from '../../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent{

  books : Book[] = [];

  constructor( private bookService : BookServiceService) { 

    this.bookService.getBooks()
    .subscribe((data : any) => {
      this.books = data;
      console.log(data);
    })
  }

}
