import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  httpClient = inject(HttpClient);
  private baseUrl: string = 'https://peticiones.online/api/users';

  constructor() {}

  getAllWithPromises(): Promise<User[]> {
    return lastValueFrom(this.httpClient.get<User[]>(this.baseUrl));
  }

  getById(_id: string): Promise<User> {
    return lastValueFrom(this.httpClient.get<User>(`${this.baseUrl}/${_id}`));
  }
}
