import { Component, OnInit, Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Observable } from 'rxjs/Rx';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() email : string;
  @Input() password : string;
  //LOGIN_URL : string ="http://localhost:3000/wordgame/api/login/v3"
  LOGIN_URL : string ="/wordgame/api/login/v3"
invalid1:any=0;
  invalid2:any=0;
  invalid5:any=0;
  constructor(private http : HttpClient, private router : Router, private userService : UserServiceService ) { }


  ngOnInit() {
    this.email = "samwise@mordor.org";
    this.password = "123";


  }

  login() {
    var credentials = { email : this.email, password : this.password };
    this.http.post<UserResponse>( this.LOGIN_URL, credentials, { observe : 'response'} )
      .map( res => {
        this.userService.setToken( res.headers.get('X-CSRF-TOKEN') );
        return res.body;

      })
      .subscribe(
        (data) => {
          console.log(data);
          this.userService.setUser( data );
          sessionStorage.setItem("user", JSON.stringify(data));
          if(data.role=="ADMIN"){
            this.router.navigateByUrl( 'adminpage');
          }else{
            this.router.navigateByUrl( 'gamelist');
          }
        },
        error=>{
         if(error.statusText=="Forbidden"){
           this.invalid1=1;
         }else if(error.statusText=="Disabled"){
           this.invalid5=1;
         }else{
           this.invalid2=1;
         }
        }
      );
  }

}

interface UserResponse {
  role: string;
}


