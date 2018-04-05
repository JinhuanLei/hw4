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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_create_user_create_component__ = __webpack_require__("./src/app/user-create/user-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__game_item_game_item_component__ = __webpack_require__("./src/app/game-item/game-item.component.ts");
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
    { path: 'useritem', component: __WEBPACK_IMPORTED_MODULE_10__user_item_user_item_component__["a" /* UserItemComponent */] },
    { path: 'createuser', component: __WEBPACK_IMPORTED_MODULE_11__user_create_user_create_component__["a" /* UserCreateComponent */] },
    { path: 'gamelist', component: __WEBPACK_IMPORTED_MODULE_9__games_list_games_list_component__["a" /* GamesListComponent */] },
    { path: 'gameitem', component: __WEBPACK_IMPORTED_MODULE_12__game_item_game_item_component__["a" /* GameItemComponent */] }
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
                __WEBPACK_IMPORTED_MODULE_10__user_item_user_item_component__["a" /* UserItemComponent */],
                __WEBPACK_IMPORTED_MODULE_11__user_create_user_create_component__["a" /* UserCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_12__game_item_game_item_component__["a" /* GameItemComponent */]
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

/***/ "./src/app/game-item/game-item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/game-item/game-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page2\">\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\" id=\"gamepage\" [ngStyle]=\"{backgroundImage:'url(' + gameurl + ')'}\">\n    <!--<div class=\"modal-header\">-->\n    <div >\n      <button type=\"submit\" class=\"btn btn-danger\" style=\"float:right\" (click)=\"closeGame()\"><span aria-hidden=\"true\" >&times;</span></button>\n      <form class=\"form-inline\" target=\"nm_iframe\" id=\"guessform\" *ngIf=\"game.status=='unfinished'\">\n        <div class=\"form-group\">\n          <label id=\"remaining\"></label>\n          <label>guesses remaining : {{game.remaining}}</label>&nbsp;&nbsp;&nbsp;\n          <input type=\"text\" class=\"form-control\" style=\"width: 50px\" id=\"letter\" autofocus=\"\" name=\"guess\" [(ngModel)]=\"guess\" >\n          <button type=\"submit\" (click)=\"makeGuess()\" class=\"btn btn-primary\">Guess</button>\n        </div>\n      </form>\n      <iframe id=\"id_iframe\" name=\"nm_iframe\" style=\"display:none;\"></iframe>\n    </div>\n    <br> <br>\n    <div class=\"col-md-3 col-md-offset-9\" style=\"text-align: right\" id=\"guesses\" >\n      <label *ngFor=\"let a of StringToArr(game.guesses)\"[ngStyle]=\"{width: '30px',height:'40px',textAlign:'center', background:game.colors.guessBackground, fontSize:'30px', fontFamily:game.font.rule, color:game.colors.textBackground}\">{{a}}</label>\n\n    </div>\n    <br>\n    <div class=\"col-md-5\" id=\"wordview\" >\n      <label *ngFor=\"let a of StringToArr(game.view)\"[ngStyle]=\"{width: '30px',height:'40px',textAlign:'center', background:game.colors.wordBackground, fontSize:'30px', fontFamily:game.font.rule, color:game.colors.textBackground}\">{{a}}</label>\n\n    </div>\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/game-item/game-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameItemComponent; });
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




var GameItemComponent = /** @class */ (function () {
    function GameItemComponent(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.gameurl = "";
        this.strArr = [];
    }
    // guesses:any;
    GameItemComponent.prototype.ngOnInit = function () {
        this.csrf = sessionStorage.getItem("csrf");
        this.game = JSON.parse(sessionStorage.getItem("game"));
        //sessionStorage.removeItem("game");
        this.user = JSON.parse(sessionStorage.getItem("user"));
        this.validateUser();
        // this.guesses=this.game.guesses;
        if (this.game.status == "victory") {
            this.gameurl = "http://charity.cs.uwlax.edu/views/cs402/homeworks/hw2/images/winner.gif";
        }
        else if (this.game.status == "loss") {
            this.gameurl = "http://charity.cs.uwlax.edu/views/cs402/homeworks/hw2/images/cry.gif";
        }
    };
    GameItemComponent.prototype.validateUser = function () {
        this.http.get("/wordgame/api/uid/v4").subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    GameItemComponent.prototype.makeGuess = function () {
        var _this = this;
        this.http.post("/wordgame/api/v3/" + this.user._id + "/" + this.game._id, { "guess": this.guess, "userid": this.user._id, "gid": this.game._id, "csrf": this.csrf }).subscribe(function (data) {
            console.log(data);
            _this.game = data;
            _this.guess = "";
            if (_this.game.status == "victory") {
                _this.gameurl = "http://charity.cs.uwlax.edu/views/cs402/homeworks/hw2/images/winner.gif";
            }
            else if (_this.game.status == "loss") {
                _this.gameurl = "http://charity.cs.uwlax.edu/views/cs402/homeworks/hw2/images/cry.gif";
            }
        }, function (error) {
            console.log(error);
            if (error.error == "Modified CsrfToken !") {
                alert("Modified CsrfToken !");
                _this.router.navigateByUrl('login');
            }
            else if (error.error == "repeat")
                _this.guess = "";
            alert("repeat guess");
            console.log("repeat");
        });
    };
    GameItemComponent.prototype.closeGame = function () {
        this.router.navigate(['gamelist']);
    };
    GameItemComponent.prototype.StringToArr = function (str) {
        this.strArr = [];
        for (var t = 0; t < (str).length; t++) {
            this.strArr.push(str[t]);
        }
        return this.strArr;
    };
    GameItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-item',
            template: __webpack_require__("./src/app/game-item/game-item.component.html"),
            styles: [__webpack_require__("./src/app/game-item/game-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service_service__["a" /* UserServiceService */]])
    ], GameItemComponent);
    return GameItemComponent;
}());



/***/ }),

