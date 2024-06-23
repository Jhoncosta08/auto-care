import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedefinePasswordPageRoutingModule } from './redefine-password-routing.module';

import { RedefinePasswordPage } from './redefine-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedefinePasswordPageRoutingModule
  ],
  declarations: [RedefinePasswordPage]
})
export class RedefinePasswordPageModule {}
