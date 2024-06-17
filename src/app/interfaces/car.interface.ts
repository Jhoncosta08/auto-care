import {ICarBrandType} from '../types/car-brands.type';

export interface ICarInterface {
  id?: string,
  brand: ICarBrandType,
  model: string,
  yearOfManufacture: string,
  modelYear: string,
  color: string,
  fuel: 'Alcool' | 'Gasolina' | 'Flex' | 'Elétrico' | 'Híbrido',
  photo?: string
}




