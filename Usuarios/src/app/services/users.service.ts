import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { USUARIOS } from '../db/users.db';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private arrUsers: User[]

  constructor() { 
    this.arrUsers = USUARIOS
  }

  getAll(): User[] {
    return this.arrUsers
  }

  getById(miId: number) : User | undefined{
  return this.arrUsers.find((use)=> use.id == miId);
}



}
