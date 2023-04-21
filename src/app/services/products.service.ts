import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProduct } from '../models/product';


interface ProductsDTO {
  products: IProduct[],
  total: number,
  skip: number,
  limit: number
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    return this.http.get<ProductsDTO>('https://dummyjson.com/products').pipe(map(productsDTO => productsDTO.products));
  }
}
