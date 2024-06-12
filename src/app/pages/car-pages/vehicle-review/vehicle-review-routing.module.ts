import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleReviewPage } from './vehicle-review.page';


const routes: Routes = [
  {
    path: '',
    component: VehicleReviewPage
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleReviewPageRoutingModule {}
