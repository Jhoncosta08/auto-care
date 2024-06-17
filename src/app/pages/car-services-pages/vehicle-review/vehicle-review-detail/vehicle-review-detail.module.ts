import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleReviewDetailPageRoutingModule } from './vehicle-review-detail-routing.module';

import { VehicleReviewDetailPage } from './vehicle-review-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleReviewDetailPageRoutingModule
  ],
  declarations: [VehicleReviewDetailPage]
})
export class VehicleReviewDetailPageModule {}
