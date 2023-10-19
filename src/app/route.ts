import {  Routes } from "@angular/router";
import { CarComponent } from "./car/car.component";
import { ValuewComponent } from "./valuew/valuew.component";
import { CarDetailComponent } from "./car-detail/car-detail.component";
import { CarAddComponent } from "./car/car-add/car-add.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { LoginGuard } from "./login/login.guard";
import { AdminComponent } from "./admin/admin.component";

import { AdminloginComponent } from "./adminlogin/adminlogin.component";
import { AdminLoginGuard } from "./adminlogin/adminlogin.guard";

export const  appRoutes:Routes=[
    {path:"car",component:CarComponent},
    {path:"value",component:ValuewComponent},
    {path:"addcar",component:CarAddComponent,canActivate:[LoginGuard]},
    {path:"carDetail/:carId",component:CarDetailComponent},
    {path:"login",component:LoginComponent},
    {path:"adminlogin",component:AdminloginComponent},
    {path:"login/register",component:RegisterComponent}, 
    {path:"admin",component:AdminComponent,canActivate:[AdminLoginGuard]},
    {path:"**",redirectTo:"car",pathMatch:"full"},
   


];
