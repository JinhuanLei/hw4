import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(private http : HttpClient, private router : Router, private userService : UserServiceService ) { }
  suser:any
  adminemail: any;
  newUser : any = { first : '', last : '' , email : '',role:'',enabled:'',password:''};
  invalid3 : any=0;
  invalid4 : any=0;
  invalidPassword:any=0;
  invalidRepeat:any=0;
  ngOnInit() {
    this.suser=JSON.parse(sessionStorage.getItem('user'));
    this.adminemail= this.suser.email;
  }

  backToAdminPage(){
    this.router.navigateByUrl( 'adminpage');
  }

   validateEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  createUser() {
    // let URL = 'http://localhost:3000/wordgame/api/admins/v3/users';
this.invalidPassword=0;
this.invalid3=0;
    this.invalid4=0;
    this.invalidRepeat=0;

    if(!this.newUser.email||!this.newUser.first||!this.newUser.last||!this.newUser.password||!this.newUser.role){
      this.invalid3=1;
      return;
    }
var re=/\d/;
    if(this.newUser.password.length<8||!(re.test(this.newUser.password))){
      console.log(this.newUser.password.length);
      console.log(re.test(this.newUser.password));
      this.invalidPassword=1;
      return;
    }
if(!this.validateEmail(this.newUser.email)){
  this.invalid4=1;
  return;
}
    if(this.newUser.enabled){
      this.newUser.enabled="Enabled"
    }else {
      this.newUser.enabled="Disabled"
    }
    this.http.post( "/wordgame/api/admins/v3/users", this.newUser, { observe : 'response'} )
      .map( res => {
        this.userService.setToken( res.headers.get('X-CSRF-TOKEN') );
        return res.body;
      })
      .subscribe(
        data => {
           console.log( "userCreate: ", data );
          // this.onThingCreate.emit( data );
          // this.newThing.name = '';
          // this.newThing.value = '';
          this.router.navigateByUrl( 'adminpage');
        },
        error=>{
          console.log(error);
          if(error.error=="Repeat"){
            this.invalidRepeat=1;
          }
        }
      );
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
