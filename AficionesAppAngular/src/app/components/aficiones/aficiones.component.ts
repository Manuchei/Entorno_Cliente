import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iaficion } from './interfaces/iaficion';

@Component({
  selector: 'app-aficiones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './aficiones.component.html',
  styleUrl: './aficiones.component.css',
})
export class AficionesComponent {
  arrAficiones: any[];
  newAficion: any = {};

  constructor() {
    this.arrAficiones = [];
    this.newAficion = {
      aficion: '',
      nombre: '',
      nivel: '',
    };
  }

  guardarDatos(): void {
    this.arrAficiones.push(this.newAficion);
    this.newAficion = {
      aficion: '',
      nombre: '',
      nivel: '',
    };
  }
  cargarDatos(): string {
    let html: string = '';
    this.arrAficiones.forEach((element) => {
      html += `<p><strong>Aficion: </strong> ${element.aficion} -- <strong>Nombre: </strong>${element.nombre} -- <strong>Nivel: </strong>${element.nivel}</p>`;
    });

    return html;
  }
}
