import { Router, RouterLink } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-botonera',
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {

  UsersService = inject(UsersService);
  router = inject(Router);

  @Input() _id: string;
  @Input() parent: string;

  constructor() {
    this._id = '';
    this.parent = '';
  }

  borrarSerie(_id : string) {
//Llamara al servicio para eliminar la serie
    }
}



