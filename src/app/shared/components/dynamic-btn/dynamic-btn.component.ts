import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dynamic-btn',
  templateUrl: './dynamic-btn.component.html',
  styleUrls: ['./dynamic-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicBtnComponent {
  @Input({required: true}) buttonText: string = 'BUTTON';
  @Input({required: true}) buttonType: 'outline' | 'danger' = 'outline';
  @Input({required: true}) buttonDisable: boolean = false;
  @Output() buttonAction: EventEmitter<void> = new EventEmitter();
}
