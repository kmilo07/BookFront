import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../book';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private apiServeUrl = environment.apiBaseUrl;
  constructor( private http: HttpClient) { }


  getBooks(){
    return this.http.get<Book[]>(`${this.apiServeUrl}/all`)
  }
  
  getBook(id : number){
    return this.http.get<Book>(`${this.apiServeUrl}/book/${id}`)
  }

  deleteBook(id : number){
    return this.http.delete<void>(`${this.apiServeUrl}/${id}`)
  }



}
