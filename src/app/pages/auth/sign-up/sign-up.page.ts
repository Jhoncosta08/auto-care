import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {IUserInterface} from '../../../interfaces/user.interface';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['../auth.scss'],
})
export class SignUpPage {
  signUpForm: FormGroup;
  isPasswordValid: boolean = true;
  showAuthSpinner: boolean = false;
  showPasswordLengthHint: boolean = true;

  constructor(
    private fb: FormBuilder,
    private navControl: NavController,
    private authService: AuthService,
  ) {
    this.signUpForm = this.fb.group({
      displayName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
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

  checkPasswordLength(): void {
    const {password} = this.signUpForm.value;
    password.length < 6 ? this.showPasswordLengthHint = true : this.showPasswordLengthHint = false;
  }

  onSignUpSubmit(event: Event): void {
    event.preventDefault();
    this.showAuthSpinner = true;
    const userData: IUserInterface = this.signUpForm.value;
    if (this.signUpForm.valid && this.isPasswordValid && userData) {
      this.authService.registerUser(userData).then((): void  => {
        this.showAuthSpinner = false;
        void this.navControl.navigateForward('my-cars-list');
      });
    } else {
      this.showAuthSpinner = false;
    }
  }


}
