import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { CarService } from '../services/car.service';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';
import { LoginUser } from '../models/loginUser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[CarService]
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private alertify:AlertifyService,
    private router:Router,
    private authService:AuthService) { }


  loginAddForm!:FormGroup;
  loginUser!:LoginUser;
  result!:any;
  hassError:boolean=false;
  email:string="";
  password:string="";
  element!:any;

  createLoginForm(){
    this.loginAddForm=this.formBuilder.group({
      email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
    password: new FormControl('',Validators.compose([Validators.required,Validators.minLength(7),Validators.maxLength(10)]))
    })
  }

  ngOnInit() {
    this.createLoginForm();
  }
  get loginForm(){
    return this.loginAddForm.controls;
  }

 

  login(){
   
    if(this.loginAddForm.valid){
    this.loginUser=Object.assign({},this.loginAddForm.value);

      this.authService.login(this.loginUser);
      
      
  
  





  }// console.log(this.loginUser);
  }
}

