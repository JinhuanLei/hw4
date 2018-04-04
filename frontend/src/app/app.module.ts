import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {Routes, RouterModule, Router} from "@angular/router";


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';
import {UserServiceService} from "./user-service.service";
import { GamesListComponent } from './games-list/games-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserCreateComponent } from './user-create/user-create.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'adminpage', component: UsersListComponent },
  {path: 'useritem', component:  UserItemComponent },
  {path:'createuser',component:UserCreateComponent},
  {path:'gamelist',component:GamesListComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GamesListComponent,
    UsersListComponent,
    UserItemComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot( routes, { useHash : true })
  ],
  providers: [HttpClientModule, UserServiceService ],
  bootstrap: [AppComponent]

})
export class AppModule { }
