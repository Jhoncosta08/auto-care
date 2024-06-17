import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IServiceCarInterface} from '../../../../interfaces/service.interface';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceCardComponent {
  @Input({required: true}) carService: IServiceCarInterface[] = [];
  @Output() clickedCarService: EventEmitter<IServiceCarInterface> = new EventEmitter<IServiceCarInterface>();
}
