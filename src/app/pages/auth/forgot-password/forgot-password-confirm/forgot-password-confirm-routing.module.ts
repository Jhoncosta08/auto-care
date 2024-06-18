import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordConfirmPage } from './forgot-password-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordConfirmPageRoutingModule {}
