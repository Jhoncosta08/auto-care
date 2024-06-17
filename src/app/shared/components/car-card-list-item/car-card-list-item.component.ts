import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ICarInterface} from '../../../interfaces/car.interface';

@Component({
  selector: 'app-car-card-list-item',
  templateUrl: './car-card-list-item.component.html',
  styleUrls: ['./car-card-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarCardListItemComponent {
  @Input({required: true}) userCar: ICarInterface | null = null;
  @Output() clickedCar: EventEmitter<ICarInterface> = new EventEmitter();
}
