import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { AlertifyService } from "../services/alertify.service";


@Injectable()

export class AdminLoginGuard implements CanActivate{
    constructor(private router:Router,private alertify:AlertifyService){}
    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {
   var admin= localStorage.getItem("admin");
   var password=localStorage.getItem("password");

    if(admin=="admin"&& password=="admin")  {
        this.alertify.Success("hosgeldinizz");
         return true;
       
    }
    this.router.navigateByUrl("/adminlogin");
    this.alertify.Error("admin girisi dogru deil")
    return false;
    }
}