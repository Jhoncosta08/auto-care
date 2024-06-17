import { Injectable } from '@angular/core';
import {IServiceCarInterface} from '../../interfaces/service.interface';

@Injectable({
  providedIn: 'root'
})
export class CarWashService {
  carServicesList: IServiceCarInterface[] = [
    {
      id: 'carWashId-1',
      serviceDate: '30/06/2024',
      serviceType: 'car-wash',
      serviceInfo: [
        {
          serviceShopName: 'Amorin Higienização',
          serviceAttendantName: 'Amorin',
          serviceName: 'Limpeza externa',
          serviceDescription: 'Foi feita uma limpeza externa, com shampoo neutro, foi passado cera',
          servicePrice: 201.50
        },
        {
          serviceShopName: 'Amorin Higienização',
          serviceAttendantName: 'Amorin',
          serviceName: 'Lavagem de rodas',
          serviceDescription: 'Foi lavado as rodas do carro, foi passado um produto para limpeza e feito uma restauração nas rodas',
          servicePrice: 15000.50
        }
      ]
    },
    {
      id: 'carWashId-2',
      serviceDate: '01/07/2024',
      serviceType: 'car-wash',
      serviceInfo: [
        {
          serviceShopName: 'Amorin Higienização',
          serviceAttendantName: 'Amorin',
          serviceName: 'Limpeza interna',
          serviceDescription: 'Foi feito uma limpeza completa dentro do carro, foi passado limpa plásticos e uma sera de plásticos.',
          servicePrice: 150
        }
      ]
    }
  ];

  constructor() { }

}
