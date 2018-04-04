import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {

  constructor(private http : HttpClient, private router : Router, private userService : UserServiceService ) { }



  ngOnInit() {
  }

  makeGuess(){

  }

}
