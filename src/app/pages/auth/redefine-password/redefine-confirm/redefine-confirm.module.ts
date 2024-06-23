import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedefineConfirmPageRoutingModule } from './redefine-confirm-routing.module';

import { RedefineConfirmPage } from './redefine-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedefineConfirmPageRoutingModule
  ],
  declarations: [RedefineConfirmPage]
})
export class RedefineConfirmPageModule {}
