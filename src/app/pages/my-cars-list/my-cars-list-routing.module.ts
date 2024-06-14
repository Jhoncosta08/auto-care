import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCarsListPage } from './my-cars-list.page';

const routes: Routes = [
  {
    path: '',
    component: MyCarsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCarsListPageRoutingModule {}
