export class Quote {
    public showAuthor:boolean;
    constructor(public id:number, public author:string, public quote:string, public submitter:string, public completeDate:Date){
       this.showAuthor = false
   }
}
