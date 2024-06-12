import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RemoveBgService {
  private apiKey: string = 'BsQ4pRQAGQEbpep4gYfmmuxC';
  private apiUrl: string = 'https://api.remove.bg/v1.0/removebg';


  constructor(private http: HttpClient) { }


  removeBackground(image: File): Observable<Blob> {
    const formData: FormData = new FormData();
    formData.append('image_file', image);
    formData.append('size', 'auto');
    return this.http.post(this.apiUrl, formData, {
      headers: {'X-Api-Key': this.apiKey}, responseType: 'blob'
    });
  }


}
