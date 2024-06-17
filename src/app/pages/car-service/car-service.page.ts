import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {MechanicalService} from '../../services/car-services/mechanical.service';
import {VehicleReviewService} from '../../services/car-services/vehicle-review.service';
import {CarWashService} from '../../services/car-services/car-wash.service';
import {IServiceCarInterface} from '../../interfaces/service.interface';
import {UtilsService} from '../../services/shared/utils.service';

@Component({
  selector: 'app-car-service',
  templateUrl: './car-service.page.html'
})
export class CarServicePage {
  private currentServiceRoute: string = '';
  private currentUrl: string = '';
  carServiceList: IServiceCarInterface[] = [];
  carServiceTitle: 'Serviço Mecânicos' | 'Revisões' | 'Limpezas' = 'Serviço Mecânicos';
  showSpinner: boolean = true;

  constructor(
    private mechanicalService: MechanicalService,
    private vehicleReviewService: VehicleReviewService,
    private carWashService: CarWashService,
    private navControl: NavController,
    private router: Router,
    private utilService: UtilsService
  ) { }

  ionViewWillEnter(): void {
    this.currentUrl = this.router.url;
    this.currentServiceRoute = this.utilService.checkCurrentRouteCarService(this.currentUrl);
    this.checkCurrentServiceAndSetValue();
  }

  checkCurrentServiceAndSetValue(): void {
    switch (this.currentServiceRoute) {
      case 'mechanical-services':
        this.carServiceTitle = 'Serviço Mecânicos';
        this.carServiceList = this.mechanicalService.carServicesList;
        this.showSpinner = false;
        break;
      case 'vehicle-review':
        this.carServiceTitle = 'Revisões';
        this.carServiceList = this.vehicleReviewService.carServicesList;
        this.showSpinner = false;
        break;
      case 'car-wash':
        this.carServiceTitle = 'Limpezas';
        this.carServiceList = this.carWashService.carServicesList;
        this.showSpinner = false;
        break;
      default:
        this.carServiceList = [];
        this.showSpinner = false;
    }
  }

  goToCarServiceDetailPage(carService: IServiceCarInterface): void {
    if(carService && carService.id && this.currentUrl && this.currentServiceRoute) {
      void this.navControl.navigateForward(`${this.currentUrl}/${this.currentServiceRoute}-detail/${carService.id}`);
    }
  }

  addCarService(): void {
    console.log('addService');
  }

}
