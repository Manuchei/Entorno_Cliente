import { IProduct } from './../interfaces/iproduct';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://jsonblob.com/api/1330882149766848512';
  private productsSubject = new BehaviorSubject<IProduct[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getProducts(): void {
    this.http.get<IProduct[]>(this.apiUrl).subscribe({
      next: (products) => this.productsSubject.next(products),
      error: (err) => console.error('Error al cargar los productos:', err),
    });
  }

  addProduct(product: IProduct): void {
    const currentProducts = this.productsSubject.value;
    this.productsSubject.next([...currentProducts, product]);
  }

  deleteProduct(id: string): void {
    const updatedProducts = this.productsSubject.value.filter(
      (product) => product._id !== id
    );
    this.productsSubject.next(updatedProducts);
  }
}
