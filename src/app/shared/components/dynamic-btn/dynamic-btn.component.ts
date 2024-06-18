import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dynamic-btn',
  templateUrl: './dynamic-btn.component.html',
  styleUrls: ['./dynamic-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicBtnComponent {
  @Input() fullWidth: boolean = false;
  @Input({required: true}) buttonText: string = 'BUTTON';
  @Input({required: true}) buttonStyle: 'outline' | 'outline-black' | 'danger' = 'outline';
  @Input() buttonType: 'button' | 'submit' = 'button';
  @Input({required: true}) buttonDisable: boolean = false;
  @Output() buttonAction: EventEmitter<void> = new EventEmitter();
}
