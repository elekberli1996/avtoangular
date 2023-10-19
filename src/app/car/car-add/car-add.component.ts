import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Validators,FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { Categoy } from 'src/app/models/categoy';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
  providers:[CarService]
})
export class CarAddComponent implements OnInit {


  constructor(private carService:CarService,
    private formBuilder:FormBuilder,
    private alertify:AlertifyService,
    private router:Router,private activatedRouter:ActivatedRoute,
    private http:HttpClient) { }

  car!:Car;
  cars!:Car;
  carAddForm!:FormGroup;
  categories!:Categoy[];
  models!:any;
  selectedCategoryId!:number;
  selectedModelId!:number;
  urls:any[]=[];
  photos:File[]=[];
  carId!:any;
  postUrl:string="";
  currentUser!:any;
  currentUserId!:any;
  pricevalue:string="";
  yearvalue:string="";
  numbervalue:string="";
  wayvalue:string="";
  donus!:Boolean

  


 selectedModels:string[]=[];




  createCarForm(){
    this.carAddForm=this.formBuilder.group({
      modelName:["",Validators.required],
      categoryName:["",Validators.required],
      price:new FormControl("",Validators.compose([Validators.required])),
      city:[""],
      year:["",],
      type:[""],
      color:[""],
      otherNotes:[""],
      engine:[""],
      enginePower:[""],
      totalWay:[""],
      transmittor:[""],
      phoneNumber:[""],

    },{
    
      //validators:this.mustNumber('price')
 


    })
    
  }
  get f(){
    return this.carAddForm.controls;
  }
  mustNumber(value:string){
   
     
      for(let i=0;i<value.length;i++)
      {
        if(!(value.charCodeAt(i)>=48&& value.charCodeAt(i)<=57))
        {
        this.carAddForm.setErrors({mustNumber:true});
         break;
    
        }
        this.carAddForm.setErrors(null);
        
       
      
        
      
      
     
    }

  }
 



  ngOnInit() {
    this.createCarForm();
   this.load();


   //console.log(this.models);

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
    this.selectedModels=[];
   for(let c of this.categories){
    if(c.categoryName==value){
    this.selectedCategoryId=c.categoryId;
      for(let m of this.models){
        if(m.categoryId==c.categoryId){
   
          this.selectedModels.push(m.modelName);
        
        }
      }
    } 
   
   }
 

}
onOptionsSelected2(value:string){
  for(let m of this.models){
if(m.modelName==value){

  this.selectedModelId=m.modelId;
}
  }

}


add(){
  var email=localStorage.getItem("email");
  this.carService.getUser(email!).subscribe(data=>{

    this.currentUser=data;
this.currentUserId=this.currentUser.userId;
console.log(this.currentUserId)
  });
 setTimeout(() => {
  if(this.carAddForm.valid){ 
    this.car=Object.assign({},this.carAddForm.value);
    this.car.categoryId=this.selectedCategoryId;
    this.car.modelId=this.selectedModelId;
 this.car.userId=this.currentUserId;
 
 console.log(this.car);
 this.carService.add(this.car).subscribe((data)=>{
  this.cars=data;
 this.carId=this.cars.carId;
  console.log(this.carId);
  
 });
 this.alertify.Success("basarili");
 setTimeout(() => {
  console.log(this.carId);
  this.router.navigateByUrl("/carDetail/"+this.carId);
  this.postUrl="https://localhost:44314/api/cars/"+this.carId+'/photos';
  console.log("https://localhost:44314/api/cars/"+this.carId+'/photos');

  for(let file of this.photos){
  
    console.log(file);
  
    this.uploadfile(file);
   }
 }, 2000);
 

 

  }
 }, 1000); 
 
  

  }
  uploadfile(file: File) {
    let formParams = new FormData();
    formParams.append('file', file);
    console.log(formParams);
     this.http.post(this.postUrl, formParams).subscribe(error=>{
console.log(error);
     });
    
  }

  FileSelected(event:any){
    if(event.target.files){
      for(let file of event.target.files){
        this.photos.push(file);
       }
      for(var i=0;i<=this.photos.length;i++){
      
        var reader =new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload=(event)=>{
          this.urls.push(event.target?.result);
        }
      }
      console.log(this.urls);
     // console.log(this.photos);
   
     
    }
    

  }
  remove(){
    this.photos=[];
    this.urls=[];
  }


  MustNumberPrice(event: any) { // without type info
    this.pricevalue = event.target.value ;

   this.mustNumber(this.pricevalue);
  

 
  }
  MustNumberYear(event: any) { // without type info
    this.yearvalue = event.target.value ;

   this.mustNumber(this.yearvalue);
  

 
  }
  MustNumberNumber(event: any) { // without type info
    this.numbervalue = event.target.value ;

   this.mustNumber(this.numbervalue);
  

 
  }
  MustNumberWay(event: any) { // without type info
    this.wayvalue = event.target.value ;

   this.mustNumber(this.wayvalue);
  

 
  }
  
}
