import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../book';
import { BookServiceService } from '../../services/book-service.service';

@Component({
  selector: 'app-find-book',
  templateUrl: './find-book.component.html',
  styleUrls: ['./find-book.component.css']
})
export class FindBookComponent implements OnInit {

  books : Book[] = [];
  buscar!: string;

  constructor( private bookService:BookServiceService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.buscar = params['nombre'];
      this.bookService.getAuthor(params['nombre'])
      .subscribe((data:any) =>{
        if(data != 0){
          this.books = data;
        }
        else{
          this.bookService.getPublisher(params['nombre'])
          .subscribe((publisher : any) => {
            this.books = publisher;
          })
        }
      }
      );
      console.log(this.buscar);
    })
  }

}
