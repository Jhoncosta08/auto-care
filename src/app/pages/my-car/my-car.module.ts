import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyCarPageRoutingModule } from './my-car-routing.module';
import { MyCarPage } from './my-car.page';
import {SharedModule} from '../../shared/shared.module';
import {CarLogoPipe} from '../../pipes/car-logo.pipe';

@NgModule({
  declarations: [
    MyCarPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCarPageRoutingModule,
    SharedModule,
    CarLogoPipe
  ],
})
export class MyCarPageModule {}
