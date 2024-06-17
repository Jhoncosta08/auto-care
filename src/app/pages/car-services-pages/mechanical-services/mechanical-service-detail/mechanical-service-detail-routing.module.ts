import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MechanicalServiceDetailPage } from './mechanical-service-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MechanicalServiceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MechanicalServiceDetailPageRoutingModule {}
