import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarServicePage } from './car-service.page';

const routes: Routes = [
  {
    path: '',
    component: CarServicePage
  },
  {
    path: 'mechanical-services-detail/:carServiceId',
    loadChildren: () => import('./car-service-detail/car-service-detail.module').then( m => m.CarServiceDetailPageModule)
  },
  {
    path: 'vehicle-review-detail/:carServiceId',
    loadChildren: () => import('./car-service-detail/car-service-detail.module').then( m => m.CarServiceDetailPageModule)
  },
  {
    path: 'car-wash-detail/:carServiceId',
    loadChildren: () => import('./car-service-detail/car-service-detail.module').then( m => m.CarServiceDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarServicePageRoutingModule {}
