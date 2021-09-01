import { Component, Input, OnInit } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { Book } from '../../book';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.css']
})
export class CardBookComponent implements OnInit {

  @Input() items: any[] = [];
  book !: Book;

  constructor(
    private bookService : BookServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onViewBook(id : number){
    this.bookService.getBook(id).subscribe
    ((data : any) => {
      this.book = data;
    })
  }

  onDelete(id : number){
    this.bookService.deleteBook(id)
    .subscribe((response : void) => {
      Swal.fire({
        icon: 'success',
        title: 'Deleted',
        text: `The book ${this.book.noun} was removed!`
      })

      this.router.navigate(['/']);
    },(error: HttpErrorResponse) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `${error}`
        
      })
    }
  )}

}
