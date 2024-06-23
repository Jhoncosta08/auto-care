import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-redefine-password',
  templateUrl: './redefine-password.page.html',
  styleUrls: ['../auth.scss'],
})
export class RedefinePasswordPage {
  redefinePasswordForm: FormGroup;
  showPasswordLengthHint: boolean = false;
  showPasswordDifferent: boolean = false;
  oobCode: string | null = null;
  showResetSpinner: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navControl: NavController
  ) {
    this.oobCode = new URLSearchParams(document.location.search).get('oobCode');
    this.redefinePasswordForm = this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  checkPasswordLength(): void {
    this.showPasswordLengthHint = true;
    const {password} = this.redefinePasswordForm.value;
    if (password && password.length > 6) {
      this.showPasswordLengthHint = false;
    }
  }

  checkIfDifferentPassword(): void {
    const {password, confirmPassword} = this.redefinePasswordForm.value;
    if (password !== confirmPassword) {
      this.showPasswordDifferent = true;
    }
  }

  onResetPassword(event: Event): void {
    event.preventDefault();
    const {password, confirmPassword} = this.redefinePasswordForm.value;
    if (this.redefinePasswordForm.valid && password && confirmPassword && this.oobCode) {
      this.showResetSpinner = true;
      this.authService.resetPassword(confirmPassword, this.oobCode).then((): void => {
        this.showResetSpinner = false;
        void this.navControl.navigateForward('redefine-password/redefine-confirm');
      }).catch((): void => {
        this.showResetSpinner = false;
      });
    }
  }

}
