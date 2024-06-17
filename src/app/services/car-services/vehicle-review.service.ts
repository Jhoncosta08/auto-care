import { Injectable } from '@angular/core';
import {IServiceCarInterface} from '../../interfaces/service.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleReviewService {
  carServicesList: IServiceCarInterface[] = [
    {
      id: 'mechanicalServiceId-1',
      serviceDate: '30/06/2024',
      serviceInfo: [
        {
          serviceShopName: 'Mecânica Fortaleza',
          serviceAttendantName: 'Marcelo',
          serviceName: 'Vazamento na tampa da junta de válvula',
          serviceDescription: 'Foi constatado um vazamento de óleo na junta da tampa de válvula, precisou ser trocada.',
          servicePrice: 201.50
        },
        {
          serviceShopName: 'Mecânica Fortaleza',
          serviceAttendantName: 'Marcelo',
          serviceName: 'Vazamento de liquido de arrefecimento',
          serviceDescription: 'Foi constatado um vazamento de liquido de arrefecimento, foi trocado uma mangueira',
          servicePrice: 15000.50
        }
      ]
    },
    {
      id: 'mechanicalServiceId-2',
      serviceDate: '01/07/2024',
      serviceInfo: [
        {
          serviceShopName: 'Mecânica Fortaleza',
          serviceAttendantName: 'Marcelo',
          serviceName: 'Vazamento de ar',
          serviceDescription: 'Foi constatado um vazamento de ar do coletor do motor, foi preciso trocar uma presilha',
          servicePrice: 150
        }
      ]
    }
  ];

  constructor() { }

}
