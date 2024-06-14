import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MechanicalServicesPageRoutingModule } from './mechanical-services-routing.module';
import { MechanicalServicesPage } from './mechanical-services.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    MechanicalServicesPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MechanicalServicesPageRoutingModule,
    SharedModule
  ]
})
export class MechanicalServicesPageModule {}
