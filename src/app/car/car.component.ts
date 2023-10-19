import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';
import { Categoy } from '../models/categoy';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers:[CarService]
})
export class CarComponent implements OnInit {

  constructor(private carService:CarService) { }

  cars!:Car[];
 orderedCars:Car[]=[];
 

  categoryName="";
  modelName="";
  categories!:Categoy[];
  models!:any;
  values = '';
  minPrice!:number;
  values1 = '';
  maxPrice!:number;
  values2 = '';
  minYil!:number;
  values3 = '';
  maxYil!:number;

  selectedModels:string[]=[];

  ngOnInit() {
    this.carService.getCars().subscribe((data)=>{
      this.cars=data;
  
      console.log(this.cars)
      for (let index = this.cars.length-1; index >=0 ; index--) {
        
   this.orderedCars.push(this.cars[index])
    
  }
  console.log(this.orderedCars);
    });
    
 
    this.load();
   

  }
  
  load(){
    this.carService.getAllCategory().subscribe((data)=>{
      this.categories=data;
    })
    this.carService.getAllModel().subscribe((data)=>{
      this.models=data;
    })
  }
  onOptionsSelected(value:string){
    this.categoryName=value;
    this.modelName="";
    
    this.selectedModels=[];
   for(let c of this.categories){

    if(c.categoryName==value){
   
      for(let m of this.models){
        if(m.categoryId==c.categoryId){
 
          this.selectedModels.push(m.modelName);
        
        }
      }
    } 
   
   }
 
   }
   onOptionsSelected2(value:string){
    console.log(value);
    this.modelName=value;
   
  }
  onSearchChange(): void {  
    console.log("sss");
  }
  onKey(event: any) { // without type info
    this.values = event.target.value ;
    this.minPrice=Number(this.values);
    console.log(this.minPrice);
  }
  onKey1(event: any) { // without type info
    this.values1 = event.target.value ;
    this.maxPrice=Number(this.values1);
    console.log(this.maxPrice);
  }
  onKey2(event: any) { // without type info
    this.values2 = event.target.value ;
    this.minYil=Number(this.values2);
    console.log(this.maxPrice);
  }
  onKey3(event: any) { // without type info
    this.values3 = event.target.value ;
    this.maxYil=Number(this.values3);
    console.log(this.maxPrice);
  }
  temizle(){
 
    window.location.reload();
  }

}
