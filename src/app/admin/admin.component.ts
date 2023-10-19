import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { Categoy } from '../models/categoy';
import { Model } from '../models/model';
import { Car } from '../models/car';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[CarService]
})
export class AdminComponent implements OnInit {

 gridApi:any;
  gridColumnApi:any;
  columnDefs:any;
sortingOrder:any;
rowHeight:any;
carId!:number;
categoryName!:string;
modelName!:string;
price!:number;
year!:number;
totalway!:number;
color!:string;
type!:string; 
city!:string;
otherNotes!:string;
engine!:number;
enginePower!:string;
transmittor!:string;
phoneNumber!:number


deletedCar!:Car;
updatedCar!:Car;



  constructor(private carService:CarService,
    private formBuilder:FormBuilder,
    private alertify:AlertifyService,
    private http:HttpClient

    ) { 
      
      this.rowHeight=50;
      this.columnDefs=[
        {
        headerName:"Id",
        field:"carId",
        width:100,
         sortingOrder:["asc","deck"]
      },
      {
        headerName:"CategoryName",
        field:"categoryName",
        width:120,
        sortingOrder:["asc","deck"]
      }
      ,
      {
        headerName:"ModelName",
        field:"modelName",
        width:120,
        sortingOrder:["asc","deck"]
      }
      ,
      {
        headerName:"Price",
        field:"price",
        width:90,
        sortingOrder:["asc","deck"]
      }
      ,
      {
        headerName:"Year",
        field:"year",
        width:90,
        sortingOrder:["asc","deck"]
      },
      {
        headerName:"TotalWay",
        field:"totalWay",
        width:120,
        sortingOrder:["asc","deck"]
      }
      ,
      {
        headerName:"Reng",
        field:"color",
        width:120,
        sortingOrder:["asc","deck"]
      }
      ,
      {
        headerName:"Sehir",
        field:"city",
        width:120,
        sortingOrder:["asc","deck"]
      },
      
      {
        headerName:"Tip",
        field:"type",
        width:120,
        sortingOrder:["asc","deck"]
      }
      ,
      {
        headerName:"Notlar",
        field:"otherNotes",
        width:120,
        sortingOrder:["asc","deck"]
      },
      {
        headerName:"Motor",
        field:"engine",
        width:80,
        sortingOrder:["asc","deck"]
      },
      {
        headerName:"Motor gucu",
        field:"enginePower",
        width:100,
        sortingOrder:["asc","deck"]
      },
      {
        headerName:"Oturucu",
        field:"transmittor",
        width:100,
        sortingOrder:["asc","deck"]
      
      },
      {
        headerName:"Elaqe nomresi",
        field:"phoneNumber",
        width:100,
        sortingOrder:["asc","deck"]
      
      }
      

   
    ];
    this.sortingOrder=["deck","asc",null]

  
    }

    onRowClicked(event: any)
     { 
      console.log('row', event.data.carId );
      this.carId=event.data.carId;
      this.categoryName=event.data.categoryName;
      this.modelName=event.data.modelName;
      this.price=event.data.price;
      this.year=event.data.year;
      this.totalway=event.data.totalWay;
      this.color=event.data.color;
      this.city=event.data.city;
      this.type=event.data.type;
      this.otherNotes=event.data.otherNotes;
      this.engine=event.data.engine;
      this.enginePower=event.data.enginePower;
      this.transmittor=event.data.transmittor;
      this.phoneNumber=event.data.phoneNumber;

     }

    onGridReady(params:any){

      console.log(params);
      this.gridApi=params.api;
      this.gridColumnApi=params.columnApi;
      this.carService.getCars().subscribe((data)=>{

        params.api.setRowData(data);
      });
     
    }

    delete(){
      this.deletedCar=Object.assign({},this.deleteForm.value);
      console.log(this.deletedCar);
      this.carService.DeleteCar(this.deletedCar).subscribe(data=>{
        this.alertify.Success("silindi");
      })
      console.log("silindi")
    }
    

    categoryAddForm!:FormGroup;
    category!:Categoy;
    model!:Model;
    models!:any;
    categories!:any;
    selectedCategoryId!:number;
    modelAddForm!:FormGroup;
    deleteForm!:FormGroup;


    update(){
      
      this.updatedCar=Object.assign({},this.deleteForm.value);
      for(let c of this.categories){
        if(c.categoryName==this.categoryName){
         
        this.updatedCar.categoryId=c.categoryId;
         
        } 
       
       }
       for(let m of this.models){
        if(m.modelName==this.modelName){
         
        this.updatedCar.modelId=m.modelId;
         
        } 
       
       }
      console.log(this.updatedCar);
      this.carService.UpdateCar(this.updatedCar).subscribe(data=>{
        this.alertify.Success("guncellendi");
      })
    }

    createDeleteForm(){

      this.deleteForm=this.formBuilder.group({
        carId:[0,Validators.required],
        categoryName:[""],
        price:[0],
        modelName:[""],
        city:[""],
        year:[0],
        type:[""],
        color:[""],
        otherNotes:[""],
        engine:[""],
        enginePower:[""],
        totalWay:[0],
        transmittor:[""],
        phoneNumber:[0]

      });


    }

    createCategoryForm(){
      this.categoryAddForm=this.formBuilder.group({
        categoryName:["",Validators.required],
        famous:[false],

      })

    }
    modelCategoryForm(){
      this.modelAddForm=this.formBuilder.group({
        categoryName:["",Validators.required],
        modelName:["",Validators.required],

      })

    }

  ngOnInit() {
    this.createCategoryForm();
    this.modelCategoryForm();
    this.createDeleteForm();;
    this.load();
  }


  load(){
   
    this.carService.getAllCategory().subscribe((data)=>{
      this.categories=data;
    });
    this.carService.getAllModel().subscribe((data)=>{
      this.models=data;
    });
  }

  add(){
    console.log("eeee");
    this.category=Object.assign({},this.categoryAddForm.value);
    this.carService.addCategory(this.category).subscribe(data=>{
      this.alertify.Success("Yeni kategory eklendi");
    })
    console.log(this.category);
    

  }
  add2(){
 
    this.model=Object.assign({},this.modelAddForm.value);
    this.model.categoryId=this.selectedCategoryId;
    this.carService.addModel(this.model).subscribe(data=>{
      this.alertify.Success("Yeni Model eklendi");
    });
    console.log(this.model);

  }

  onOptionsSelected(value:string){
   
   for(let c of this.categories){
    if(c.categoryName==value){
    this.selectedCategoryId=c.categoryId;
     
    } 
   
   }}

}
