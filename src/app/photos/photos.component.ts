import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  constructor(private authService:AuthService,
    private alertifyService:AlertifyService, 
    private activatedRoute:ActivatedRoute
 ) { }

 photos:Photo[]=[];
 uploader!:FileUploader;
 hasBaseDropZoneOver =false;
 hasAnotherDropZoneOver=false;
 
 baseUrl='https://localhost:44314/api/';
 currentMain!:Photo;
 currentCar:any;

 ngOnInit() {
   this.activatedRoute.params.subscribe(params=>{
     this.currentCar = params["carId"]
   })
   this.initializeUploader();
 }
 public fileOverBase(e:any):void {
  this.hasBaseDropZoneOver = e;
}

public fileOverAnother(e:any):void {
  this.hasAnotherDropZoneOver = e;
}



 initializeUploader(){
   this.uploader =new FileUploader({
     url:this.baseUrl +'cars/'+this.currentCar+'/photos',
     authToken: 'Bearer ' +localStorage.getItem('token'),
     isHTML5: true,
     allowedFileType : ['image'],
     autoUpload:false,
     removeAfterUpload: true,
     maxFileSize:10*1024*1024
   })

   this.uploader.onSuccessItem = (item, response, status, headers)=>{
     if(response){
       const res :Photo = JSON.parse(response);
       const photo ={
         id:res.id,
         url:res.url,
         dateAdded:res.dataAdded,
      
         isMain:res.isMain,
         cityId:res.carId
       }
       this.photos.push(photo)
     }
   }
 }
 
}

