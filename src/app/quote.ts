export class Quote {
  public upvotes:number
  public downvotes:number
  public completeDate:Date
  constructor(public username:string, public quoteAuthor:string,public quote:string){
    this.upvotes =0;
    this.downvotes =0;
    this.completeDate=new Date;
  }
}
