import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashScreenOutPage } from './splash-screen-out.page';

const routes: Routes = [
  {
    path: '',
    component: SplashScreenOutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashScreenOutPageRoutingModule {}
