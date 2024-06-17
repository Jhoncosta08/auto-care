import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mechanical-service-detail',
  templateUrl: './mechanical-service-detail.page.html',
  styleUrls: ['./mechanical-service-detail.page.scss'],
})
export class MechanicalServiceDetailPage {

  constructor(private route: ActivatedRoute) { }

  ionViewWillEnter(): void {
    const url: string | null = this.route.snapshot.paramMap.get('mechanicalServiceId');
    console.log('url param: ', url);
  }

}
