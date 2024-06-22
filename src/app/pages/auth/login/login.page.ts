import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {ILoginInterface} from '../../../interfaces/login.interface';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['../auth.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navControl: NavController,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  moveRouteForward(url: 'sign-up' | 'forgot-password' | 'my-cars-list'): void {
    void this.navControl.navigateForward(url);
  }

  onLoginSubmit(): void {
    const loginFormData: ILoginInterface = this.loginForm.value;
    if (this.loginForm.valid && loginFormData) {
      this.authService.login(loginFormData).then((): void => {
        this.moveRouteForward('my-cars-list');
      });
    }
  }

}
