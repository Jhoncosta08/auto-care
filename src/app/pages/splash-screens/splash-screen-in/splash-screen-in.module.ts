import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SplashScreenInPageRoutingModule } from './splash-screen-in-routing.module';
import { SplashScreenInPage } from './splash-screen-in.page';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [
    SplashScreenInPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashScreenInPageRoutingModule,
    SharedModule
  ],
})
export class SplashScreenInPageModule {}
