import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedefinePasswordPageRoutingModule } from './redefine-password-routing.module';

import { RedefinePasswordPage } from './redefine-password.page';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedefinePasswordPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [RedefinePasswordPage]
})
export class RedefinePasswordPageModule {}
