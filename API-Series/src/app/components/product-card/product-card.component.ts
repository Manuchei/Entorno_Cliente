import { IProduct } from './../../interfaces/iproduct';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product?: IProduct;
  @Output() delete = new EventEmitter<string>();

  onDelete(): void {
    if (this.product) {
      this.delete.emit(this.product.id);
    }
  }
}
