import { Injectable } from '@angular/core';
import { Servicios } from '../interfaces/servicio';
import { SERVICIOS } from '../db/servicios.db';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  getByUrl(miUrl: string) {
    throw new Error('Method not implemented.');
  }

  private arrServicio: Servicios [];

  constructor() { 
    this.arrServicio = SERVICIOS;
  }
getAll() : Servicios []{
  return this.arrServicio;
}
geTbYuRL(miUrl: string): Servicios | undefined {

  return this.arrServicio.find(serv => serv.url == miUrl)
}
}

