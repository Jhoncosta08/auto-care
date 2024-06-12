import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleReviewPageRoutingModule } from './vehicle-review-routing.module';

import { VehicleReviewPage } from './vehicle-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleReviewPageRoutingModule
  ],
  declarations: [VehicleReviewPage]
})
export class VehicleReviewPageModule {}
