import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private allowCarFooterMenuRoutes: string[] = ['my-car', 'vehicle-review', 'mechanical-services'];

  constructor(private router: Router) {}

  showCarFooterNavMenu(): boolean {
    const currentUrl: string = this.router.url.split('/')[1];
    return this.allowCarFooterMenuRoutes.some((route: string): boolean => currentUrl === route);
  }

}
