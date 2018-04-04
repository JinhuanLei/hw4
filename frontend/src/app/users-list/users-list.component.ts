import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserServiceService} from "../user-service.service";
import {$} from "protractor";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private http : HttpClient, private router : Router, private userService : UserServiceService ) { }
@Input() users : any;
  filter : string;
   email: any;
   suser:any
  ngOnInit() {
   this.retrieveUsers();
   this.suser=JSON.parse(sessionStorage.getItem('user'));
    this.email= this.suser.email;
    console.log(this.email);
    this.validateUser();
  }
  validateUser(){
    this.http.get( "/wordgame/api/uid/v3").subscribe(
      data => {
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )
  }
  retrieveUsers(){
    this.filter='';
    this.http.get("/wordgame/api/admins/v3/users").subscribe(
      data => {
        console.log("users:"+data);
        this.users = data;
      }
    );
  }

  refreshTable(){
    this.retrieveUsers();
  }

  searchUser() {
    //var THINGS_URL = `http://localhost:3000/wordgame/api/admins/v3/users`;
    // var THINGS_URL ='/wordgame/api/admins/v3/users';
    var search={"search":this.filter};
    console.log(search);
    this.http.post("/wordgame/api/admins/v3/search",search).subscribe(
      data => {
        console.log("users:"+data);
        this.users = data;
      }
    );
    this.filter = '';
  }
  viewUser(event){
    if(event=="create"){
      this.router.navigate(['createuser']);
    }else{
   // console.log("row id:"+event.target)
     var uid=event.currentTarget.id;

      this.http.get( "/wordgame/api/admins/v3/"+uid,{} ).subscribe(
        data => {
          sessionStorage.setItem("check",JSON.stringify(data));
          this.router.navigate(['useritem']);
        }
      )

    }
  }
  logout() {
    // var LOGOUT_URL = "http://localhost:3000/wordgame/api/logout/v3";
    var LOGOUT_URL = "/wordgame/api/logout/v3";
    this.http.post( LOGOUT_URL, {} ).subscribe(
      data => {
        this.router.navigate(['login']);
      }
    )
  }
}
interface UserResponse {
  id: string;
}
