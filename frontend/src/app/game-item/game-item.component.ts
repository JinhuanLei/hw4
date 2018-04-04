import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserServiceService} from "../user-service.service";
import {validate} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {

  constructor(private http : HttpClient, private router : Router, private userService : UserServiceService ) { }
guess:any;
game:any;
user:any;
gameurl:any="";
// guesses:any;
  ngOnInit() {
    this.game=JSON.parse(sessionStorage.getItem("game"));
    //sessionStorage.removeItem("game");
    this.user=JSON.parse(sessionStorage.getItem("user"));
    this.validateUser();
    // this.guesses=this.game.guesses;
    if(this.game.status=="victory"){
      this.gameurl="http://charity.cs.uwlax.edu/views/cs402/homeworks/hw2/images/winner.gif";
    }else if(this.game.status=="loss"){
      this.gameurl="http://charity.cs.uwlax.edu/views/cs402/homeworks/hw2/images/cry.gif";
    }
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
  makeGuess(){
    this.http.post( "/wordgame/api/v3/" + this.user._id+"/"+this.game._id, {"guess":this.guess,"userid":this.user._id,"gid":this.game._id} ).subscribe(
      data => {
        console.log(data);
        if(data=="repeat guess"){
          alert("repeat guess");
          return;
        }
        this.game=data;
        this.guess="";
        if(this.game.status=="victory"){
          this.gameurl="http://charity.cs.uwlax.edu/views/cs402/homeworks/hw2/images/winner.gif";
        }else if(this.game.status=="loss"){
          this.gameurl="http://charity.cs.uwlax.edu/views/cs402/homeworks/hw2/images/cry.gif";
        }
      }
    )
  }

  closeGame(){
    this.router.navigate(['gamelist']);
  }


  strArr : number[ ] = [ ];

  StringToArr(str){
    this.strArr=[];

    for(var t=0;t<(str).length;t++)
    {
      this.strArr.push(str[t]);
    }
    return this.strArr;
  }

}
