import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedefineConfirmPage } from './redefine-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: RedefineConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedefineConfirmPageRoutingModule {}
