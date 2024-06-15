import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {CarFooterNavComponent} from './components/car-footer-nav/car-footer-nav.component';
import {DynamicBtnComponent} from './components/dynamic-btn/dynamic-btn.component';

@NgModule({
  declarations: [
    CarFooterNavComponent,
    DynamicBtnComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CarFooterNavComponent,
    DynamicBtnComponent
  ]
})
export class SharedModule { }
