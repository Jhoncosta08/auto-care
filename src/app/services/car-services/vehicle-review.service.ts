import { Injectable } from '@angular/core';
import {IServiceCarInterface} from '../../interfaces/service.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleReviewService {
  carServicesList: IServiceCarInterface[] = [
    {
      id: 'vehicleReviewServiceId-1',
      serviceType: 'vehicle-review',
      serviceDate: '30/06/2024',
      nextServiceDate: '30/12/2024',
      serviceInfo: [
        {
          serviceShopName: 'Mecânica Fortaleza',
          serviceAttendantName: 'Marcelo',
          serviceName: 'Troca de óleo',
          serviceDescription: 'Foi trocado o óleo do carro',
          servicePrice: 201.50
        },
        {
          serviceShopName: 'Mecânica Fortaleza',
          serviceAttendantName: 'Marcelo',
          serviceName: 'Troca de filtro',
          serviceDescription: 'Foi trocado o filtro de óleo',
          servicePrice: 15000.50
        }
      ]
    },
    {
      id: 'vehicleReviewServiceId-2',
      serviceType: 'vehicle-review',
      serviceDate: '01/07/2024',
      nextServiceDate: '01/01/2024',
      serviceInfo: [
        {
          serviceShopName: 'Mecânica Fortaleza',
          serviceAttendantName: 'Marcelo',
          serviceName: 'Troca de filtro',
          serviceDescription: 'Foi trocado o filtro de ar do carro',
          servicePrice: 150
        }
      ]
    }
  ];

  constructor() { }

}
