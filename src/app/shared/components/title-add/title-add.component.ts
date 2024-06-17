import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-title-add',
  templateUrl: './title-add.component.html',
  styleUrls: ['./title-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleAddComponent {
  @Input({required: true}) title: string = '';
  @Output() buttonAction: EventEmitter<void> = new EventEmitter();
}
