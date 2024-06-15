import {Component} from '@angular/core';
import {ICar} from '../../interfaces/car.interface';

@Component({
  selector: 'app-my-car',
  templateUrl: './my-car.page.html',
  styleUrls: ['./my-car.page.scss'],
})
export class MyCarPage {
  currentSelectedCar: ICar = {
    id: '1',
    brand: 'lamborghini',
    model: 'Aventador',
    yearOfManufacture: '2011',
    modelYear: '2012',
    color: 'Preto',
    fuel: 'Gasolina',
  }

  constructor() { }

}
