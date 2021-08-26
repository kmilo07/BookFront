import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookServiceService } from '../../services/book-service.service';
import { Book } from '../../book';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(private bookService : BookServiceService) { }

  ngOnInit(): void {
  }

  onAddBook(addForm : NgForm): void {
    document.getElementById('add-book')?.click();
    this.bookService.saveBook(addForm.value).subscribe(
      ((response : Book) => {
        addForm.reset();
      })
    )
  }

}
