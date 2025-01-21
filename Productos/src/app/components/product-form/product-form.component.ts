import { IProduct } from './../../interfaces/iproduct';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  standalone: true,
  selector: 'app-product-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0.01)]],
      category: ['', [Validators.required]],
      image: ['', [Validators.required]],
      active: [true],
    });
  }

  addProduct(): void {
    if (this.productForm.valid) {
      const newProduct: IProduct = this.productForm.value;
      this.productService.addProduct(newProduct);
      alert('Producto añadido correctamente');
      this.productForm.reset();
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}
