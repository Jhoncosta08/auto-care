import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordConfirmPageRoutingModule } from './forgot-password-confirm-routing.module';

import { ForgotPasswordConfirmPage } from './forgot-password-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordConfirmPageRoutingModule
  ],
  declarations: [ForgotPasswordConfirmPage]
})
export class ForgotPasswordConfirmPageModule {}
