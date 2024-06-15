import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashScreenInPage } from './splash-screen-in.page';

const routes: Routes = [
  {
    path: '',
    component: SplashScreenInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashScreenInPageRoutingModule {}
