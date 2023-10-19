import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(value: Car[], categoryName?: string): Car[] {
    return categoryName?value.filter((c:Car)=>c.categoryName?.toLocaleLowerCase().
    indexOf(categoryName?categoryName.toLocaleLowerCase():"")!==-1):value;
  }

  

}
