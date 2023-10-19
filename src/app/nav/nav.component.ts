import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

local!:string;
  constructor(private authService:AuthService,private alertify:AlertifyService) { }

  ngOnInit() {
    this.local==localStorage.getItem("token");
  }
  isloggedin(){

    return this.authService.loggedIn();
  
  }

  logout(){
    this.authService.logOut();
    this.alertify.Warning("log out ismeni yapildi");
    
  }


}
