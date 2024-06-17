import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICar} from '../../../interfaces/car.interface';

@Component({
  selector: 'app-car-card-list-item',
  templateUrl: './car-card-list-item.component.html',
  styleUrls: ['./car-card-list-item.component.scss'],
})
export class CarCardListItemComponent {
  @Input({required: true}) userCar: ICar | null = null;
  @Output() clickedCar: EventEmitter<ICar> = new EventEmitter();
}
