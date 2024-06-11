import { Component } from '@angular/core';
import {RemoveBgService} from '../../../services/remove-bg.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage {
  carImg: string = '';


  constructor(private removeBgService: RemoveBgService) { }


  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.removeBgService.removeBackground(file).subscribe((result: Blob): void => {
      const url: string = URL.createObjectURL(result);
      console.log('url: ', url);
      this.carImg = url;
    });
  }


}
