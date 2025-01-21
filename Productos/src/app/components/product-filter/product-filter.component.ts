import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product-filter',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
})
export class ProductFilterComponent {
  @Output() onFilter = new EventEmitter<any>();
  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      name: [''],
      description: [''],
      category: [''],
      minPrice: [0],
      maxPrice: [Infinity],
      active: [null],
    });
  }

  applyFilter(): void {
    console.log('Filtros aplicados:', this.filterForm.value);
    this.onFilter.emit(this.filterForm.value);
  }
}
