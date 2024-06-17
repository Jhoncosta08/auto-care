import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MechanicalServicesPage } from './mechanical-services.page';

const routes: Routes = [
  {
    path: '',
    component: MechanicalServicesPage
  },
  {
    path: 'mechanical-service-detail/:mechanicalServiceId',
    loadChildren: () => import('../mechanical-services/mechanical-service-detail/mechanical-service-detail.module').then(
      m => m.MechanicalServiceDetailPageModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MechanicalServicesPageRoutingModule {}
