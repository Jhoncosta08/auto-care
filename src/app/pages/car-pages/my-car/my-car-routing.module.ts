import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCarPage } from './my-car.page';

const routes: Routes = [
  {
    path: '',
    component: MyCarPage,
  },
  {
    path: 'vehicle-review',
    loadChildren: () => import('../vehicle-review/vehicle-review.module').then( m => m.VehicleReviewPageModule)
  },
  {
    path: 'mechanical-services',
    loadChildren: () => import('../mechanical-services/mechanical-services.module').then( m => m.MechanicalServicesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCarPageRoutingModule {}
