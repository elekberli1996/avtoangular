import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car';

@Pipe({
  name: 'minYearFilter'
})
export class MinYearFilterPipe implements PipeTransform {

  transform(value: Car[], minYil?: number): Car[] {
    return minYil?value.filter((c:Car)=>c.year!>=minYil):value;
  }

}
