import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['../auth.scss'],
})
export class SignUpPage {
  signUpForm: FormGroup;
  isPasswordValid: boolean = true;

  constructor(private fb: FormBuilder, private navControl: NavController) {
    this.signUpForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  moveRouteForward(url: 'login'): void {
    void this.navControl.navigateForward(url);
  }

  checkThePasswords(): void {
    const {password, confirmPassword} = this.signUpForm.value;
    this.isPasswordValid = password === confirmPassword;
  }

  onSignUpSubmit(): void {
    if (this.signUpForm.invalid && this.isPasswordValid) {
      console.log('form: ', this.signUpForm.value);
    }
  }


}
