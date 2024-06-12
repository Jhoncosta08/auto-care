import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VehicleReviewPageRoutingModule } from './vehicle-review-routing.module';
import { VehicleReviewPage } from './vehicle-review.page';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  declarations: [
    VehicleReviewPage
  ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        VehicleReviewPageRoutingModule,
        SharedModule
    ]
})
export class VehicleReviewPageModule {}
