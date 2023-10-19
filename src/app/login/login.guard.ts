import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";


@Injectable()

export class LoginGuard implements CanActivate{
    constructor(private authService:AuthService,private router:Router){}
    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {
    let loggedIn= this.authService.loggedIn();  
    if(loggedIn)  {
        return true;
    }
    this.router.navigateByUrl("/login");
    return false;
    }
}