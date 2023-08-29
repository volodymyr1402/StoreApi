import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-fragrances',
  templateUrl: './fragrances.component.html',
  styleUrls: ['./fragrances.component.scss']
})
export class FragrancesComponent implements OnInit{

  products$:Observable <IProduct[]>




  constructor (private productsService: ProductsService) {}

ngOnInit(): void {
 this.products$=this.productsService.getAll().pipe(tap(console.log));
}

}
