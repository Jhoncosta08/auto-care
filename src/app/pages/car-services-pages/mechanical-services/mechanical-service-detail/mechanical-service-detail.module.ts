import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MechanicalServiceDetailPageRoutingModule } from './mechanical-service-detail-routing.module';

import { MechanicalServiceDetailPage } from './mechanical-service-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MechanicalServiceDetailPageRoutingModule
  ],
  declarations: [MechanicalServiceDetailPage]
})
export class MechanicalServiceDetailPageModule {}
