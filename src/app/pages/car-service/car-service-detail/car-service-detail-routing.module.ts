import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarServiceDetailPage } from './car-service-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CarServiceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarServiceDetailPageRoutingModule {}
