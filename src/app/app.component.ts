import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Platform} from '@ionic/angular';
import {DeepLinksService} from './services/deep-links.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private allowCarFooterMenuRoutes: string[] = ['my-car', 'vehicle-review', 'mechanical-services'];

  constructor(
    private router: Router,
    private platform: Platform,
    private deepLinksService: DeepLinksService
  ) {
    this.initializedApp();
  }

  private initializedApp(): void {
    this.platform.ready().then((): void => {
      this.deepLinksService.initDeepLinks();
    });
  }

  showCarFooterNavMenu(): boolean {
    const currentUrl: string = this.router.url.split('/')[1];
    return this.allowCarFooterMenuRoutes.some((route: string): boolean => currentUrl === route);
  }

}
