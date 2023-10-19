import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car';

@Pipe({
  name: 'modelFilter'
})
export class ModelFilterPipe implements PipeTransform {

  transform(value: Car[], modelName?: string): Car[] {
    return modelName?value.filter((c:Car)=>c.modelName?.toLocaleLowerCase().
    indexOf(modelName?modelName.toLocaleLowerCase():"")!==-1):value;
  }

}
