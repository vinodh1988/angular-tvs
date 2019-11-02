import { Directive ,Input, ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
 @Input('highlight') teamsize:number;
 original:string="";
  constructor(private el:ElementRef) { 
    this.original= this.el.nativeElement.style.backgroundColor;
  }

  @HostListener('mouseover')
  highlightHover():void{
     if(this.teamsize<5)
       this.el.nativeElement.style.backgroundColor="lightblue";
     else if(this.teamsize>=5&&this.teamsize<=10)
       this.el.nativeElement.style.backgroundColor="green";
     else if(this.teamsize>10)
       this.el.nativeElement.style.backgroundColor="yellow";
     else
       this.el.nativeElement.style.backgroundColor="lightGray";
  }

  @HostListener('mouseleave')
    retainOriginal(){
      this.el.nativeElement.style.backgroundColor=this.original;
     }
  
  

}
