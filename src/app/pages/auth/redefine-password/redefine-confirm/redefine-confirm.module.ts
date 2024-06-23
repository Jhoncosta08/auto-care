import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedefineConfirmPageRoutingModule } from './redefine-confirm-routing.module';

import { RedefineConfirmPage } from './redefine-confirm.page';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedefineConfirmPageRoutingModule,
    SharedModule
  ],
  declarations: [RedefineConfirmPage]
})
export class RedefineConfirmPageModule {}
