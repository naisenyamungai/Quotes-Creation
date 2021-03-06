import { Component, OnInit} from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Mother Theresa', 'If you Judge People, you have no time to Love Them', 'Naisenya', new Date(2019, 4, 3) ),
    new Quote(2,'Oprah Winfrey', 'Surround yourself with only people who are going to lift you higher', 'Naisenya', new Date(2019, 4, 3) ),
    new Quote(3,'Maya Angelou', 'When you learn, teach. When you get, give', 'Naisenya', new Date(2019, 4, 3) ),
    new Quote(4,'Wavinya Ndeti', 'Yaliyo Ndwele Sipite', 'Naisenya', new Date(2019, 4, 3) ), 
  ]

  showDetails = false;

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete = confirm('Are you sure you want to delete this Quote?')
        if(toDelete){
          this.quotes.splice(index,1)
        }
    }
  }

  toggleDetails(index){
    this.showDetails = !this.showDetails;
  }

  constructor() { }

  ngOnInit() {
  }

}
