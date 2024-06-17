import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCarPage } from './my-car.page';

const routes: Routes = [
  {
    path: '',
    component: MyCarPage,
  },
  {
    path: 'mechanical-services',
    loadChildren: () => import('../car-services-pages/mechanical-services/mechanical-services.module').then( m => m.MechanicalServicesPageModule)
  },
  {
    path: 'vehicle-review',
    loadChildren: () => import('../car-services-pages/vehicle-review/vehicle-review.module').then( m => m.VehicleReviewPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCarPageRoutingModule {}
