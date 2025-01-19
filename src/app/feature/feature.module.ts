import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature/feature.component';
import { FetureappDirective } from './fetureapp.directive';


@NgModule({
  declarations: [
    FeatureComponent,
    FetureappDirective
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule {
  constructor(){
    console.log("sdfdsfds test");
    
  }

 }
