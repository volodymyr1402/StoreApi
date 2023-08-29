import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.scss']
})
export class SmartphonesComponent implements OnInit{

  products$:Observable <IProduct[]>




  constructor (private productsService: ProductsService) {}

ngOnInit(): void {
 this.products$=this.productsService.getAll().pipe(tap(console.log));
}

}
