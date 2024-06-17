import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleReviewPage } from './vehicle-review.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleReviewPage
  },
  {
    path: 'vehicle-review-detail/:vehicleReviewId',
    loadChildren: () => import('./vehicle-review-detail/vehicle-review-detail.module').then( m => m.VehicleReviewDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleReviewPageRoutingModule {}
