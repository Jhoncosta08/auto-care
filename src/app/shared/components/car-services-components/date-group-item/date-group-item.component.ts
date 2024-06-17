import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-date-group-item',
  templateUrl: './date-group-item.component.html',
  styleUrls: ['./date-group-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateGroupItemComponent {
  @Input({required: true}) date: string | null = null;
}
