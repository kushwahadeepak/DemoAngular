import { Directive,HostBinding,HostListener  } from '@angular/core';

@Directive({
  selector: '[appFetureapp]'
})
export class FetureappDirective {
  @HostBinding('style.color') textColor:any; 
  @HostBinding('style.font-Weight') textfont:any; 
  @HostBinding('style.font-size') textsize:any; 
  

  constructor() { }

  
@HostListener('click') onclick(){
  this.textColor = 'red'
  this.textfont = 'bold'
  this.textsize = '45px'
}

@HostListener('mouseover') onMouseover(){
  this.textColor="pink"
  this.textfont='bold'
  this.textsize='50px'
}

@HostListener('mouseout') onMouseout(){
  this.textColor = 'green'
  this.textfont='bold'
  this.textsize= '50px'
}

// @HostBinding('style.display') value:any
// get styledisplay(){
//  return !this.value ? 'none' : 'block';
// }

}
