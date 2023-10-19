import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { Photo } from '../models/photo';
import { Categoy } from '../models/categoy';
import { Router } from '@angular/router';
import { Model } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
numune!:any;
constructor(private httpClient:HttpClient,private router:Router) { }
path="https://localhost:44314/api/cars/";
getCars():Observable<Car[]>{
  return this.httpClient.get<Car[]>(this.path+"getall");
}
getCarById(id:number){
  return this.httpClient.get(this.path+"get?id="+id);
}

getPhotosByCar(carId:number){
  return this.httpClient.get(this.path+"photo?id="+carId);
}

add(car:Car){
 
  
 return this.httpClient.post(this.path+"AddCar",car)
  
 
}
addModel(model:Model){
 
  
 return this.httpClient.post("https://localhost:44314/api/Models/Add",model)
  
 
}

DeleteCar(car:Car){
 
  
  return this.httpClient.post("https://localhost:44314/api/cars/Delete",car)
   
  
 }
 UpdateCar(car:Car){
 
  
  return this.httpClient.post("https://localhost:44314/api/cars/Update",car)
   
  
 }



addCategory(category:Categoy){
 
  
  return this.httpClient.post("https://localhost:44314/api/Category/AddCategory",category)
   
  
 }

getUser(email:string){
 return this.httpClient.get("https://localhost:44314/api/auth/getUser?email="+email);
}



getAllCategory():Observable<Categoy[]>{
 return this.httpClient.get<Categoy[]>("https://localhost:44314/api/Category/getall");
}
getAllModel(){
 return this.httpClient.get("https://localhost:44314/api/Models/getall");
}

}
