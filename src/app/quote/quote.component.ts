import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote("Moses", "Buddha", "All that we are is the result of what we have thought."),
    new Quote("Babu", "Benjamin Franklin", "Well done is better than well said "),
    new Quote("Anonymous", "Albert Einstein", "Try not to become a man of success but a man of value")
  ]


  addQuote(chosenQuote) {
    this.quotes.push(chosenQuote)
  }

  upvote(i) {
    this.quotes[i].upvotes ++;
  }
  downvote(i) {
    this.quotes[i].downvotes  ++;
  }
  delQuote(i) {
    this.quotes.splice(i, 1)
  }
  beforeUpvote:number
  afterUpvote:number
  counter:number

  highestUpvote(){
    this.beforeUpvote = 0
    this.afterUpvote = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.afterUpvote = this.quotes[this.counter].upvotes;
      if(this.afterUpvote > this.beforeUpvote){this.beforeUpvote = this.afterUpvote}
    }
    return  this.beforeUpvote
  }



constructor() { }

ngOnInit() {
}

}
