import { Component, Input, OnInit } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { Book } from '../../book';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.css']
})
export class CardBookComponent implements OnInit {

  @Input() items: any[] = [];
  book !: Book;

  constructor(
    private bookService : BookServiceService
  ) { }

  ngOnInit(): void {
  }

  onViewBook(id : number){
    this.bookService.getBook(id).subscribe
    ((data : any) => {
      this.book = data;
      console.log(data);
    })
  }

  onDelete(id : number){
    this.bookService.deleteBook(id)
    .subscribe((response : void) => {
      console.log(response);
    })
  }

}
