import { ProductosService } from './../../services/productos.service';
import { Component, inject } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-productos-list',
  imports: [ProductCardComponent],
  templateUrl: './productos-list.component.html',
  styleUrl: './productos-list.component.css',
})
export class ProductosListComponent {
  misProductos: Producto[];

  productoService = inject(ProductosService);

  constructor() {
    this.misProductos = [];
  }

  ngOnInit(): void {
    this.misProductos = this.productoService.getAll();
  }
}
