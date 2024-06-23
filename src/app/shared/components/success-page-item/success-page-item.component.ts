import {Component, Input} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-success-page-item',
  templateUrl: './success-page-item.component.html',
  styleUrls: ['./success-page-item.component.scss'],
})
export class SuccessPageItemComponent {
  @Input({required: true}) successPageType: 'redefine-password-success' | 'email-send-success' = 'email-send-success';
  @Input({required: true}) successPageTitle: string = '';
  @Input({required: true}) successPageText: string = '';
  @Input() valueToShow: string | null = null;

  constructor(private navControl: NavController) {}

  backToStart(): void {
    void this.navControl.navigateBack('splash-screen-in');
  }

}
