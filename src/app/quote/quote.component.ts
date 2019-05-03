import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Mother Theresa', 'If you Judge People, you have no time to Love Them', 'Naisenya', new Date(2019, 3, 1) ),
    new Quote(2,'Oprah Winfrey', 'Surround yourself with only people who are going to lift you higher', 'Naisenya', new Date(2019, 2, 20) ),
    new Quote(3,'Maya Angelou', 'When you learn, teach. When you get, give', 'Naisenya', new Date(2019, 2, 7) ),
    new Quote(4,'Wavinya Ndeti', 'Yaliyo Ndwele Sipite', 'Naisenya', new Date(2019, 3, 13) ),
    new Quote(5,'Miguna Miguna', 'Am not Boarding','Naisenya', new Date(2019, 2, 17) )
  ]
  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  constructor() { }

  ngOnInit() {
  }

}
