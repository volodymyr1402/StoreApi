import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'categoryProducts'
})
export class CategoryProductsPipe implements PipeTransform {

  transform(products: IProduct[], search = ''): IProduct[] {
    return products.filter(p=>p.category.toLowerCase().includes(search.toLowerCase()));
  }

}
