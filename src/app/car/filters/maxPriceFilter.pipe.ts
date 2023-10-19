import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car';

@Pipe({
  name: 'maxPriceFilter'
})
export class MaxPriceFilterPipe implements PipeTransform {

  transform(value: Car[], maxPrice?: number): Car[] {
    return maxPrice?value.filter((c:Car)=>c.price!<=maxPrice):value;
  }
}
