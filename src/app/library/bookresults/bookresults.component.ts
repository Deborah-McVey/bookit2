import { Component } from '@angular/core';

@Component({
  selector: 'app-bookresults',
  templateUrl: './bookresults.component.html',
  styleUrls: ['./bookresults.component.css']
})
export class BookresultsComponent implements OnInit {
    constructor(
      public libraryService: LibraryService,
      private bookshelfService: BookshelfService
    ) {}

    ngOnInit(): void {
      this.bookResults = this.libraryService.getBooks();
      this.libraryService.bookListChanged.subscribe((books: Book[]) => {
        this.bookResults = books;
      });
    }

    onSaveBook(book: Book) {
      return this.bookshelfService.saveBook(book);
    }
  }
}
