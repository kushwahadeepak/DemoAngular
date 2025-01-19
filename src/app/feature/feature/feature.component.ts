import { Component} from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent {


  isvalid: boolean = true
  selectopt: string =''
  isvisiable: boolean = false
  ChangebttonName: string = 'Save'


  constructor(){}


ngOnInit(): void{
}

selectopion(val:any){
  this.isvalid = val
}

toggel(){
  this.isvisiable = !this.isvisiable
}
handalclick(event: MouseEvent, customData: string): void{
 console.log("Mouse Event check", event.clientX);
 console.log("Mouse Event Check1", event.target); 
 console.log('Custom data:', customData);
}

changebtnname(){
this.ChangebttonName = this.ChangebttonName === 'Save' ? 'Update' : 'Save'
}

}
