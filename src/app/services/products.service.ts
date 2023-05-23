import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { IProduct } from '../models/product';



interface ProductsDTO {
  products: IProduct[],
  total: number,
  skip: number,
  limit: number
}

interface User {

    "id": number,
    "username": string,
    "email": string,
    "firstName": string,
    "lastName": string,
    "gender": string,
    "image":string,
    "token":string

}

interface UserAuth {
  "username": string,
  "password": string
}



@Injectable({
  providedIn: 'root',
})
export class ProductsService {

userInfo: User
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    return this.http.get<ProductsDTO>('https://dummyjson.com/products').pipe(map(productsDTO => productsDTO.products));
  }

  auth(user:UserAuth){
    return this.http.post('https://dummyjson.com/auth/login', this.userInfo ).pipe(tap(console.log))
    console.log(this.userInfo)
  }
}
