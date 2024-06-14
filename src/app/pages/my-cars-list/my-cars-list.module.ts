import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCarsListPageRoutingModule } from './my-cars-list-routing.module';

import { MyCarsListPage } from './my-cars-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCarsListPageRoutingModule
  ],
  declarations: [MyCarsListPage]
})
export class MyCarsListPageModule {}
