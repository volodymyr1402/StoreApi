import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
// import { products as data } from './products/products';
import { Observable, tap } from 'rxjs';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'storeApi';
  urlGh='https://github.com/'
  urlIg='https://www.instagram.com/'

  // products: IProduct[] = data;

  products$:Observable<IProduct[]>


constructor(private productsService : ProductsService) {}

ngOnInit():void {
  this.products$ = this.productsService.getAll().pipe(tap(console.log));

}

linkGit(){
  location.href=this.urlGh;
}
linkIg(){
  location.href=this.urlIg;
}
}
