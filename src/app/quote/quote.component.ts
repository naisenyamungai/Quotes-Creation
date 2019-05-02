import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Mother Theresa', 'If you Judge People, you have no time to Love Them', 'Naisenya'),
    new Quote(2,'Oprah Winfrey', 'Surround yourself with only people who are going to lift you higher', 'Naisenya'),
    new Quote(3,'Maya Angelou', 'When you learn, teach. When you get, give', 'Naisenya'),
  ]

    toggleDetails(index){
      this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    }



  constructor() { }

  ngOnInit() {
  }

}
