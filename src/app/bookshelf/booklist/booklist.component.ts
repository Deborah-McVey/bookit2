import { Component } from '@angular/core';
import { Book } from 'src/app/book.model';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
  myBooks: Book[] = [
    new Book(
      'Book of Testing',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
  ),
  new Book(
    'Book of Testing',
    'Will Wilder',
    'Mystery',
    'https://source.unsplash.com/50x50/?mystery,book'
),
new Book(
  'Book of Testing',
  'Will Wilder',
  'Mystery',
  'https://source.unsplash.com/50x50/?mystery,book'
)
];
}
