import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  checkCurrentRouteCarService(url: string): string {
    switch (true) {
      case url.includes('mechanical-services'):
        return 'mechanical-services';
      case url.includes('vehicle-review'):
        return 'vehicle-review';
      case url.includes('car-wash'):
        return 'car-wash';
      default:
        return '';
    }
  }

}
