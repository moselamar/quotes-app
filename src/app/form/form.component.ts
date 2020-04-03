import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() emitQuote= new EventEmitter()
  quoteWords:string
  username:string
  quoteAuthor:string
  quoteDate:number
  theWords:any

  submitQuote(){
    this.theWords = new Quote(this.username,this.quoteAuthor,this.quoteWords)
    this.quoteWords=''
    this.quoteAuthor=''
    this.username=''
    this.emitQuote.emit(this.theWords)
  }



  constructor() { }

  ngOnInit() {
  }

}
