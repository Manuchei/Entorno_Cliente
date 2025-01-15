import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiUrl: string =
    'https://jsonblob.com/api/1327704657098891264';

  constructor(private readonly http: HttpClient) {}

  /**
   * Fetch all products from the API.
   * @returns Observable<Product[]>
   */
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  /**
   * Add a new product to the API.
   * @param product The product to add.
   * @returns Observable<Product>
   */
  addProduct(product: IProduct): Observable<IProduct> {
    const productToAdd = { ...product, id: this.generateUUID() };
    return this.http.post<IProduct>(this.apiUrl, productToAdd);
  }

  /**
   * Delete a product by its ID.
   * @param productId The ID of the product to delete.
   * @returns Observable<void>
   */
  deleteProductById(productId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productId}`);
  }

  /**
   * Filter products based on criteria.
   * @param criteria Partial product for filtering.
   * @returns Observable<Product[]> containing filtered results.
   */
  filterProducts(criteria: Partial<IProduct>): Observable<IProduct[]> {
    return this.getAllProducts().pipe(
      map((products) =>
        products.filter((product) => {
          return (
            (!criteria.name || product.name.includes(criteria.name)) &&
            (!criteria.category || product.category === criteria.category) &&
            (!criteria.price || product.price === criteria.price) &&
            (criteria.active === undefined ||
              product.active === criteria.active)
          );
        })
      )
    );
  }

  /**
   * Helper function to generate a UUID for new products.
   * @returns string A unique UUID.
   */
  private generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
