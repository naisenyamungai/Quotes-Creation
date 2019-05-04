import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundcolor="blue";
  }

  @HostListener("click") upVotes() {
    this.highlight("blue")
  }
  @HostListener("dblclick") onDoubleClicks() {
    this.highlight("none")
  }
  private highlight(action:string){
    this.elem.nativeElement.style.backgroundColor=action;
  }
 
}
