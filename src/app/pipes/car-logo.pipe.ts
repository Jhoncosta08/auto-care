import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carLogo',
  standalone: true
})
export class CarLogoPipe implements PipeTransform {
  private path: string = 'assets/icon/car-brands';
  private carBrands: { [carBrandName: string]: string } = {
    'aston martin': `${this.path}/aston-martin-logo.png`,
    'audi': `${this.path}/audi-logo.png`,
    'bentley': `${this.path}/bentley-logo.png`,
    'bmw': `${this.path}/bmw-logo.png`,
    'byd': `${this.path}/byd-logo.png`,
    'chery': `${this.path}/chery-logo.png`,
    'chevrolet': `${this.path}/chevrolet-logo.png`,
    'chrysler': `${this.path}/chrysler-logo.png`,
    'citroen': `${this.path}/citroen-logo.png`,
    'dodge': `${this.path}/dodge-logo.png`,
    'ferrari': `${this.path}/ferrari-logo.png`,
    'fiat': `${this.path}/fiat-logo.png`,
    'ford': `${this.path}/ford-logo.png`,
    'harley': `${this.path}/harley-logo.png`,
    'honda': `${this.path}/honda-logo.png`,
    'hyundai': `${this.path}/hyundai-logo.png`,
    'jac': `${this.path}/jac-logo.png`,
    'jaguar': `${this.path}/jaguar-logo.png`,
    'jeep': `${this.path}/jeep-logo.png`,
    'kawasaki': `${this.path}/kawasaki-logo.png`,
    'lamborghini': `${this.path}/lamborghini-logo.png`,
    'land rover': `${this.path}/land-rover-logo.png`,
    'lexus': `${this.path}/lexus-logo.png`,
    'mercedes': `${this.path}/mercedes-logo.png`,
    'mini cooper': `${this.path}/mini-logo.png`,
    'mitsubishi': `${this.path}/mitsubishi-logo.png`,
    'nissan': `${this.path}/nissan-logo.png`,
    'peugeot': `${this.path}/peugeot-logo.png`,
    'renault': `${this.path}/renault-logo.png`,
    'subaru': `${this.path}/subaru-logo.png`,
    'suzuki': `${this.path}/suzuki-logo.png`,
    'toyota': `${this.path}/toyota-logo.png`,
    'volkswagen': `${this.path}/volkswagen-logo.png`,
    'volvo': `${this.path}/volvo-logo.png`,
    'yamaha': `${this.path}/yamaha-logo.png`,
  };


  transform(carBrandName: string): string {
    return this.carBrands[carBrandName.toLowerCase() || ''];
  }

}
