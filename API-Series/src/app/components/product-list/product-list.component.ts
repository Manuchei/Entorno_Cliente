import { IProduct } from './../../interfaces/iproduct';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/ProductService';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from "../product-filter/product-filter.component";
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductFilterComponent, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data; // Asigna los productos obtenidos a la lista
      },
      (error) => {
        console.error('Error al cargar los productos:', error); // Muestra el error si falla
      }
    );
  }

  deleteProduct(productId: string): void {
    this.productService.deleteProductById(productId).subscribe(() => {
      this.products = this.products.filter(product => product.id !== productId);
    });
  }
}