webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(route) {
        this.route = route;
        this.isLoginRoute = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.subscribe(function (url) {
            _this.isLoginRoute = url.toString().indexOf("login") >= 0;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_list_users_list_component__ = __webpack_require__("./src/app/users-list/users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__games_list_games_list_component__ = __webpack_require__("./src/app/games-list/games-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_item_user_item_component__ = __webpack_require__("./src/app/user-item/user-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'adminpage', component: __WEBPACK_IMPORTED_MODULE_7__users_list_users_list_component__["a" /* UsersListComponent */] },
    { path: 'useritem', component: __WEBPACK_IMPORTED_MODULE_10__user_item_user_item_component__["a" /* UserItemComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__games_list_games_list_component__["a" /* GamesListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__users_list_users_list_component__["a" /* UsersListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__user_item_user_item_component__["a" /* UserItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_8__user_service_service__["a" /* UserServiceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/games-list/games-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/games-list/games-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  games-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/games-list/games-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GamesListComponent = /** @class */ (function () {
    function GamesListComponent() {
    }
    GamesListComponent.prototype.ngOnInit = function () {
    };
    GamesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-games-list',
            template: __webpack_require__("./src/app/games-list/games-list.component.html"),
            styles: [__webpack_require__("./src/app/games-list/games-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GamesListComponent);
    return GamesListComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\n\na {\n  color: #00B7FF;\n}\n\n#login-form {\n  max-width : 600px;\n  min-width: 300px;\n  padding: 15px;\n  background-color : #eee;\n  border-radius: .5em;\n  margin-top: 1em;\n}\n\n/*body {*/\n\n/*!*background: #eee !important;*!*/\n\n/*background-size: cover; !* rescales the image to cover the window *!*/\n\n/*!* shown during image load *!*/\n\n/*background: #464646 url(\"../images/back1.jpg\") repeat-x fixed center center;*/\n\n/*}*/\n\n.wrapper {\n  margin-top: 80px;\n  margin-bottom: 80px;\n}\n\n.form-signin {\n  max-width: 380px;\n  padding: 15px 35px 45px;\n  margin: 0 auto;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.form-signin-heading,\n.checkbox {\n  margin-bottom: 30px;\n}\n\n.checkbox {\n  font-weight: normal;\n}\n\n.form-control {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n}\n\n/*@include box-sizing(border-box);*/\n\n/*&:focus {*/\n\n/*z-index: 2;*/\n\n/*}*/\n\n/*}*/\n\ninput[type=\"text\"] {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\ninput[type=\"password\"] {\n  margin-bottom: 20px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n#background{\n\n  background-image: url('back1.e919ebc6b254b90e6c28.jpg');\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: -1;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"background\">\n<div id=\"login\" style=\"position: relative; top:200px; \">\n  <div class=\"wrapper\" >\n    <form class=\"form-signin\" target=\"nm_iframe1\">\n      <h2 class=\"form-signin-heading\">Please login</h2>\n      <br>\n      <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email Address\"  [(ngModel)]=\"email\"/>\n\n      <input style=\"margin-top: 10px\" type=\"password\" class=\"form-control\"  name=\"password\" placeholder=\"password\" [(ngModel)]=\"password\"/>\n\n      <br>\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"login($event)\">Login</button>\n      <label style=\"color: #873920;display: none\" id=\"invalid1\" >Invalid username/password!</label>\n      <label style=\"color: #873920; display: none\" id=\"invalid2\">Invalid format of email!</label>\n      <label style=\"color: #873920; display: none\" id=\"invalid5\">Disabled account!</label>\n    </form>\n\n    <iframe id=\"id_iframe1\" name=\"nm_iframe1\" style=\"display:none;\"></iframe>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.LOGIN_URL = "http://localhost:3000/wordgame/api/login/v3";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.email = "samwise@mordor.org";
        this.password = "123";
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var credentials = { email: this.email, password: this.password };
        this.http.post(this.LOGIN_URL, credentials, { observe: 'response' })
            .map(function (res) {
            _this.userService.setToken(res.headers.get('X-CSRF-TOKEN'));
            return res.body;
        })
            .subscribe(function (data) {
            console.log(data);
            if (data.role == "ADMIN") {
                console.log("This is Admin");
                _this.userService.setUser(data);
                _this.router.navigateByUrl('adminpage');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service_service__["a" /* UserServiceService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user-item/user-item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-item/user-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page4\"  >\n  <nav class=\"navbar navbar-inverse\">\n    <p class=\"navbar-text\" style=\"margin-left: 30px\" id=\"page4UserID\">Signed in as Mark Otto</p>\n    <button type=\"button\" class=\"btn btn-default navbar-btn navbar-right\" style=\"margin-right: 20px\" onclick=\"logout()\">Log Out</button>\n  </nav>\n  <div class=\"col-md-10 col-md-offset-1\">\n    <div class=\"form-group col-md-4 col-md-offset-3\" style=\"display: none\">\n      <input type=\"text\" class=\"form-control\" id=\"userID\">\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label for=\"fname\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"fname\">\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label for=\"lname\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"lname\">\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"jane.doe@example.com\">\n    </div>\n\n    <div class=\"form-group col-md-4 col-md-offset-3\" id=\"pswdiv\" style=\"display: none\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\">\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label>Rule</label><br>\n      <label class=\"radio-inline\">\n        <input type=\"radio\" name=\"radio\" id=\"admin\" value=\"option1\"> ADMIN\n      </label>\n      <label class=\"radio-inline\">\n        <input type=\"radio\" name=\"radio\" id=\"user\" value=\"option2\"> USER\n      </label>\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label>Enabled</label><br>\n      <div class=\"checkbox\">\n        <label>\n          <input type=\"checkbox\" id=\"enabled\"> Enabled\n        </label>\n      </div>\n    </div>\n    <div class=\"form-group col-md-9 col-md-offset-3\">\n      <button type=\"submit\" class=\"btn btn-default col-md-1\" onclick=\"backToAdminPage()\">Back</button>\n      <button type=\"submit\" class=\"btn btn-default col-md-1 col-md-offset-1\" style=\"display: none\" id=\"create\" onclick=\"createUser()\">Create</button>\n      <button type=\"submit\" class=\"btn btn-default col-md-1 col-md-offset-1\" style=\"display: none\" id=\"update\" onclick=\"updateUser()\">Update</button>\n\n\n    </div>\n    <div class=\"form-group col-md-9 col-md-offset-3\">\n      <label style=\"color: #873920;display: none\" id=\"invalid3\" >Incompelete form</label>\n      <label style=\"color: #873920; display: none\" id=\"invalid4\">Invalid format of email!</label>\n    </div>\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/user-item/user-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserItemComponent = /** @class */ (function () {
    function UserItemComponent() {
    }
    UserItemComponent.prototype.ngOnInit = function () {
    };
    UserItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-item',
            template: __webpack_require__("./src/app/user-item/user-item.component.html"),
            styles: [__webpack_require__("./src/app/user-item/user-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserItemComponent);
    return UserItemComponent;
}());



/***/ }),

/***/ "./src/app/user-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserServiceService = /** @class */ (function () {
    function UserServiceService() {
    }
    UserServiceService.prototype.setUser = function (user) {
        this.user = user;
    };
    UserServiceService.prototype.setToken = function (csrf) {
        this.csrf = csrf;
    };
    UserServiceService.prototype.getUser = function () {
        return this.user;
    };
    UserServiceService.prototype.getToken = function () {
        return this.csrf;
    };
    UserServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserServiceService);
    return UserServiceService;
}());



/***/ }),

/***/ "./src/app/users-list/users-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users-list/users-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page3\">\n  <nav class=\"navbar navbar-inverse\">\n    <p class=\"navbar-text\" style=\"margin-left: 30px\" id=\"adminEmail\">{{userService.getUser().email}}</p>\n    <button type=\"button\" class=\"btn btn-default navbar-btn navbar-right\" style=\"margin-right: 20px\" (click)=\"logout()\">Log Out</button>\n  </nav>\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\">\n    <a onmouseover=\"\" style=\"cursor: pointer;\" (click)=\"viewUser('create')\">Create User</a>\n  </div>\n  <br>\n\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\">\n    <div style=\"margin-top: 10px\">\n      <div class=\"form-group col-md-2 col-md-offset-8\">\n        <input type=\"text\" class=\"form-control\" id=\"search\" placeholder=\"Search Here!\" [ngModel]=\"filter\">\n      </div>\n      <div class=\"form-group col-md-1\">\n        <button type=\"submit\" (click)=\"searchUser()\" class=\"btn btn-primary\">Search</button>\n      </div>\n      <div class=\"form-group col-md-1\">\n        <button type=\"submit\" (click)=\"refreshTable()\" class=\"btn btn-primary\">Refresh</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\">\n    <table class=\"table table-bordered\" style=\"width:100%\" id=\"userList\" >\n      <thead>\n      <tr>\n        <th>First-name</th>\n        <th>Last-name</th>\n        <th>Email</th>\n        <th>Role</th>\n        <th>Enabled Status</th>\n      </tr>\n      </thead>\n      <tbody id=\"userTB\">\n      <tr *ngFor=\"let user of users\" >\n        <td>{{user.first}}</td>\n        <td>{{user.last}}</td>\n        <td>{{user.email}}</td>\n        <td>{{user.role}}</td>\n        <td>{{user.enabled}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/users-list/users-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.retrieveUsers();
    };
    UsersListComponent.prototype.retrieveUsers = function () {
        this.filter = '';
        this.searchUsers();
    };
    UsersListComponent.prototype.searchUsers = function () {
        var _this = this;
        var THINGS_URL = "http://localhost:3000/wordgame/api/admins/v3/user";
        this.http.get(THINGS_URL).subscribe(function (data) {
            _this.users = data;
        });
        this.filter = '';
    };
    UsersListComponent.prototype.viewUser = function (type) {
        if (type == "create") {
            this.router.navigate(['useritem']);
        }
        else {
        }
    };
    UsersListComponent.prototype.logout = function () {
        var _this = this;
        var LOGOUT_URL = "http://localhost:3000/wordgame/api/logout/v3";
        this.http.post(LOGOUT_URL, {}).subscribe(function (data) {
            _this.router.navigate(['login']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UsersListComponent.prototype, "users", void 0);
    UsersListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users-list',
            template: __webpack_require__("./src/app/users-list/users-list.component.html"),
            styles: [__webpack_require__("./src/app/users-list/users-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service_service__["a" /* UserServiceService */]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map