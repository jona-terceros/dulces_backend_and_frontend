import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/dulces`);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/dulces/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.BASE_URL}/dulces/create`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    console.log(id);
    return this.http.delete<Product>(
      `${this.BASE_URL}/dulces/delete?id=${id}`,
    );
  }

  updateProduct(id: string | undefined, product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.BASE_URL}/dulces/update?id=${id}`,
      product,
    );
  }
}
