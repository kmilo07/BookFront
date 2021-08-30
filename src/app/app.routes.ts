import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { FindBookComponent } from './components/find-book/find-book.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: BooksComponent},
    { path: 'create', component: NewBookComponent},
    { path: 'buscar/:nombre', component: FindBookComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);