import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['../auth.scss'],
})
export class ForgotPasswordPage {
  forgotForm: FormGroup;

  constructor(private fb: FormBuilder, private navControl: NavController) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  moveRouteForward(): void {
    void this.navControl.navigateForward('login');
  }

  onForgotSubmit(): void {
    if (this.forgotForm.valid) {
      console.log('Form: ', this.forgotForm);
      void this.navControl.navigateForward('forgot-password-confirm');
    }
  }

}
