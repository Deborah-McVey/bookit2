import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LibraryComponent } from './library/library.component';
import { BooklistComponent } from './bookshelf/booklist/booklist.component';
import { BookdetailsComponent } from './bookshelf/bookdetails/bookdetails.component';
import { BookresultsComponent } from './library/bookresults/bookresults.component';
import { BooksearchComponent } from './library/booksearch/booksearch.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { BookComponent } from './shared/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookshelfComponent,
    LibraryComponent,
    BooklistComponent,
    BookdetailsComponent,
    BookresultsComponent,
    BooksearchComponent,
    NavigationComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
