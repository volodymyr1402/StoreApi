import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'searchingProducts'
})
export class SearchingProductsPipe implements PipeTransform {

  transform(products: IProduct[], search = ''): IProduct[] {
    return products.filter(p=>p.title.toLowerCase().includes(search.toLowerCase()));
  }

}
