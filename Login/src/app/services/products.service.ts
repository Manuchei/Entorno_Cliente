import { lastValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private httpClient = inject(HttpClient);
  private baseUrl = 'https://dummyjson.com/products';

  constructor() {}

  //Opción 1: Introducir manualmente la cabecera
  getAll(): Promise<any> {
    const httOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken') || '',
      }),
    };
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl, httOptions));
  }

  getById(id: string): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + '/' + id));
  }

  getAuthoritation() {
    const httOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken') || '',
      }),
    };
    return httOptions;
  }
}
