import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleReviewDetailPage } from './vehicle-review-detail.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleReviewDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleReviewDetailPageRoutingModule {}
