import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {DeeplinkMatch, Deeplinks} from '@awesome-cordova-plugins/deeplinks/ngx';
import {NavController, Platform} from '@ionic/angular';

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
    private deepLinks: Deeplinks,
    private navControl: NavController,
  ) {
    this.initializedApp();
  }

  showCarFooterNavMenu(): boolean {
    const currentUrl: string = this.router.url.split('/')[1];
    return this.allowCarFooterMenuRoutes.some((route: string): boolean => currentUrl === route);
  }

  private initializedApp(): void {
    this.platform.ready().then((): void => {
      this.initDeepLinks();
    });
  }

  private initDeepLinks() {
    this.deepLinks.route({
      '/redefine-password': {}
    }).subscribe({
      next: (match: DeeplinkMatch): void => {
        this.redirectDeepLinkRoute(match.$route);
      }, error: noMatch => {
        console.error('Nenhum deep link encontrado para a rota passada', noMatch);
      }
    });
  }

  redirectDeepLinkRoute(routeUrl: 'redefine-password'): void {
    switch (routeUrl) {
      case 'redefine-password':
        this.redirectRoute(routeUrl);
        break;
      default:
        console.error('Rota de deep link não encontrada:', routeUrl);
        this.redirectRoute('splash-screen-in');
        break;
    }
  }

  redirectRoute(url: string): void {
    void this.navControl.navigateForward(url);
  }

}
