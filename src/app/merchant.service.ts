import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';
import { Product } from './Producttypescript';




@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  private categoryURL = "http://localhost:8080/merchant/api/categories";
  private productURL = "http://localhost:8080/merchant/api/products";

  constructor(private httpClient: HttpClient) { }
  
  getAllCategories(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.categoryURL}`);
  }

  createCategory(category:Category): Observable<Object>{
    return this.httpClient.post(`${this.categoryURL}`, category);
  }


  deleteCategory(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.categoryURL}/${id}`);
  }

  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.productURL}`);
  }

  createProduct(product:Product): Observable<Object>{
    return this.httpClient.post(`${this.productURL}`, product);
  }


  deleteProduct(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.productURL}/${id}`);
  }

  
}
