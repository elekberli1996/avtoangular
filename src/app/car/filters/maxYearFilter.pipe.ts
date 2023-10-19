import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car';

@Pipe({
  name: 'maxYearFilter'
})
export class MaxYearFilterPipe implements PipeTransform {

  transform(value: Car[], maxYil?: number): Car[] {
    return maxYil?value.filter((c:Car)=>c.year!<=maxYil):value;
  }

}
