import { Injectable } from '@angular/core';
import * as alertifyjs from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

Success(message:string){
  alertifyjs.success(message);
}
Warning(message:string){
  alertifyjs.warning(message);
}
Error(message:string){
  alertifyjs.error(message);
}
}







