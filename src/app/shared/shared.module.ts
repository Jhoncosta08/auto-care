import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {CarFooterNavComponent} from './components/car-footer-nav/car-footer-nav.component';


@NgModule({
  declarations: [
    CarFooterNavComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CarFooterNavComponent
  ]
})
export class SharedModule { }
