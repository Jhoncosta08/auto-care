import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['../auth.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private navControl: NavController) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  moveRouteForward(url: 'sign-up' | 'forgot-password' | 'my-car-list'): void {
    void this.navControl.navigateForward(url);
  }

  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form: ', this.loginForm.value);
      this.moveRouteForward('my-car-list');
    }
  }

}
