import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddCarPageRoutingModule } from './add-car-routing.module';
import { AddCarPage } from './add-car.page';

@NgModule({
  declarations: [
    AddCarPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCarPageRoutingModule
  ],
})
export class AddCarPageModule {}
