import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
// import { products as data } from './products/products';
import { Observable, async, from, tap } from 'rxjs';
import { ProductsService} from 'src/app/services/products.service';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  title = 'storeApi';
  linkLogIn = false;
  inputSearch = '';
  urlGh='https://github.com/'
  urlIg='https://www.instagram.com/'

  // products: IProduct[] = data;

  products$:Observable<IProduct[]>



constructor(private productsService : ProductsService,
  public modalService:ModalService) {}



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
