import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {CarFooterNavComponent} from './components/car-footer-nav/car-footer-nav.component';
import {DynamicBtnComponent} from './components/dynamic-btn/dynamic-btn.component';
import {SimpleSpinnerComponent} from './components/simple-spinner/simple-spinner.component';
import {CarCardListItemComponent} from './components/car-card-list-item/car-card-list-item.component';
import {CarLogoPipe} from '../pipes/car-logo.pipe';
import {DateGroupItemComponent} from './components/car-services-components/date-group-item/date-group-item.component';
import {ServiceCardComponent} from './components/car-services-components/service-card/service-card.component';
import {TitleAddComponent} from './components/title-add/title-add.component';

@NgModule({
  declarations: [
    CarFooterNavComponent,
    DynamicBtnComponent,
    SimpleSpinnerComponent,
    CarCardListItemComponent,
    DateGroupItemComponent,
    ServiceCardComponent,
    TitleAddComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    CarLogoPipe
  ],
  exports: [
    CarFooterNavComponent,
    DynamicBtnComponent,
    SimpleSpinnerComponent,
    CarCardListItemComponent,
    DateGroupItemComponent,
    ServiceCardComponent,
    TitleAddComponent
  ]
})
export class SharedModule { }