/***/ "./src/app/games-list/games-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/games-list/games-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page1\" >\n\n  <nav class=\"navbar navbar-inverse\">\n    <p class=\"navbar-text\" style=\"margin-left: 30px\" id=\"userEmail\">{{email}}</p>\n    <button type=\"button\" class=\"btn btn-default navbar-btn navbar-right\" style=\"margin-right: 20px\" (click)=\"logout()\">Log Out</button>\n  </nav>\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\">\n    <div >\n      <form class=\"form-inline\" >\n        <div class=\"col-md-3\">\n          <label>Font</label>&nbsp;\n          <select class=\"form-control\" id=\"font\" name=\"font\" [(ngModel)]=\"selectedFont\" (ngModelChange)=\"onFontChange($event)\">\n            <option *ngFor=\"let font of fonts\" [ngValue]=\"font.category\">{{font.category}}</option>\n          </select>\n        </div>\n\n        <div class=\"col-md-2\">\n          <label>Level</label> &nbsp;\n          <select class=\"form-control\" id=\"diff\" name=\"diff\" [(ngModel)]=\"selectedDiff\" (ngModelChange)=\"onDiffChange($event)\">\n            <!--<option value={{font.category}}>{{font.category}}</option>-->\n            <!--<option value={{font.category}}>{{font.category}}</option>-->\n            <option value=\"easy\">easy</option>\n            <option value=\"medium\">medium</option>\n\n            <option value=\"hard\">hard</option>\n\n            <!--<option *ngFor=\"let list of levelslist\">{{list.name}}</option>-->\n          </select>\n        </div>\n\n        <div class=\"form-group col-md-4\">\n          <!--<label class=\"sr-only\" for=\"exampleInputAmount\">Amount (in dollars)</label>-->\n          <div class=\"input-group\">\n            <div class=\"input-group-addon\">Word</div>\n\n            <input type=\"color\" class=\"form-control\"  name=\"wordcolor\" style=\"width: 150%\" [(ngModel)]=\"wordcolor\" value={{wordcolor}}>\n\n          </div>\n          &nbsp; &nbsp;\n          <div class=\"input-group\">\n            <div class=\"input-group-addon\">Guess</div>\n\n            <input type=\"color\" class=\"form-control\"  name=\"guesscolor\" style=\"width: 150%\" value={{guesscolor}} [(ngModel)]=\"guesscolor\">\n\n          </div> &nbsp; &nbsp;\n          <div class=\"input-group\">\n            <div class=\"input-group-addon\">Fore</div>\n\n            <input type=\"color\" class=\"form-control\"  name=\"forecolor\" style=\"width: 150%\" value={{forecolor}}  [(ngModel)]=\"forecolor\">\n          </div>\n          &nbsp; &nbsp;\n\n        </div>\n      </form>\n      <div class=\"col-md-1\">\n        <button type=\"submit\" (click)=\"saveDefaults()\" class=\"btn btn-primary\">Save Defaults</button>\n      </div>\n      <div class=\"col-md-1 \"  style=\"margin-left: 50px\">\n        <button type=\"submit\" (click)=\"newGame()\" class=\"btn btn-primary\" >New Game</button>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\" id=\"gametable\">\n    <table style=\"width:100%\" id=\"gameList\" >\n      <thead>\n      <tr>\n        <th>Level</th>\n        <th>Phrase</th>\n        <th>Remaining</th>\n        <th>Answer</th>\n        <th>Status</th>\n      </tr>\n      </thead>\n      <tbody id=\"hi\">\n\n      <tr *ngFor=\"let game of games\" (click)=\"viewGame($event)\" style=\"cursor: pointer;\" id={{game._id}}>\n        <td>{{game.level.name}}</td>\n        <td><label *ngFor=\"let a of StringToArr(game.view)\"[ngStyle]=\"{width: '30px',height:'40px',textAlign:'center', background:game.colors.wordBackground, fontSize:'30px', fontFamily:game.font.rule, color:game.colors.textBackground}\">{{a}}</label></td>\n        <td>{{game.remaining}}</td>\n        <td>{{game.status!=\"unfinished\"?game.target:\"\"}}</td>\n        <td>{{game.status}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/games-list/games-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesListComponent; });
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




