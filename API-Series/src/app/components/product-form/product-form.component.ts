import { IProduct } from './../../interfaces/iproduct';
import { ProductService } from './../../services/ProductService';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      active: [false],
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const newProduct: IProduct = this.productForm.value;
      this.productService.addProduct(newProduct).subscribe(() => {
        this.productForm.reset();
      });
    }
  }
}