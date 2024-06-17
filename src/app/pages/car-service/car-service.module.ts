import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarServicePageRoutingModule } from './car-service-routing.module';

import { CarServicePage } from './car-service.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CarServicePageRoutingModule,
        SharedModule
    ],
  declarations: [CarServicePage]
})
export class CarServicePageModule {}
