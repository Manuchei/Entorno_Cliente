import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-product-filter',
  standalone: true, // Marca este componente como standalone
  imports: [FormsModule], // Importa FormsModule aquí
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
})
export class ProductFilterComponent {
  filterCriteria: any = {
    name: '',
    category: '',
    price: null,
    active: false,
  };

  @Output() filter = new EventEmitter<any>();

  applyFilter(): void {
    this.filter.emit(this.filterCriteria);
  }
}
