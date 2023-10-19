import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car';

@Pipe({
  name: 'minPrice'
})
export class MinPricePipe implements PipeTransform {

  transform(value: Car[], minPrice?: number): Car[] {
    return minPrice?value.filter((c:Car)=>c.price!>=minPrice):value;
  }
}
