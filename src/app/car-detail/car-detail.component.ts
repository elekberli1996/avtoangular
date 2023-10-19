import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../models/car';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { AlertifyService } from '../services/alertify.service';



@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  providers:[CarService]
})
export class CarDetailComponent implements OnInit {
  

  constructor(private activateRoute:ActivatedRoute,private carService:CarService) { }

  car:any;
 photoCount!:number;
  photos:any;
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];
  ngOnInit() {
    this.activateRoute.params.subscribe(params=>{
      this.getCarById(params["carId"]);
      

    


    });

   
 
  }
  
  getCarById(carId:number){
    this.carService.getCarById(carId).subscribe((data)=>{
   
    this.car=data;
   this.getPhotosByCar(carId);
 for(let {} of this.car){


 }
 
  
     
    })
  }
  getImages(){
    const imageUrl=[];
 
      for(let c of this.car){
        for(let a of c.photos){

       imageUrl.push({
        
      small:a.photoUrl,
       medium:a.photoUrl,
        big:a.photoUrl

      });
    }
    }
  
    return imageUrl;
  }

  getPhotosByCar(carId:number){
    this.carService.getPhotosByCar(carId).subscribe((data)=>{

      this.photos=data;
     
      this.setGalery();
    });
  }
  setGalery(){
   this.galleryOptions = [
      {
        width: '100%',
        height: '700px',
        thumbnailsColumns: 6,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      
      {
         breakpoint: 800,
        width: '100%',
        height: '550px',
        imagePercent: 100,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = this.getImages();
  }

}
