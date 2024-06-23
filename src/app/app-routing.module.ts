import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'splash-screen-in',
    pathMatch: 'full'
  },
  {
    path: 'splash-screen-in',
    loadChildren: () => import('./pages/splash-screens/splash-screen-in/splash-screen-in.module').then( m => m.SplashScreenInPageModule)
  },
  {
    path: 'splash-screen-out',
    loadChildren: () => import('./pages/splash-screens/splash-screen-out/splash-screen-out.module').then( m => m.SplashScreenOutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/auth/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'redefine-password',
    loadChildren: () => import('./pages/auth/redefine-password/redefine-password.module').then(m => m.RedefinePasswordPageModule)
  },
  {
    path: 'my-car/:carId',
    loadChildren: () => import('./pages/my-car/my-car.module').then(m => m.MyCarPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'my-cars-list',
    loadChildren: () => import('./pages/my-cars-list/my-cars-list.module').then(m => m.MyCarsListPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'add-car',
    loadChildren: () => import('./pages/add-car/add-car.module').then(m => m.AddCarPageModule),
    canActivate: [AuthGuard],
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
