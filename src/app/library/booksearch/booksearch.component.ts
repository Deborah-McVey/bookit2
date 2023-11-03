import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent {
  constructor(private http: HttpClient) {}

onFetchBooks() {

   // Turn Search Query into lowercase words with plus sign for spaces
   const formattedQuery = searchInput.split(' ').join('+').toLowerCase();

  // Send HTTP GET Request to the "openLibrary" api endpoint using the tranformed input query
  this.http
    .get(`http://openlibrary.org/search.json?q={formattedQuery}`)
    .subscribe((searchResponse) => {
      console.log('searchResponse', searchResponse);
    });
  }
}
