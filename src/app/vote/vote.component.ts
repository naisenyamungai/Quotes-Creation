import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Output() isComplete = new EventEmitter<boolean>();
    upvotes = 0;
    downvotes = 0;

    upVotes(){
      this.upvotes = this.upvotes + 1;  
    }

    downVote(){
      this.downvotes = this.downvotes + 1;
    }

  constructor() { }

  ngOnInit() {
  }

}
