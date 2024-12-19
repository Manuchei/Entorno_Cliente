import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Itrabajador } from '../../interfaces/itrabajador';

@Component({
  selector: 'app-trabajador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './trabajador.component.html',
  styleUrl: './trabajador.component.css',
})
export class TrabajadorComponent {
  isBtnEnable: boolean = true;

  arrTrabajadores: Itrabajador[] = []; //Se cambia any por Itrabajador

  nuevoTrabajador: Itrabajador = {
    // se cambia any por Itrabajador
    nombre: '',
    apellidos: '',
    email: '',
    edad: -1,
    telefono: '',
    cargo: 'vacio',
  };

  guardarDatos($event: any) {
    this.arrTrabajadores.push(this.nuevoTrabajador);
    console.log(this.arrTrabajadores);

    this.nuevoTrabajador = {
      //Esto reinicia reseta la memoria para no sobreescribir
      nombre: '',
      apellidos: '',
      email: '',
      edad: -1,
      telefono: '',
      cargo: "vacio"
    };
  }

  cargarDatos(): string {
    let html: string = '';
    this.arrTrabajadores.forEach((trabajador) => {
      html += `<p>Nombre: ${trabajador.nombre} ${trabajador.apellidos}</p> <p>Email: ${trabajador.email}</p> <p>Telefono: 
      ${trabajador.telefono}</p> <p>Cargo: ${trabajador.cargo}</p>
      <hr><br>`;
    });

    return html;
  }

  validarCampos() {
    if (this.nuevoTrabajador.nombre.trim().length > 3 || this.nuevoTrabajador.apellidos.trim().length > 3 || this.nuevoTrabajador.email.trim().length > 3 || this.nuevoTrabajador.telefono.trim().length > 3 || this.nuevoTrabajador.edad > 0)  {
      this.isBtnEnable = false;
    }
    else {
      this.isBtnEnable = true;
    }
  }
}