var GamesListComponent = /** @class */ (function () {
    function GamesListComponent(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.meta = { defaults: { colors: { wordBackground: "", guessBackground: "", textBackground: "" }, level: { name: "" }, font: { category: "" } }, fonts: "", levels: { name: "" } };
        this.strArr = [];
    }
    GamesListComponent.prototype.ngOnInit = function () {
        this.csrf = sessionStorage.getItem("csrf");
        this.validateUser();
    };
    GamesListComponent.prototype.StringToArr = function (str) {
        this.strArr = [];
        for (var t = 0; t < (str).length; t++) {
            this.strArr.push(str[t]);
        }
        return this.strArr;
    };
    GamesListComponent.prototype.onDiffChange = function (value) {
        this.selectedDiff = value;
        console.log(this.selectedDiff);
    };
    GamesListComponent.prototype.onFontChange = function (value) {
        this.selectedFont = value;
        console.log(this.selectedFont);
    };
    GamesListComponent.prototype.validateUser = function () {
        var _this = this;
        this.http.get("/wordgame/api/uid/v4").subscribe(function (data) {
            console.log(data);
            _this.loadFont();
            _this.initialDefaults();
            _this.suser = JSON.parse(sessionStorage.getItem('user'));
            _this.email = _this.suser.email;
            // this.levelslist=this.meta.levels;
            _this.loadGameList();
        }, function (error) {
            _this.router.navigate(['login']);
        });
    };
    GamesListComponent.prototype.loadFont = function () {
        var _this = this;
        this.http.get("/wordgame/api/v3/meta/fonts", {}).subscribe(function (data) {
            _this.fonts = data;
            // this.initialDefaults();
        });
    };
    GamesListComponent.prototype.saveDefaults = function () {
        var defaults = { "font": this.selectedFont, "level": this.selectedDiff, "wordcolor": this.wordcolor, "guesscolor": this.guesscolor, "forecolor": this.forecolor };
        this.http.put("/wordgame/api/v3/" + this.suser._id + "/defaults", defaults).subscribe(function (data) {
            console.log(data);
            sessionStorage.setItem("key", JSON.stringify(data));
        });
    };
    GamesListComponent.prototype.loadGameList = function () {
        var _this = this;
        this.http.get("/wordgame/api/v3/" + this.suser._id).subscribe(function (data) {
            console.log(data);
            _this.games = data;
        });
    };
    GamesListComponent.prototype.viewGame = function (event) {
        var _this = this;
        var gid = event.currentTarget.id;
        this.http.get("/wordgame/api/v3/" + this.suser._id + "/" + gid).subscribe(function (data) {
            // console.log(data);
            sessionStorage.setItem("game", JSON.stringify(data));
            _this.router.navigate(['gameitem']);
        });
    };
    GamesListComponent.prototype.newGame = function () {
        var _this = this;
        var defaults = { "font": this.selectedFont, "level": this.selectedDiff, "wordcolor": this.wordcolor, "guesscolor": this.guesscolor, "forecolor": this.forecolor, "csrf": this.csrf };
        this.http.post("/wordgame/api/v3/" + this.suser._id, defaults).subscribe(function (data) {
            console.log(data);
            sessionStorage.setItem("game", JSON.stringify(data));
            _this.router.navigate(['gameitem']);
        }, function (error) {
            if (error.error == "Modified CsrfToken !") {
                alert("Modified CsrfToken !");
                _this.router.navigateByUrl('login');
            }
        });
    };
    GamesListComponent.prototype.logout = function () {
        var _this = this;
        // var LOGOUT_URL = "http://localhost:3000/wordgame/api/logout/v3";
        var LOGOUT_URL = "/wordgame/api/logout/v3";
        this.http.post(LOGOUT_URL, {}).subscribe(function (data) {
            _this.router.navigate(['login']);
        });
    };
    GamesListComponent.prototype.initialDefaults = function () {
        var _this = this;
        this.http.get("/wordgame/api/v3/meta", {}).subscribe(function (data) {
            // console.log(data);
            _this.meta = data;
            _this.selectedDiff = _this.meta.defaults.level.name;
            _this.selectedFont = _this.meta.defaults.font.category;
            _this.levelslist = data.levels;
            _this.guesscolor = _this.meta.defaults.colors.guessBackground;
            _this.wordcolor = _this.meta.defaults.colors.wordBackground;
            _this.forecolor = _this.meta.defaults.colors.textBackground;
            // console.log(this.levelslist)
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], GamesListComponent.prototype, "games", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], GamesListComponent.prototype, "levelslist", void 0);
    GamesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-games-list',
            template: __webpack_require__("./src/app/games-list/games-list.component.html"),
            styles: [__webpack_require__("./src/app/games-list/games-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service_service__["a" /* UserServiceService */]])
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

module.exports = "<div id=\"background\">\n<div id=\"login\" style=\"position: relative; top:200px; \">\n  <div class=\"wrapper\" >\n    <form class=\"form-signin\" target=\"nm_iframe1\">\n      <h2 class=\"form-signin-heading\">Please login</h2>\n      <br>\n      <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email Address\"  [(ngModel)]=\"email\"/>\n\n      <input style=\"margin-top: 10px\" type=\"password\" class=\"form-control\"  name=\"password\" placeholder=\"password\" [(ngModel)]=\"password\"/>\n\n      <br>\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"login($event)\">Login</button>\n      <label *ngIf=\"invalid1===1\" style=\"color: #873920;\" id=\"invalid1\" >Invalid username/password!</label>\n      <label *ngIf=\"invalid2===1\" style=\"color: #873920; \" id=\"invalid2\">Invalid format of email!</label>\n      <label *ngIf=\"invalid5===1\" style=\"color: #873920; \" id=\"invalid5\">Disabled account!</label>\n    </form>\n\n    <iframe id=\"id_iframe1\" name=\"nm_iframe1\" style=\"display:none;\"></iframe>\n  </div>\n</div>\n</div>\n"

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
        //LOGIN_URL : string ="http://localhost:3000/wordgame/api/login/v3"
        this.LOGIN_URL = "/wordgame/api/login/v3";
        this.invalid1 = 0;
        this.invalid2 = 0;
        this.invalid5 = 0;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.email = "samwise@mordor.org";
        // this.password = "123";
        this.validateUser();
    };
    LoginComponent.prototype.validateUser = function () {
        var _this = this;
        this.http.get("/wordgame/api/uid/v4").subscribe(function (data) {
            console.log(data);
            if (data.role == "ADMIN") {
                _this.router.navigateByUrl('adminpage');
            }
            else {
                _this.router.navigateByUrl('gamelist');
            }
        }, function (error) {
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.invalid1 = 0;
        this.invalid2 = 0;
        this.invalid5 = 0;
        var credentials = { email: this.email, password: this.password };
        this.http.post(this.LOGIN_URL, credentials, { observe: 'response' })
            .map(function (res) {
            _this.csrf = res.headers.get('CSRF-Token');
            _this.userService.setToken(res.headers.get('CSRF-Token'));
            sessionStorage.setItem("csrf", _this.csrf);
            console.log(_this.csrf);
            return res.body;
        })
            .subscribe(function (data) {
            console.log(data);
            _this.userService.setUser(data);
            sessionStorage.setItem("user", JSON.stringify(data));
            if (data.role == "ADMIN") {
                _this.router.navigateByUrl('adminpage');
            }
            else {
                _this.router.navigateByUrl('gamelist');
            }
        }, function (error) {
            console.log(error);
            if (error.error == "Forbidden") {
                _this.invalid1 = 1;
            }
            else if (error.error == "Disabled") {
                _this.invalid5 = 1;
            }
            else {
                _this.invalid1 = 1;
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

/***/ "./src/app/user-create/user-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-create/user-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page4\" xmlns:ng-show=\"http://www.w3.org/1999/xhtml\">\n  <nav class=\"navbar navbar-inverse\">\n    <p class=\"navbar-text\" style=\"margin-left: 30px\" id=\"page4UserID\">{{adminemail}}</p>\n    <button type=\"button\" class=\"btn btn-default navbar-btn navbar-right\" style=\"margin-right: 20px\" (click)=\"logout()\">Log Out</button>\n  </nav>\n  <div class=\"col-md-10 col-md-offset-1\">\n    <div class=\"form-group col-md-4 col-md-offset-3\" style=\"display: none\">\n      <input type=\"text\" class=\"form-control\" id=\"userID\" >\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label for=\"fname\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"fname\" [(ngModel)]=\"newUser.first\">\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label for=\"lname\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"lname\" [(ngModel)]=\"newUser.last\">\n    </div>\n\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"newUser.email\" ngDefaultControl>\n    </div>\n\n    <div class=\"form-group col-md-4 col-md-offset-3\" id=\"pswdiv\"  >\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"newUser.password\">\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label>Rule</label><br>\n      <label class=\"radio-inline\">\n        <input type=\"radio\" name=\"radio\" id=\"admin\" value=\"option1\" value=\"ADMIN\" [(ngModel)]=\"newUser.role\"> ADMIN\n      </label>\n      <label class=\"radio-inline\">\n        <input type=\"radio\" name=\"radio\" id=\"user\" value=\"option2\" value=\"USER\" [(ngModel)]=\"newUser.role\"> USER\n      </label>\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label>Enabled</label><br>\n      <div class=\"checkbox\">\n        <label>\n          <input type=\"checkbox\" id=\"enabled\" [(ngModel)]=\"newUser.enabled\" > Enabled\n        </label>\n      </div>\n    </div>\n    <div class=\"form-group col-md-9 col-md-offset-3\">\n      <button type=\"submit\" class=\"btn btn-default col-md-1\" (click)=\"backToAdminPage()\">Back</button>\n      <button type=\"submit\" class=\"btn btn-default col-md-1 col-md-offset-1\"  id=\"create\" (click)=\"createUser()\">Create</button><button type=\"submit\" class=\"btn btn-default col-md-1 col-md-offset-1\" style=\"display: none\" id=\"update\" onclick=\"updateUser()\">Update</button>\n\n    </div>\n    <div class=\"form-group col-md-9 col-md-offset-3\" *ngIf=\"invalid3===1\" >\n      <label style=\"color: #873920;\" id=\"invalid3\"  >Incompelete form !</label>\n    </div>\n    <div class=\"form-group col-md-9 col-md-offset-3\" *ngIf=\"invalidRepeat===1\" >\n      <label style=\"color: #873920;\" id=\"invalidRepeat\"  >Repeat Email !</label>\n    </div>\n    <div class=\"form-group col-md-9 col-md-offset-3\" *ngIf=\"invalid4===1\">\n      <label style=\"color: #873920;\" id=\"invalid4\"  >Invalid format of email !</label>\n    </div>\n    <div class=\"form-group col-md-9 col-md-offset-3\" *ngIf=\"invalidPassword===1\">\n      <label style=\"color: #873920;\"  >Invalid format of password !</label>\n    </div>\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/user-create/user-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.newUser = { first: '', last: '', email: '', role: '', enabled: '', password: '', csrf: "" };
        this.invalid3 = 0;
        this.invalid4 = 0;
        this.invalidPassword = 0;
        this.invalidRepeat = 0;
    }
    UserCreateComponent.prototype.ngOnInit = function () {
        this.suser = JSON.parse(sessionStorage.getItem('user'));
        this.adminemail = this.suser.email;
        this.csrf = sessionStorage.getItem("csrf");
        this.newUser.csrf = this.csrf;
    };
    UserCreateComponent.prototype.backToAdminPage = function () {
        this.router.navigateByUrl('adminpage');
    };
    UserCreateComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    UserCreateComponent.prototype.createUser = function () {
        var _this = this;
        // let URL = 'http://localhost:3000/wordgame/api/admins/v3/users';
        this.invalidPassword = 0;
        this.invalid3 = 0;
        this.invalid4 = 0;
        this.invalidRepeat = 0;
        if (!this.newUser.email || !this.newUser.first || !this.newUser.last || !this.newUser.password || !this.newUser.role) {
            this.invalid3 = 1;
            return;
        }
        var re = /\d/;
        if (this.newUser.password.length < 8 || !(re.test(this.newUser.password))) {
            console.log(this.newUser.password.length);
            console.log(re.test(this.newUser.password));
            this.invalidPassword = 1;
            return;
        }
        if (!this.validateEmail(this.newUser.email)) {
            this.invalid4 = 1;
            return;
        }
        if (this.newUser.enabled) {
            this.newUser.enabled = "Enabled";
        }
        else {
            this.newUser.enabled = "Disabled";
        }
        this.http.post("/wordgame/api/admins/v3/users", this.newUser, { observe: 'response' })
            .map(function (res) {
            _this.userService.setToken(res.headers.get('CSRF-Token'));
            return res.body;
        })
            .subscribe(function (data) {
            console.log("userCreate: ", data);
            // this.onThingCreate.emit( data );
            // this.newThing.name = '';
            // this.newThing.value = '';
            _this.router.navigateByUrl('adminpage');
        }, function (error) {
            console.log(error);
            if (error.error == "Repeat") {
                _this.invalidRepeat = 1;
            }
            else if (error.error == "Modified CsrfToken !") {
                alert("Modified CsrfToken !");
                _this.router.navigateByUrl('login');
            }
        });
    };
    UserCreateComponent.prototype.logout = function () {
        var _this = this;
        // var LOGOUT_URL = "http://localhost:3000/wordgame/api/logout/v3";
        var LOGOUT_URL = "/wordgame/api/logout/v3";
        this.http.post(LOGOUT_URL, {}).subscribe(function (data) {
            _this.router.navigate(['login']);
        });
    };
    UserCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-create',
            template: __webpack_require__("./src/app/user-create/user-create.component.html"),
            styles: [__webpack_require__("./src/app/user-create/user-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__user_service_service__["a" /* UserServiceService */]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/user-item/user-item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-item/user-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page4\"  >\n  <nav class=\"navbar navbar-inverse\">\n    <p class=\"navbar-text\" style=\"margin-left: 30px\" id=\"page4UserID\">{{email}}</p>\n    <button type=\"button\" class=\"btn btn-default navbar-btn navbar-right\" style=\"margin-right: 20px\" (click)=\"logout()\">Log Out</button>\n  </nav>\n  <div class=\"col-md-10 col-md-offset-1\">\n    <div class=\"form-group col-md-4 col-md-offset-3\" style=\"display: none\">\n      <input type=\"text\" class=\"form-control\" id=\"userID\" [(ngModel)]=\"user._id\">\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label for=\"fname\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"fname\" [(ngModel)]=\"user.name.first\">\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label for=\"lname\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"lname\" [(ngModel)]=\"user.name.last\">\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"jane.doe@example.com\" [(ngModel)]=\"user.email\">\n    </div>\n\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label>Rule</label><br>\n      <label class=\"radio-inline\">\n        <input type=\"radio\" name=\"radio\" id=\"admin\" value=\"option1\" [disabled]=\"disableRadio\" [checked]=\"user.role == 'ADMIN'\" (change)=\"toggleAdmin($event)\"> ADMIN\n      </label>\n      <label class=\"radio-inline\">\n        <input type=\"radio\" name=\"radio\" id=\"user\" value=\"option2\" [disabled]=\"disableRadio\" [checked]=\"user.role == 'USER'\" (change)=\"toggleUser($event)\"> USER\n      </label>\n    </div>\n    <div class=\"form-group col-md-4 col-md-offset-3\">\n      <label>Enabled</label><br>\n      <div class=\"checkbox\">\n        <label>\n          <!--<input type=\"checkbox\" id=\"enabled\" [checked]=\"user.enabled == 'Enabled'\" [(ngModel)]=\"user.enabled\"> Enabled-->\n          <input type=\"checkbox\" id=\"enabled\" [checked]=\"user.enabled == 'Enabled'\" [disabled]=\"disableCheck\" (change)=\"toggleEnabled($event)\"> Enabled\n\n        </label>\n      </div>\n    </div>\n    <div class=\"form-group col-md-9 col-md-offset-3\">\n      <button type=\"submit\" class=\"btn btn-default col-md-1\" (click)=\"backToAdminPage()\">Back</button>\n      <button type=\"submit\" class=\"btn btn-default col-md-1 col-md-offset-1\"  id=\"update\" (click)=\"updateUser()\">Update</button>\n    </div>\n    <div class=\"form-group col-md-9 col-md-offset-3\" *ngIf=\"invalid3===1\" >\n      <label style=\"color: #873920;\" id=\"invalid3\"  >Incompelete form</label>\n    </div>\n    <div class=\"form-group col-md-9 col-md-offset-3\" *ngIf=\"invalid4===1\">\n      <label style=\"color: #873920;\" id=\"invalid4\"  >Invalid format of email!</label>\n    </div>\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/user-item/user-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserItemComponent; });
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




var UserItemComponent = /** @class */ (function () {
    function UserItemComponent(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.newUser = { uid: '', first: '', last: '', email: '', role: '', enabled: '', password: '', csrf: "" };
        this.invalid3 = 0;
        this.invalid4 = 0;
        this.disableRadio = false;
        this.disableCheck = false;
    }
    UserItemComponent.prototype.ngOnInit = function () {
        this.csrf = sessionStorage.getItem("csrf");
        this.suser = JSON.parse(sessionStorage.getItem('user')); //login User
        this.email = this.suser.email;
        if (sessionStorage.getItem("check")) {
            var objstr = sessionStorage.getItem("check");
            var obj = JSON.parse(objstr);
            this.user = obj;
            if (this.suser._id == this.user._id) {
                this.disableRadio = true;
            }
            if (this.user.role == "ADMIN") {
                this.disableCheck = true;
            }
            console.log(this.user);
            sessionStorage.removeItem("check");
        }
    };
    UserItemComponent.prototype.toggleEnabled = function (event) {
        if (event.target.checked) {
            this.user.enabled = "Enabled";
        }
        else {
            this.user.enabled = "Disabled";
        }
    };
    UserItemComponent.prototype.toggleAdmin = function (event) {
        if (event.target.checked) {
            this.user.role = "ADMIN";
        }
    };
    UserItemComponent.prototype.toggleUser = function (event) {
        if (event.target.checked) {
            this.user.role = "USER";
        }
    };
    UserItemComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    UserItemComponent.prototype.updateUser = function () {
        // if(!this.user.email||!this.user.first||!this.user.last||!this.user.role){
        //   this.invalid3=1;
        //   return;
        // }
        // if(!this.validateEmail(this.user.email)){
        //   this.invalid4=1;
        //   return;
        // }
        var _this = this;
        // if(this.user.enabled){
        //   this.user.enabled="Enabled"
        // }else {
        //   this.user.enabled="Disabled"
        // }
        this.newUser.uid = this.user._id;
        this.newUser.first = this.user.name.first;
        this.newUser.last = this.user.name.last;
        this.newUser.email = this.user.email;
        this.newUser.role = this.user.role;
        this.newUser.enabled = this.user.enabled;
        this.newUser.csrf = this.csrf;
        var PUT_URL = "/wordgame/api/admins/v3/users";
        console.log("newUser");
        console.log(this.newUser);
        this.http.put(PUT_URL, this.newUser, { responseType: "text" }).subscribe(function (data) {
            _this.router.navigateByUrl('adminpage');
        }, function (error) {
            if (error.error == "Modified CsrfToken !") {
                alert("Modified CsrfToken !");
                _this.router.navigateByUrl('login');
            }
        });
    };
    UserItemComponent.prototype.backToAdminPage = function () {
        this.router.navigateByUrl('adminpage');
    };
    UserItemComponent.prototype.logout = function () {
        var _this = this;
        // var LOGOUT_URL = "http://localhost:3000/wordgame/api/logout/v3";
        var LOGOUT_URL = "/wordgame/api/logout/v3";
        this.http.post(LOGOUT_URL, {}).subscribe(function (data) {
            _this.router.navigate(['login']);
        });
    };
    UserItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-item',
            template: __webpack_require__("./src/app/user-item/user-item.component.html"),
            styles: [__webpack_require__("./src/app/user-item/user-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service_service__["a" /* UserServiceService */]])
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

module.exports = "<div id=\"page3\">\n  <nav class=\"navbar navbar-inverse\">\n    <p class=\"navbar-text\" style=\"margin-left: 30px\" id=\"adminEmail\">{{email}}</p>\n    <button type=\"button\" class=\"btn btn-default navbar-btn navbar-right\" style=\"margin-right: 20px\" (click)=\"logout()\">Log Out</button>\n  </nav>\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\">\n    <a onmouseover=\"\" style=\"cursor: pointer;\" (click)=\"viewUser('create')\">Create User</a>\n  </div>\n  <br>\n\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\">\n    <div style=\"margin-top: 10px\">\n      <div class=\"form-group col-md-2 col-md-offset-8\">\n        <input type=\"text\" class=\"form-control\" id=\"search\" placeholder=\"Search Here!\" [(ngModel)]=\"filter\">\n      </div>\n      <div class=\"form-group col-md-1\">\n        <button type=\"submit\" (click)=\"searchUser()\" class=\"btn btn-primary\">Search</button>\n      </div>\n      <div class=\"form-group col-md-1\">\n        <button type=\"submit\" (click)=\"refreshTable()\" class=\"btn btn-primary\">Refresh</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-10 col-md-offset-1 well well-sm\">\n    <table class=\"table table-bordered\" style=\"width:100%\" id=\"userList\" >\n      <thead>\n      <tr>\n        <th>First-name</th>\n        <th>Last-name</th>\n        <th>Email</th>\n        <th>Role</th>\n        <th>Enabled Status</th>\n      </tr>\n      </thead>\n      <tbody id=\"userTB\">\n      <tr *ngFor=\"let user of users\" (click)=\"viewUser($event)\" style=\"cursor: pointer;\" id={{user._id}}>\n        <td>{{user.name.first}}</td>\n        <td>{{user.name.last}}</td>\n        <td>{{user.email}}</td>\n        <td>{{user.role}}</td>\n        <td>{{user.enabled}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n\n</div>\n"

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
        this.validateUser();
    };
    UsersListComponent.prototype.validateUser = function () {
        var _this = this;
        this.http.get("/wordgame/api/uid/v4").subscribe(function (data) {
            console.log(data);
            _this.retrieveUsers();
            _this.suser = JSON.parse(sessionStorage.getItem('user'));
            _this.email = _this.suser.email;
            console.log(_this.email);
        }, function (error) {
            _this.router.navigate(['login']);
        });
    };
    UsersListComponent.prototype.retrieveUsers = function () {
        var _this = this;
        this.filter = '';
        this.http.get("/wordgame/api/admins/v3/users").subscribe(function (data) {
            console.log("users:" + data);
            _this.users = data;
        });
    };
    UsersListComponent.prototype.refreshTable = function () {
        this.retrieveUsers();
    };
    UsersListComponent.prototype.searchUser = function () {
        var _this = this;
        //var THINGS_URL = `http://localhost:3000/wordgame/api/admins/v3/users`;
        // var THINGS_URL ='/wordgame/api/admins/v3/users';
        var search = { "search": this.filter };
        console.log(search);
        this.http.post("/wordgame/api/admins/v3/search", search).subscribe(function (data) {
            console.log("users:" + data);
            _this.users = data;
        });
        this.filter = '';
    };
    UsersListComponent.prototype.viewUser = function (event) {
        var _this = this;
        if (event == "create") {
            this.router.navigate(['createuser']);
        }
        else {
            // console.log("row id:"+event.target)
            var uid = event.currentTarget.id;
            this.http.get("/wordgame/api/admins/v3/" + uid, {}).subscribe(function (data) {
                sessionStorage.setItem("check", JSON.stringify(data));
                _this.router.navigate(['useritem']);
            });
        }
    };
    UsersListComponent.prototype.logout = function () {
        var _this = this;
        // var LOGOUT_URL = "http://localhost:3000/wordgame/api/logout/v3";
        var LOGOUT_URL = "/wordgame/api/logout/v3";
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