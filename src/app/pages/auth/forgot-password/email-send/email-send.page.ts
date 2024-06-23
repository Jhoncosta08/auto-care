import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-email-send',
  templateUrl: './email-send.page.html'
})
export class EmailSendPage {
  userEmail: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.userEmail = this.activatedRoute.snapshot.paramMap.get('email');
  }
}
