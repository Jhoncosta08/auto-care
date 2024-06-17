import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {ICarInterface} from '../../interfaces/car.interface';

@Component({
  selector: 'app-my-cars-list',
  templateUrl: './my-cars-list.page.html',
  styleUrls: ['./my-cars-list.page.scss'],
})
export class MyCarsListPage{
  userCarList: ICarInterface[] = [
    {
      id: '1',
      brand: 'lamborghini',
      model: 'Aventador',
      yearOfManufacture: '2011',
      modelYear: '2012',
      color: 'Preto',
      fuel: 'Gasolina',
    },
    {
      id: '2',
      brand: 'fiat',
      model: 'uno',
      yearOfManufacture: '2012',
      modelYear: '2013',
      color: 'Prata',
      fuel: 'Gasolina',
    }
  ];
  showSpinner: boolean = true;

  constructor(
    private navControl: NavController
  ) { }

  ionViewWillEnter(): void {
    setTimeout((): boolean => this.showSpinner = false, 1000);
  }

  goToCarDetail(car: ICarInterface):void  {
    if (car && car.id) {
      void this.navControl.navigateForward(`my-car/${car.id}`);
    }
  }

  addNewVehicle(): void {
    console.log('addNewVehicle');
  }

}
