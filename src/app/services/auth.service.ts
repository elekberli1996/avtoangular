import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { JwtHelperService,} from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { RegisterUser } from '../models/registerUser';

@Injectable()
export class AuthService {

constructor(private httpClient:HttpClient,private router:Router,private alertify:AlertifyService) { }
numune!:any;
userToken!:any;
decodedToken!:any;
jwtHelper:JwtHelperService= new JwtHelperService();
TOKEN_KEY:string="token";


login(loginUser:LoginUser){

this.httpClient.post("https://localhost:44314/api/Auth/login",loginUser).subscribe((data)=>{
this.numune=data;
this.saveToken(this.numune.token);
this.userToken=this.numune.token;
this.decodedToken=this.jwtHelper.decodeToken(this.userToken);
console.log(this.decodedToken);
localStorage.setItem("email",this.decodedToken.email);




this.alertify.Success("giris basarili");

this.router.navigateByUrl("/car");
//console.log(this.numune);
},
error=>{
  this.alertify.Error(error.error);
   }
  );

}


register(resiterUser:RegisterUser){
  this.httpClient.post("https://localhost:44314/api/Auth/register",resiterUser).subscribe((data)=>{
 this.alertify.Success("Başarılı Qeydiyyat. İndi giriş edin");
 this.router.navigateByUrl("/login");
  },
  error=>{
 this.alertify.Error(error.error);
  }
 
  );


}
result(){
   return localStorage.getItem(this.TOKEN_KEY);
}

saveToken(token:string){
  localStorage.setItem(this.TOKEN_KEY,token);
}
logOut(){
  localStorage.removeItem(this.TOKEN_KEY);
  localStorage.removeItem("email");
}

loggedIn(){
  return this.tokenNotExpired();
}
tokenNotExpired() {
  return  !this.jwtHelper.isTokenExpired(localStorage.getItem(this.TOKEN_KEY));
}
getCurrentUserId(){
  return this.decodedToken.nameid;
}
get token(){
  return localStorage.getItem(this.TOKEN_KEY);
}


}
