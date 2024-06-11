import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCarPageRoutingModule } from './my-car-routing.module';

import { MyCarPage } from './my-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCarPageRoutingModule
  ],
  declarations: [MyCarPage]
})
export class MyCarPageModule {}
