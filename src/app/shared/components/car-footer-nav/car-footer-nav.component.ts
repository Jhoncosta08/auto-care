import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-car-footer-nav',
  templateUrl: './car-footer-nav.component.html',
  styleUrls: ['./car-footer-nav.component.scss'],
})
export class CarFooterNavComponent {
  carIdParam: string | null | undefined;

  constructor(
    private navControl: NavController,
    private route: ActivatedRoute
  ) {}

  moveRouteForward(selectedUrl: 'my-car' | 'vehicle-review' | 'mechanical-services' | 'car-wash'): void {
    this.carIdParam = this.route.firstChild?.snapshot.paramMap.get('carId');
    if (this.carIdParam && selectedUrl) {
      const url: string = selectedUrl === 'my-car' ? `${selectedUrl}/${this.carIdParam}` : `my-car/${this.carIdParam}/${selectedUrl}`;
      void this.navControl.navigateForward(url);
    }
  }


}
