import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SplashScreenOutPageRoutingModule } from './splash-screen-out-routing.module';
import { SplashScreenOutPage } from './splash-screen-out.page';

@NgModule({
  declarations: [
    SplashScreenOutPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashScreenOutPageRoutingModule
  ],
})
export class SplashScreenOutPageModule {}
