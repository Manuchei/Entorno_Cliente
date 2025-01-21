import { IProduct } from './interfaces/iproduct';
import { HttpClientModule } from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductService } from './services/product.service';
import { ProductFormComponent } from "./components/product-form/product-form.component";


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, ProductFilterComponent, ProductCardComponent, HttpClientModule, ProductFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  products: IProduct[] = []; 
  filteredProducts: IProduct[] = []; 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts();
    this.productService.products$.subscribe((products) => {
      this.products = products;
      this.filteredProducts = [...this.products];
    });
  }
  filterProducts(filters: any): void {
    console.log('Filtros recibidos:', filters);
  
    this.filteredProducts = this.products.filter((product) => {
      const nameMatch = !filters.name || product.name.toLowerCase().includes(filters.name.toLowerCase());
      const descriptionMatch = !filters.description || product.description.toLowerCase().includes(filters.description.toLowerCase());
      const categoryMatch = !filters.category || product.category === filters.category;
      const minPriceMatch = product.price >= (filters.minPrice || 0);
      const maxPriceMatch = product.price <= (filters.maxPrice || Infinity);
  
      const activeMatch =
        filters.active === null || filters.active === undefined || product.active === filters.active;
  
      return nameMatch && descriptionMatch && categoryMatch && minPriceMatch && maxPriceMatch && activeMatch;
    });
  
    console.log('Productos filtrados:', this.filteredProducts);
  }
  
  
  
  
  
  
}
