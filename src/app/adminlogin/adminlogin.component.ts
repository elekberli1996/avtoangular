import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router:Router) { }
 values='';
 admin!:string;
 values1='';
 password!:string;
 
  ngOnInit() {
  }
  onKey(event: any) { // without type info
    this.values = event.target.value ;
    this.admin=this.values;
  
  }
  onKey1(event: any) { // without type info
    this.values1 = event.target.value ;
    this.password=this.values1;
  
  }
  add(){
    localStorage.setItem("admin",this.admin);
    localStorage.setItem("password",this.password);
    this.router.navigateByUrl("/admin");
    console.log(this.admin);
    console.log(this.password);

  }

}
