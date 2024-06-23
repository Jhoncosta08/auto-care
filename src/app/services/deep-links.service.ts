import { Injectable } from '@angular/core';
import {DeeplinkMatch, Deeplinks} from '@awesome-cordova-plugins/deeplinks/ngx';
import {NavController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DeepLinksService {

  constructor(
    private deepLinks: Deeplinks,
    private navControl: NavController
  ) { }

  public initDeepLinks(): void {
    this.deepLinks.route({
      '/redefine-password': {}
    }).subscribe({
      next: (match: DeeplinkMatch): void => {
        const oobCode = match.$args['oobCode'];
        if (oobCode) {
          this.redirectDeepLinkRoute(match.$route);
        } else {
          console.error('Nenhum oobCode encontrado no deep link', match);
          this.redirectRoute('splash-screen-in');
        }
      }, error: noMatch => {
        console.error('Nenhum deep link encontrado para a rota passada', noMatch);
      }
    });
  }

  private redirectDeepLinkRoute(routeUrl: string, oobCode?: string): void {
    switch (routeUrl) {
      case 'redefine-password' || '/redefine-password':
        this.redirectRoute(`${routeUrl}?oobCode=${oobCode}`);
        break;
      default:
        console.error('Rota de deep link não encontrada:', routeUrl);
        this.redirectRoute('splash-screen-in');
        break;
    }
  }

  private redirectRoute(url: string): void {
    void this.navControl.navigateForward(url);
  }
}
