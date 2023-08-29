import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { Observable, tap } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-skincare',
  templateUrl: './skincare.component.html',
  styleUrls: ['./skincare.component.scss'],
})
export class SkincareComponent implements OnInit {

  products$: Observable<IProduct[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productsService.getAll().pipe(tap(console.log));
  }
}
