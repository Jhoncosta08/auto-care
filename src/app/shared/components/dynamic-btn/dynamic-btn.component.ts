import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dynamic-btn',
  templateUrl: './dynamic-btn.component.html',
  styleUrls: ['./dynamic-btn.component.scss'],
})
export class DynamicBtnComponent {
  @Input({required: true}) buttonText: string = 'BUTTON';
  @Input({required: true}) buttonType: 'secondary' | 'tertiary' | 'danger' | 'warn' = 'secondary';
  @Input({required: true}) buttonDisable: boolean = false;
  @Output() buttonAction: EventEmitter<void> = new EventEmitter();
}
