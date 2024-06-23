import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['../auth.scss'],
})
export class ForgotPasswordPage {
  forgotForm: FormGroup;
  showForgotPasswordSpinner: boolean = false;

  constructor(
    private fb: FormBuilder,
    private navControl: NavController,
    private authService: AuthService,
  ) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  moveRouteForward(): void {
    void this.navControl.navigateForward('login');
  }

  onForgotSubmit(event: Event): void {
    event.preventDefault();
    const {email} = this.forgotForm.value;
    if (this.forgotForm.valid && email) {
      this.showForgotPasswordSpinner = true;
      this.authService.forgotPassword(email).then((): void => {
        this.showForgotPasswordSpinner = false;
        void this.navControl.navigateForward(`forgot-password/email-send/${email}`);
      }).catch((): void => {
        this.showForgotPasswordSpinner = false;
      });
    }
  }

}
