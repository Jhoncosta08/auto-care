import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-redefine-password',
  templateUrl: './redefine-password.page.html',
  styleUrls: ['../auth.scss'],
})
export class RedefinePasswordPage {
  redefinePasswordForm: FormGroup;
  showPasswordLengthHint: boolean = false;
  showPasswordDifferent: boolean = false;

  constructor(
    private fb: FormBuilder
  ) {
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

}
