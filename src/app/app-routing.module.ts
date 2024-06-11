import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-car',
    pathMatch: 'full'
  },
  {
    path: 'my-car',
    loadChildren: () => import('./pages/car-pages/my-car/my-car.module').then(m => m.MyCarPageModule)
  },
  {
    path: 'add-car',
    loadChildren: () => import('./pages/car-pages/add-car/add-car.module').then( m => m.AddCarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
