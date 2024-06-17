import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarServiceDetailPageRoutingModule } from './car-service-detail-routing.module';

import { CarServiceDetailPage } from './car-service-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarServiceDetailPageRoutingModule
  ],
  declarations: [CarServiceDetailPage]
})
export class CarServiceDetailPageModule {}
