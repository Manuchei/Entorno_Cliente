import { Component } from '@angular/core';
import { Iblog } from '../../interfaces/iblog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  isBtnEnable: boolean = true;

  arrBlog: Iblog[] = [];

  nuevoBlog: Iblog = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha_publicacion: '',
  };

  cargarDatos(): string {
    let html: string = '';
    this.arrBlog.forEach((blog) => {
      html += `<p>Titulo: ${blog.titulo}</p> <p>Imagen: ${blog.imagen}</p> <p>Texto: ${blog.texto}</p> <p>Fecha publicacion: ${blog.fecha_publicacion}</p> <hr><br>`;
    });

    return html;
  }

  mensajeError = false;

  validarCampos(): void {
    // Verifica si algún campo está vacío
    this.mensajeError =
      !this.nuevoBlog.titulo ||
      !this.nuevoBlog.imagen ||
      !this.nuevoBlog.texto ||
      !this.nuevoBlog.fecha_publicacion;
  }

  guardarNoticia(): void {
    if (!this.mensajeError) {
      this.arrBlog.push({ ...this.nuevoBlog });
      console.log('Noticia guardada:', this.nuevoBlog);
      this.limpiarFormulario();
    } else {
      console.log('No se puede guardar, falta algún campo');
    }
  }

  limpiarFormulario(): void {
    this.nuevoBlog = {
      titulo: '',
      imagen: '',
      texto: '',
      fecha_publicacion: '',
    };
    this.mensajeError = false; // Resetear el error
  }
}
