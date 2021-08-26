import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from './app.routes'

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BooksComponent } from './components/books/books.component';
import { CardBookComponent } from './components/card-book/card-book.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    CardBookComponent,
    NewBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
