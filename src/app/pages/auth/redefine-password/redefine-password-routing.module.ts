import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedefinePasswordPage } from './redefine-password.page';

const routes: Routes = [
  {
    path: '',
    component: RedefinePasswordPage
  },  {
    path: 'redefine-confirm',
    loadChildren: () => import('./redefine-confirm/redefine-confirm.module').then( m => m.RedefineConfirmPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedefinePasswordPageRoutingModule {}
