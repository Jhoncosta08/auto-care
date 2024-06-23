import {Component} from '@angular/core';
import {RemoveBgService} from '../../services/remove-bg.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage {
  carForm: FormGroup;

  constructor(
    private removeBgService: RemoveBgService,
    private fb: FormBuilder,
  ) {
    this.carForm = this.fb.group({

    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.removeBgService.removeBackground(file).subscribe({
      next: (imgResult: Blob): void => {
        console.log('image: ', imgResult);
      },
      error: err => {
        console.error('Erro ao remover o fundo da imagem:', err);
      }
    });
  }

}
