import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookServiceService } from '../../services/book-service.service';
import { Book } from '../../book';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  book !: Book;

  constructor(private bookService : BookServiceService) { }

  ngOnInit(): void {
  }

  onAddBook(addForm : NgForm): void {
    document.getElementById('add-book')?.click();
    this.bookService.saveBook(addForm.value).subscribe(
      (response : Book) => {
        this.book = response;
        
        addForm.reset();
        
        Swal.fire({
          icon: 'success',
          title: 'Created',
          text: `The book ${this.book.noun} was created!`
          
        })

      }, (error: HttpErrorResponse) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `The book wasn't created!`
          
        })
      }
    )
  }

}
