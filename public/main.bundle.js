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

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_rooftable_rooftable_component__ = __webpack_require__("./src/app/components/rooftable/rooftable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_roof_service__ = __webpack_require__("./src/app/services/roof.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//components





//services



var appRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'sort', component: __WEBPACK_IMPORTED_MODULE_12__components_rooftable_rooftable_component__["a" /* RooftableComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_rooftable_rooftable_component__["a" /* RooftableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatSortModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13__services_roof_service__["a" /* RoofService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "#idx-header{\r\n    height:100vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    /*background */\r\n    background-color: #5b5b5b;\r\n    background-image: url('2.d573cb40375cf4a589c6.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n}\r\n\r\n#idx-mid{\r\n    height:100vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    /*background */\r\n    background-color: #5b5b5b;\r\n    background-image: url('1.d5c757b8de002fcb5775.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n}\r\n\r\n#idx-footer{\r\n    height:100vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    /*background */\r\n    background-color: #5b5b5b;\r\n    background-image: url('3.87eee7c2ebb24a0899ef.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.idx-center{\r\ndisplay: -webkit-box;\r\ndisplay: -ms-flexbox;\r\ndisplay: flex;\r\n-webkit-box-orient: vertical;\r\n-webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n-webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n-ms-flex-line-pack: center;\r\n    align-content: center;\r\n-webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\nmax-width: 800px;\r\ntext-align: center;\r\n}\r\n\r\n.container{\r\n    margin-top: 60px;\r\n}\r\n\r\np{\r\n    line-height: 55px;\r\n    color:#222222;\r\n    font-size: 1.9rem;\r\n    font-family: 'kotta one' ,serif;\r\n    text-align: center;\r\n    color:gray;\r\n    font-weight: bold;\r\n    padding: 10px;\r\n}\r\n\r\n.content\r\n{\r\n    background-color: rgba(255,255,255,0.9);\r\n    border-radius: 8px;\r\n}\r\n\r\n.content h1{\r\ncolor: red;\r\nmargin: 0px;\r\n\r\n border:5px solid black;\r\n\r\n}\r\n\r\nh1{\r\n    border:5px solid red;\r\n    padding: 10px;\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    font-family: 'Cantarell',serif;\r\n    color:white;\r\n    font-weight: bold;\r\n\r\n}\r\n\r\nh2{\r\n    padding: 10px;\r\n     font-size: 2.2rem;\r\n    text-align: center;\r\n    font-family: 'kotta one',serif;\r\n    color:red;\r\n    font-weight: bold;\r\n}\r\n\r\nul{\r\n    list-style: none;\r\n    font-size:1.5rem;\r\n    font-family: 'kotta one',serif;\r\n}\r\n\r\nli a\r\n{\r\n    margin-top: 30px;\r\n    font-size: 1.9rem;\r\n    color:lime;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n}\r\n\r\nli :hover{\r\n    color:cyan;\r\n    font-size:2.8rem;\r\n}\r\n\r\n#idx-header .idx-center h1:hover{\r\nfont-size:56px;\r\ncolor:lime;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n<section id =\"idx-header\">\n  <div class= \"idx-center\">\n     <h1>GetMeRoof</h1><br><br><br>\n  </div>\n</section>\n\n<section id =\"idx-mid\">\n  \n  <div class= \"idx-center\">\n    <div class=\"content\">\n      <h1>About The Company</h1><br><br><br>\n       \n      <p>\n    Get Me Roof aims to make property purchase experience hassle free with insights and updates which can be useful for Buyers.\n\n  While property purchase life cycle has multiple phases – discovery, shortlisting, comparisons, negotiations, financing and closure, at each step we aspire to help Buyers make informed decisions before they close on their dream property. Read our well crafted Home Buying Guide for step by step guidance around home buying.\n    </p>\n    </div>\n </div>\n</section>\n\n\n<section id =\"idx-footer\">\n  <div class= \"idx-center\">\n     <h2>Follow us on following platforms for regular updates</h2>\n\n        <ul>\n        <li><a href =\"https://www.facebook.com/getmeroof\">FaceBook</a></li>\n        <li><a href =\"https://twitter.com/getmeroof\">Twitter</a></li>\n        <li><a href =\"https://www.quora.com/Get-Me-Roof\">Quora</a></li>\n        <li><a href =\"https://medium.com/@getmeroof\">Medium</a></li>\n        <li><a href =\"https://www.linkedin.com/company/get-me-roof\">LinkedIn</a></li> \n        </ul>\n </div>\n</section>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".highlight :hover{\r\n    background-color: lightgray;\r\n    border:none;\r\n    border-radius: 10px;\r\n    color:green;\r\n    width: 150px;\r\n    height: 40px;\r\n    text-align: center;\r\n}\r\n.navborder{\r\n    border-radius: 8px;\r\n    margin-top: 3px;\r\n}\r\n.main{\r\n    font-family: 'kotta one',serif;\r\n    font-size: 22px;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark navborder main\">\n      <a class=\"navbar-brand main\" href=\"/home\">GetMeRoof</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li [routerLinkActive] = \"['active']\" class=\"nav-item highlight\">\n            <a  [routerLink]=\"['/home']\" class=\"nav-link\" href=\"/home\">HOME</a>\n          </li>\n          \n          <li [routerLinkActive] = \"['active']\" class=\"nav-item highlight \">\n            <a  [routerLink]=\"['/sort']\" class=\"nav-link\" href=\"/sort\">SORT</a>\n          </li>\n       </ul>\n\n          <ul class = \"nav navbar-nav navbar-right\">\n          <li [routerLinkActive] = \"['active']\" class=\"nav-item highlight\">\n            <a [routerLink]=\"['/register']\" class=\"nav-link\" href=\"/register\">REGISTER</a>\n          </li>\n          \n         </ul>\n          </div>\n    </nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n    font-family: 'kotta one',serif;\r\n}\r\nlabel{\r\n    \r\n      color:purple;\r\n      font-size:16px;\r\n      \r\n}\r\nlabel:hover{\r\n     color:red;\r\n     cursor: pointer;\r\n     \r\n     font-size: 20px;\r\n}\r\nh2{\r\n    color:lime;\r\n  \r\n\r\n}\r\nh2:hover{\r\n    color:cyan;\r\n    cursor: pointer;\r\n    font-size:3.8rem;\r\n    \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class = \"container\">\n<h2 class =\"paeg-header heading\">Register</h2>\n\n<form (submit)=\"onRegisterSubmit()\">\n  <div class = \"form-group\">\n    <label>Distance:</label>\n    <input type=\"number\" [(ngModel)]= \"Distance\" name = \"Distance\" class = \"form-control\">\n  </div>\n\n  <div class = \"form-group\">\n    <label>Rate:</label>\n    <input type=\"number\"  [(ngModel)]= \"Rate\" name = \"Rate\" class = \"form-control\">\n  </div>\n\n  <div class = \"form-group\">\n    <label>ProjectSize:</label>\n    <input type=\"number\"  [(ngModel)]= \"ProjectSize\" name = \"ProjectSize\" class = \"form-control\">\n  </div>\n\n  <div class = \"form-group\">\n    <label>DateOfComplition:</label>\n    <input type=\"date\"  [(ngModel)]= \"DateOfComplition\" name = \"DateOfComplition\" class = \"form-control\">\n  </div>\n\n  <input type = \"submit\" class = \"btn btn-primary \" value = \"Submit\">\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var Roof = {
            Distance: this.Distance,
            Rate: this.Rate,
            ProjectSize: this.ProjectSize,
            DateOfComplition: this.DateOfComplition
        };
        //Required fileds
        if (!this.validateService.validateRegister(Roof)) {
            console.log("please fill in all fields");
            alert("Please Fill in All Fields ");
            return false;
        }
        //register roof
        this.authService.registerRoof(Roof).subscribe(function (data) {
            if (data.success) {
                console.log("success");
                alert("you are now registered");
                _this.router.navigate(['/sort']);
            }
            else {
                console.log("failed");
                alert("you are falied to registered");
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/rooftable/rooftable.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 40px;\r\n    padding-top: 50px;\r\n    background-color: whitesmoke;\r\n    font-family: 'kotta one',serif;\r\n}\r\n.tab\r\n{\r\nborder: 2px solid black;\r\n\r\n}\r\n.header{\r\n    font-size: 23px;\r\n    font-weight: bold;\r\n    color: rgba(14,20,167,0.3);\r\n    font-family: 'kotta one',serif;\r\n     background-color: whitesmoke;\r\n}\r\n.header:hover{\r\n    color:red;\r\n    font-size: 25px;\r\n}\r\n.heading{\r\n    background-color:#736aff; \r\n    text-align: center;\r\n    color:white;\r\n    margin-top: 80px;\r\n    font-family: 'kotta one',serif;\r\n}\r\nh3{\r\n    padding:20px;\r\n    \r\n}\r\n.content\r\n{\r\n    font-family: 'kotta one',serif;\r\n    font-size:20px;\r\n    color:lime;\r\n    font-weight: bold;\r\n   \r\n}\r\n"

/***/ }),

/***/ "./src/app/components/rooftable/rooftable.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n<div class=\"heading\">\n    <h3>SORTING TABLE</h3>\n  </div>\n  \n<div class = \"container\">\n  \n  <mat-table [dataSource]=\"dataSource\" matSort matsortActive=\"Distance\" matSortDirection=\"asc\" matSortDisableClear class = \"tab\">\n    <ng-container matColumnDef =\"Distance\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header class= \"header\">Distance</mat-header-cell>\n      <mat-cell *matCellDef =\"let user \" class =\"content\">{{user.Distance}}</mat-cell>\n    </ng-container>\n\n     <ng-container matColumnDef =\"Rate\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header  class= \"header\">Rate</mat-header-cell>\n      <mat-cell *matCellDef =\"let user\" class =\"content\">{{user.Rate}}</mat-cell>\n    </ng-container>\n\n     <ng-container matColumnDef =\"ProjectSize\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header  class= \"header\">ProjectSize</mat-header-cell>\n      <mat-cell *matCellDef =\"let user\" class =\"content\">{{user.ProjectSize}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef =\"DateOfComplition\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header  class= \"header\">DateOfComplition</mat-header-cell>\n      <mat-cell *matCellDef =\"let user\" class =\"content\">{{user.DateOfComplition}}</mat-cell>\n    </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\" color=\"primary\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns:displayedColumns\"></mat-row>\n  </mat-table>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/rooftable/rooftable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RooftableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_roof_service__ = __webpack_require__("./src/app/services/roof.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RooftableComponent = /** @class */ (function () {
    function RooftableComponent(roofService) {
        this.roofService = roofService;
        this.displayedColumns = ['Distance', 'Rate', 'ProjectSize', 'DateOfComplition'];
    }
    RooftableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roofService.getUser().subscribe(function (results) {
            if (!results) {
                return;
            }
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatTableDataSource */](results);
            _this.dataSource.sort = _this.sort;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatSort */])
    ], RooftableComponent.prototype, "sort", void 0);
    RooftableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rooftable',
            template: __webpack_require__("./src/app/components/rooftable/rooftable.component.html"),
            styles: [__webpack_require__("./src/app/components/rooftable/rooftable.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_roof_service__["a" /* RoofService */]])
    ], RooftableComponent);
    return RooftableComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { map } from "rxjs/operator/map";
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerRoof = function (Roof) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('content-type', 'application/json');
        return this.http.post('Roofs/register', Roof, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/roof.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoofService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoofService = /** @class */ (function () {
    function RoofService(http) {
        this.http = http;
        this.serviceUrl = "Roofs/sort";
    }
    RoofService.prototype.getUser = function () {
        return this.http.get(this.serviceUrl);
    };
    RoofService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RoofService);
    return RoofService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (Roof) {
        if (Roof.Distance == undefined || Roof.Rate == undefined ||
            Roof.ProjectSize == undefined || Roof.DateOfComplition == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
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