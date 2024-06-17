export interface IServiceCarInterface {
  id?: string,
  serviceType: 'mechanical' | 'vehicle-review' | 'car-wash' | 'others',
  serviceDate: string,
  nextServiceDate?: string,
  serviceInfo: IServiceInfo[]
}

export interface IServiceInfo {
  serviceShopName: string,
  serviceAttendantName: string,
  serviceName: string,
  serviceDescription: string,
  servicePrice: number
}
