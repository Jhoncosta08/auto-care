import {Component, Input} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-car-footer-nav',
  templateUrl: './car-footer-nav.component.html',
  styleUrls: ['./car-footer-nav.component.scss'],
})
export class CarFooterNavComponent {
  @Input({required: true}) carId: string = '';

  constructor(private navControl: NavController) { }

  moveRouteForward(url: 'my-car' | 'vehicle-review' | 'mechanical-services'): void {
    let routeUrl: string = '';
    switch (url) {
      case 'my-car':
        routeUrl = `my-car/${this.carId}`;
        break;
      case 'vehicle-review':
        routeUrl = `my-car/${this.carId}/vehicle-review`;
        break;
      case 'mechanical-services':
        routeUrl = `my-car/${this.carId}/mechanical-services`;
        break;
    }
    if (routeUrl) {
      void this.navControl.navigateForward(routeUrl);
    }
  }

}
