import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'my-cars-list',
    pathMatch: 'full'
  },
  {
    path: 'my-car/:carId',
    loadChildren: () => import('./pages/my-car/my-car.module').then(m => m.MyCarPageModule),
  },
  {
    path: 'vehicle-review/:carId',
    loadChildren: () => import('./pages/vehicle-review/vehicle-review.module').then( m => m.VehicleReviewPageModule)
  },
  {
    path: 'mechanical-services/:carId',
    loadChildren: () => import('./pages/mechanical-services/mechanical-services.module').then( m => m.MechanicalServicesPageModule)
  },
  {
    path: 'my-cars-list',
    loadChildren: () => import('./pages/my-cars-list/my-cars-list.module').then(m => m.MyCarsListPageModule)
  },
  {
    path: 'add-car',
    loadChildren: () => import('./pages/add-car/add-car.module').then(m => m.AddCarPageModule)
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
