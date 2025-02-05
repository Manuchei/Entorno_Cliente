import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Serie } from '../interfaces/serie';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  httpClient = inject(HttpClient);
  private baseUrl: string = 'https://peticiones.online/api/series';

  constructor() {}

  getAllWithObservables(): Observable<Serie[]> {
    return this.httpClient.get<Serie[]>(this.baseUrl);
  }

  getAllWithPromises(): Promise<Serie[]> {
    return lastValueFrom(this.httpClient.get<Serie[]>(this.baseUrl));
  }

  //Promesas
  getById(_id: String): Promise<Serie> {
    return lastValueFrom(this.httpClient.get<Serie>(`${this.baseUrl}/${_id}`));
  }

  //Observable
  getByIdWithObservable(_id: string): Observable<Serie> {
    return this.httpClient.get<Serie>(`${this.baseUrl}/${_id}`);
  }
}
