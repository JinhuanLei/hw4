import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  constructor(private http : HttpClient, private router : Router, private userService : UserServiceService ) { }
  @Input() games : any;
  email: any;
  suser:any;
  @Input() levelslist: any;
  fonts:any;
  meta:any={defaults:{colors:{wordBackground:"",guessBackground:"",textBackground:""},level:{name:""},font:{category:""}},fonts:"",levels:{name:""}};
  selectedDiff:any;
  selectedFont:any;
guesscolor:any;
  wordcolor:any;
  forecolor:any;
  ngOnInit() {
    this.loadFont();
    this.initialDefaults();
    this.suser = JSON.parse(sessionStorage.getItem('user'));
    this.email = this.suser.email;
    // this.levelslist=this.meta.levels;

  }

  onDiffChange(value: any){
    this.selectedDiff=value;
    console.log(this.selectedDiff);
  }
  onFontChange(value: any){
    this.selectedFont=value;
    console.log(this.selectedFont);
  }

  loadFont(){
    this.http.get( "/wordgame/api/v3/meta/fonts", {} ).subscribe(
      data => {
        this.fonts=data;
        // this.initialDefaults();
      }
    )

  }

  saveDefaults(){
    var defaults={"font":this.selectedFont,"level":this.selectedDiff,"wordcolor":this.wordcolor,"guesscolor":this.guesscolor,"forecolor":this.forecolor}
    this.http.put( "/wordgame/api/v3/"+this.suser._id+"/defaults", defaults ).subscribe(
      data => {
        console.log(data);
      }
    )

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

  initialDefaults(){
    this.http.get<UserResponse>( "/wordgame/api/v3/meta", {} ).subscribe(
      data => {
        // console.log(data);
       this.meta=data;
        this.selectedDiff=this.meta.defaults.level.name;
        this.selectedFont=this.meta.defaults.font.category;
       this.levelslist=data.levels;
this.guesscolor=this.meta.defaults.colors.guessBackground;
this.wordcolor=this.meta.defaults.colors.wordBackground;
this.forecolor=this.meta.defaults.colors.textBackground;
        // console.log(this.levelslist)
      }
    )
  }

}
interface UserResponse {
  levels: any;

}
