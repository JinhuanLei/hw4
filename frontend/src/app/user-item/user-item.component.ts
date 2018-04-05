import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  constructor(private http : HttpClient, private router : Router, private userService : UserServiceService ) { }

  email: any;
  suser:any
  user : any;
  newUser : any = { uid:'',first : '', last : '' , email : '',role:'',enabled:'',password:'',csrf:""};
  invalid3 : any=0;
  invalid4 : any=0;
  disableRadio:any=false;
  disableCheck:any=false;
  csrf:any;
  ngOnInit() {
    this.csrf=sessionStorage.getItem("csrf");
    this.suser=JSON.parse(sessionStorage.getItem('user'));   //login User
    this.email= this.suser.email;
    if(sessionStorage.getItem("check")){
    var objstr=sessionStorage.getItem("check");
    var obj=JSON.parse(objstr);
    this.user=obj;
    if(this.suser._id==this.user._id){
      this.disableRadio=true;
    }

    if(this.user.role=="ADMIN"){
      this.disableCheck=true;
    }
    console.log(this.user);
    sessionStorage.removeItem("check");

    }

  }

  toggleEnabled(event){
    if ( event.target.checked ) {
      this.user.enabled="Enabled"
    }else{
      this.user.enabled="Disabled"
    }
  }
  toggleAdmin(event){
    if ( event.target.checked ) {
      this.user.role="ADMIN"
    }
  }
  toggleUser(event){
    if ( event.target.checked ) {
      this.user.role="USER"
    }
  }
  validateEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  updateUser(){
    // if(!this.user.email||!this.user.first||!this.user.last||!this.user.role){
    //   this.invalid3=1;
    //   return;
    // }
    // if(!this.validateEmail(this.user.email)){
    //   this.invalid4=1;
    //   return;
    // }

    // if(this.user.enabled){
    //   this.user.enabled="Enabled"
    // }else {
    //   this.user.enabled="Disabled"
    // }

    this.newUser.uid=this.user._id;
    this.newUser.first=this.user.name.first;
    this.newUser.last=this.user.name.last;
    this.newUser.email=this.user.email;
    this.newUser.role=this.user.role;
    this.newUser.enabled=this.user.enabled;
    this.newUser.csrf=this.csrf;
    var PUT_URL="/wordgame/api/admins/v3/users";
    console.log("newUser")
    console.log(this.newUser)
    this.http.put( PUT_URL,this.newUser,{responseType: "text"}).subscribe(
      data => {
        this.router.navigateByUrl( 'adminpage');
      },
      error=>{
        if(error.error=="Modified CsrfToken !"){
          alert("Modified CsrfToken !");
          this.router.navigateByUrl( 'login');
        }
      }
    )
  }
  backToAdminPage(){
    this.router.navigateByUrl( 'adminpage');
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
