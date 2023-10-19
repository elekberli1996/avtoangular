import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RegisterUser } from '../models/registerUser';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private alertify:AlertifyService,
    private router:Router,
    private authService:AuthService) { }

    registerForm!:FormGroup;
    registerUser!:RegisterUser;
    phoneNumber:string="";
    startNumber:string="";


    createRegisterForm(){
      this.registerForm=this.formBuilder.group({
        lastName: new FormControl('',Validators.compose([Validators.required])),
        name: new FormControl('',Validators.compose([Validators.required])),
        email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
        phoneNumber: new FormControl('',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])),
        password: new FormControl('',Validators.compose([Validators.required,Validators.minLength(7),Validators.maxLength(10)]))
      })
    }
    mustNumber(value:string){
   
     
      for(let i=0;i<value.length;i++)
      {
        if(!(value.charCodeAt(i)>=48&& value.charCodeAt(i)<=57))
        {
        this.registerForm.setErrors({mustNumber:true});
         break;
    
        }
        this.registerForm.setErrors(null);
        
 
      }
    }
    startOperator(value:string){
      if(value=="070"||value=="077"||value=="050"||value=="051"||value=="060"||value=="055")
      {
        this.registerForm.setErrors(null);
      }
      else {
        this.registerForm.setErrors({mustbeOperator:true});

      }
      
    }


  ngOnInit() {
    this.createRegisterForm();
  }

  get registered(){
    return this.registerForm.controls;
  }
  register(){
    
    if(this.registerForm.valid){
      this.registerUser=Object.assign({},this.registerForm.value);
      this.authService.register(this.registerUser);
      
  
  
      console.log(this.registerUser);
      
        
      }
    
  }
  MustNumberPhone(event: any) { // without type info
    this.phoneNumber = event.target.value ;

   this.mustNumber(this.phoneNumber);
  

  this.startNumber= this.phoneNumber.substring(0,3);
  if(this.startNumber.length==3){
     console.log(this.startNumber);
     this.startOperator(this.startNumber);
  }
 

 
  }
 

}
