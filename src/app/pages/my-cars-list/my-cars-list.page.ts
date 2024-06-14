import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-my-cars-list',
  templateUrl: './my-cars-list.page.html',
  styleUrls: ['./my-cars-list.page.scss'],
})
export class MyCarsListPage{

  constructor(
    private navControl: NavController
  ) { }

  goToCarDetail(carId: string):void  {
    if (carId) {
      void this.navControl.navigateForward(`my-car/${carId}`);
    }
  }

}
