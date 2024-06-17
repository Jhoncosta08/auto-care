import { Component } from '@angular/core';
import {IServiceCarInterface} from '../../../interfaces/service.interface';
import {MechanicalService} from '../../../services/car-services/mechanical.service';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mechanical-services',
  templateUrl: './mechanical-services.page.html'
})
export class MechanicalServicesPage {
  carServicesList: IServiceCarInterface[] = this.mechanicalService.carServicesList;

  constructor(
    private mechanicalService: MechanicalService,
    private navControl: NavController,
    private router: Router
  ) { }

  goToMechanicalServiceDetailPage(carService: IServiceCarInterface): void {
    const currentUrl: string = this.router.url;
    if(carService && carService.id && currentUrl) {
      void this.navControl.navigateForward(`${currentUrl}/mechanical-service-detail/${carService.id}`);
    }
  }

}
