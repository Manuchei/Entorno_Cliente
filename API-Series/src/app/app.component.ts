import { Component } from '@angular/core';
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { ProductFilterComponent } from "./components/product-filter/product-filter.component";
import {ProductsListComponent } from "./components/product-list/product-list.component";

@Component({
  selector: 'app-root',
  imports: [ProductFormComponent, ProductFilterComponent, ProductsListComponent, ProductsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'API-Series';
}
