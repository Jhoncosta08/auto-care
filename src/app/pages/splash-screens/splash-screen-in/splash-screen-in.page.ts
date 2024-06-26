import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-splash-screen-in',
  templateUrl: './splash-screen-in.page.html',
  styleUrls: ['../splash-screens.scss'],
})
export class SplashScreenInPage {
  private isLoggedUser: boolean = false;

  constructor(private navControl: NavController) { }

  ionViewWillEnter(): void {
    this.isLoggedUser = this.checkLoggedUser();
  }

  navigateUserRoute(redirectTarget: 'login' | 'sign-up'): void {
    void this.navControl.navigateForward(this.isLoggedUser ? 'my-cars-list' : redirectTarget);
  }

  checkLoggedUser(): boolean {
    const user: string | null = localStorage.getItem('user');
    return !!user;
  }
}
