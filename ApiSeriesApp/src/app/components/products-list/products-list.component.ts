import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { Product } from '../../models/Product';

@Component({
  standalone: true,
  selector: 'app-products-list',
  imports: [CommonModule, ProductCardComponent, ProductFilterComponent],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  products: Product[] = []; // Lista completa de productos
  filteredProducts: Product[] = []; // Lista de productos filtrados

  constructor() {
    // Simulación de datos iniciales
    this.products = [
      { _id: '1', name: 'Producto 1', description: 'Desc 1', price: 100, category: 'hombre', image: '', active: true },
      { _id: '2', name: 'Producto 2', description: 'Desc 2', price: 200, category: 'mujer', image: '', active: false },
    ];
    this.filteredProducts = [...this.products];
  }

  filterProducts(filters: any): void {
    // Aplica los filtros aquí
    this.filteredProducts = this.products.filter((product) => {
      return (
        (!filters.name || product.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.category || product.category === filters.category) &&
        (product.price >= (filters.minPrice || 0)) &&
        (product.price <= (filters.maxPrice || Infinity)) &&
        (filters.active === null || product.active === filters.active)
      );
    });
  }
}
