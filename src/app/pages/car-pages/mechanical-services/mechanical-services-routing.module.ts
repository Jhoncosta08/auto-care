import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MechanicalServicesPage } from './mechanical-services.page';

const routes: Routes = [
  {
    path: '',
    component: MechanicalServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MechanicalServicesPageRoutingModule {}
