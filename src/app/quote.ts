export class Quote {
    public showAuthor:boolean;
    constructor(public id:number, public author:string, public quote:string, public submitter:string){
        this.showAuthor = false;
    }
}
