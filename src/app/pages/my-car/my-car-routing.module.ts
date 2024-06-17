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
    loadChildren: () => import('../car-service/car-service.module').then( m => m.CarServicePageModule)
  },
  {
    path: 'vehicle-review',
    loadChildren: () => import('../car-service/car-service.module').then( m => m.CarServicePageModule)
  },
  {
    path: 'car-wash',
    loadChildren: () => import('../car-service/car-service.module').then( m => m.CarServicePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCarPageRoutingModule {}
