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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_projects_projects_component__ = __webpack_require__("./src/app/components/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_distance_distance_component__ = __webpack_require__("./src/app/components/distance/distance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_rate_rate_component__ = __webpack_require__("./src/app/components/rate/rate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_size_size_component__ = __webpack_require__("./src/app/components/size/size.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_date_date_component__ = __webpack_require__("./src/app/components/date/date.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_distdescall_distdescall_component__ = __webpack_require__("./src/app/components/distdescall/distdescall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_ratedescall_ratedescall_component__ = __webpack_require__("./src/app/components/ratedescall/ratedescall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_sizedescall_sizedescall_component__ = __webpack_require__("./src/app/components/sizedescall/sizedescall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_datedescall_datedescall_component__ = __webpack_require__("./src/app/components/datedescall/datedescall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_distasceone_distasceone_component__ = __webpack_require__("./src/app/components/distasceone/distasceone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_distdescone_distdescone_component__ = __webpack_require__("./src/app/components/distdescone/distdescone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_ratedescone_ratedescone_component__ = __webpack_require__("./src/app/components/ratedescone/ratedescone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_rateasceone_rateasceone_component__ = __webpack_require__("./src/app/components/rateasceone/rateasceone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_sizeasceone_sizeasceone_component__ = __webpack_require__("./src/app/components/sizeasceone/sizeasceone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_sizedesceone_sizedesceone_component__ = __webpack_require__("./src/app/components/sizedesceone/sizedesceone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_datedesceone_datedesceone_component__ = __webpack_require__("./src/app/components/datedesceone/datedesceone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_dateasceone_dateasceone_component__ = __webpack_require__("./src/app/components/dateasceone/dateasceone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_projects_service__ = __webpack_require__("./src/app/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_distance_service__ = __webpack_require__("./src/app/services/distance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_rate_service__ = __webpack_require__("./src/app/services/rate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_size_service__ = __webpack_require__("./src/app/services/size.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_date_service__ = __webpack_require__("./src/app/services/date.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_distanceone_service__ = __webpack_require__("./src/app/services/distanceone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_dateone_service__ = __webpack_require__("./src/app/services/dateone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_rateone_service__ = __webpack_require__("./src/app/services/rateone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_sizeone_service__ = __webpack_require__("./src/app/services/sizeone.service.ts");
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
        path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'projects', component: __WEBPACK_IMPORTED_MODULE_9__components_projects_projects_component__["a" /* ProjectsComponent */]
    },
    {
        path: 'distance/asce/all', component: __WEBPACK_IMPORTED_MODULE_10__components_distance_distance_component__["a" /* DistanceComponent */]
    },
    {
        path: 'rate/asce/all', component: __WEBPACK_IMPORTED_MODULE_11__components_rate_rate_component__["a" /* RateComponent */]
    },
    {
        path: 'size/asce/all', component: __WEBPACK_IMPORTED_MODULE_12__components_size_size_component__["a" /* SizeComponent */]
    },
    {
        path: 'date/asce/all', component: __WEBPACK_IMPORTED_MODULE_13__components_date_date_component__["a" /* DateComponent */]
    },
    {
        path: 'distance/desc/all', component: __WEBPACK_IMPORTED_MODULE_14__components_distdescall_distdescall_component__["a" /* DistdescallComponent */]
    },
    {
        path: 'rate/desc/all', component: __WEBPACK_IMPORTED_MODULE_15__components_ratedescall_ratedescall_component__["a" /* RatedescallComponent */]
    },
    {
        path: 'size/desc/all', component: __WEBPACK_IMPORTED_MODULE_16__components_sizedescall_sizedescall_component__["a" /* SizedescallComponent */]
    },
    {
        path: 'date/desc/all', component: __WEBPACK_IMPORTED_MODULE_17__components_datedescall_datedescall_component__["a" /* DatedescallComponent */]
    },
    {
        path: 'distance/asce/one', component: __WEBPACK_IMPORTED_MODULE_18__components_distasceone_distasceone_component__["a" /* DistasceoneComponent */]
    },
    {
        path: 'distance/desc/one', component: __WEBPACK_IMPORTED_MODULE_19__components_distdescone_distdescone_component__["a" /* DistdesconeComponent */]
    },
    {
        path: 'rate/asce/one', component: __WEBPACK_IMPORTED_MODULE_21__components_rateasceone_rateasceone_component__["a" /* RateasceoneComponent */]
    },
    {
        path: 'rate/desc/one', component: __WEBPACK_IMPORTED_MODULE_20__components_ratedescone_ratedescone_component__["a" /* RatedesconeComponent */]
    },
    {
        path: 'size/asce/one', component: __WEBPACK_IMPORTED_MODULE_22__components_sizeasceone_sizeasceone_component__["a" /* SizeasceoneComponent */]
    },
    {
        path: 'size/desc/one', component: __WEBPACK_IMPORTED_MODULE_23__components_sizedesceone_sizedesceone_component__["a" /* SizedesceoneComponent */]
    },
    {
        path: 'date/desc/one', component: __WEBPACK_IMPORTED_MODULE_24__components_datedesceone_datedesceone_component__["a" /* DatedesceoneComponent */]
    },
    {
        path: 'date/asce/one', component: __WEBPACK_IMPORTED_MODULE_25__components_dateasceone_dateasceone_component__["a" /* DateasceoneComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_distance_distance_component__["a" /* DistanceComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_rate_rate_component__["a" /* RateComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_size_size_component__["a" /* SizeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_date_date_component__["a" /* DateComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_distdescall_distdescall_component__["a" /* DistdescallComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_ratedescall_ratedescall_component__["a" /* RatedescallComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_sizedescall_sizedescall_component__["a" /* SizedescallComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_datedescall_datedescall_component__["a" /* DatedescallComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_distasceone_distasceone_component__["a" /* DistasceoneComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_distdescone_distdescone_component__["a" /* DistdesconeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_ratedescone_ratedescone_component__["a" /* RatedesconeComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_rateasceone_rateasceone_component__["a" /* RateasceoneComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_sizeasceone_sizeasceone_component__["a" /* SizeasceoneComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_sizedesceone_sizedesceone_component__["a" /* SizedesceoneComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_datedesceone_datedesceone_component__["a" /* DatedesceoneComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_dateasceone_dateasceone_component__["a" /* DateasceoneComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_27__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_28__services_projects_service__["a" /* ProjectsService */],
                __WEBPACK_IMPORTED_MODULE_29__services_distance_service__["a" /* DistanceService */],
                __WEBPACK_IMPORTED_MODULE_30__services_rate_service__["a" /* RateService */],
                __WEBPACK_IMPORTED_MODULE_32__services_date_service__["a" /* DateService */],
                __WEBPACK_IMPORTED_MODULE_31__services_size_service__["a" /* SizeService */],
                __WEBPACK_IMPORTED_MODULE_36__services_sizeone_service__["a" /* SizeoneService */],
                __WEBPACK_IMPORTED_MODULE_35__services_rateone_service__["a" /* RateoneService */],
                __WEBPACK_IMPORTED_MODULE_34__services_dateone_service__["a" /* DateoneService */],
                __WEBPACK_IMPORTED_MODULE_33__services_distanceone_service__["a" /* DistanceoneService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/date/date.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 50px;\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n}\r\nh1\r\n{   color:cyan;\r\n    text-align: center;\r\n    \r\n}\r\n.head{\r\n    color: black;\r\n}\r\n.tab{\r\n    border:2px solid gray;\r\n    border-bottom: none;\r\n    border-top: 5px solid greenyellow;\r\n}\r\nh1:hover{\r\n   color: lime;\r\n    cursor: pointer;\r\n}\r\n.datefield\r\n{\r\n    background-color: lightcyan;\r\n    color:red;\r\n}"

/***/ }),

/***/ "./src/app/components/date/date.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n<div class = \"container-fluid\">\n  <h1>Roofs Sorted By Date Of Complition</h1><br><br>\n<table class =\"table table-hover tab\">\n\n    <thead class =\"head\">\n      <th>Distance</th> \n      <th>Rate</th> \n      <th>ProjectSize</th> \n      <th>DateOfComplition</th> \n    </thead>\n\n    <tbody>\n       <tr *ngFor =\"let date of Date\">\n         <td>{{date.Distance}}</td>\n         <td>{{date.Rate}}</td>\n         <td>{{date.ProjectSize}}</td>\n         <td class=\"datefield\">{{date.DateOfComplition}}</td>\n       </tr>\n    </tbody>\n    \n<table>\n  \n\n      \n      \n      \n      \n          \n"

/***/ }),

/***/ "./src/app/components/date/date.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_date_service__ = __webpack_require__("./src/app/services/date.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateComponent = /** @class */ (function () {
    function DateComponent(_DateService) {
        this._DateService = _DateService;
    }
    DateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._DateService.getDate()
            .subscribe(function (resDateData) { return _this.Date = resDateData; });
    };
    DateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-date',
            template: __webpack_require__("./src/app/components/date/date.component.html"),
            styles: [__webpack_require__("./src/app/components/date/date.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_date_service__["a" /* DateService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_date_service__["a" /* DateService */]])
    ], DateComponent);
    return DateComponent;
}());



/***/ }),

/***/ "./src/app/components/dateasceone/dateasceone.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 50px;\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n   \r\n}\r\nh1\r\n{   color:cyan;\r\n    text-align: center;\r\n}\r\n.head{\r\n    color: black;\r\n    text-align: center;\r\n}\r\n.tab{\r\n    border:2px solid gray;\r\n    border-bottom: none;\r\n    border-top: 5px solid greenyellow;\r\n    width: 400px;\r\n    margin-left:240px;\r\n}\r\nh1:hover{\r\n   color: lime;\r\n    cursor: pointer;\r\n}\r\n.datefield{\r\n    color: red;\r\n    background-color: lightcyan;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/dateasceone/dateasceone.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class =\"container-fluid\">\n  <h1>Ascending Order Complition Of Date</h1><br><br>\n<table class =\"table table-hover tab\">\n\n    <thead class=\"head\">\n      <th>DateOfComplition</th> \n    </thead>\n\n    <tbody>\n       <tr *ngFor =\"let dasce of dateoneasce\">\n         <td class=\"datefield\">{{dasce.DateOfComplition}}</td>\n      </tr>\n    </tbody>\n    \n<table>\n\n\n\n      \n      \n      \n      \n          \n\n  \n\n      \n      \n      \n      \n          \n"

/***/ }),

/***/ "./src/app/components/dateasceone/dateasceone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateasceoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dateone_service__ = __webpack_require__("./src/app/services/dateone.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateasceoneComponent = /** @class */ (function () {
    function DateasceoneComponent(_DateoneService) {
        this._DateoneService = _DateoneService;
    }
    DateasceoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._DateoneService.getDateOneAsce()
            .subscribe(function (resdateoneasceData) { return _this.dateoneasce = resdateoneasceData; });
    };
    DateasceoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dateasceone',
            template: __webpack_require__("./src/app/components/dateasceone/dateasceone.component.html"),
            styles: [__webpack_require__("./src/app/components/dateasceone/dateasceone.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_dateone_service__["a" /* DateoneService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_dateone_service__["a" /* DateoneService */]])
    ], DateasceoneComponent);
    return DateasceoneComponent;
}());



/***/ }),

/***/ "./src/app/components/datedescall/datedescall.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 50px;\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n}\r\nh1\r\n{   color:cyan;\r\n    text-align: center;\r\n    \r\n}\r\n.head{\r\n    color: black;\r\n}\r\n.tab{\r\n    border:2px solid gray;\r\n    border-bottom: none;\r\n    border-top: 5px solid greenyellow;\r\n}\r\nh1:hover{\r\n   color: lime;\r\n    cursor: pointer;\r\n}\r\n.datefield{\r\n    color: red;\r\n    background-color: lightcyan;\r\n}"

/***/ }),

/***/ "./src/app/components/datedescall/datedescall.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n<div class = \"container-fluid\">\n  <h1>Roofs Sorted By Date Descending Order</h1><br><br>\n<table class =\"table table-hover tab\">\n\n    <thead class = \"head\">\n      <th>Distance</th> \n      <th>Rate</th> \n      <th>ProjectSize</th> \n      <th>DateOfComplition</th> \n    </thead>\n\n    <tbody>\n       <tr *ngFor =\"let descD of datedescall\">\n         <td>{{descD.Distance}}</td>\n         <td>{{descD.Rate}}</td>\n         <td>{{descD.ProjectSize}}</td>\n         <td class=\"datefield\">{{descD.DateOfComplition}}</td>\n       </tr>\n    </tbody>\n    \n<table>\n  \n\n      \n      \n      \n      \n          \n"

/***/ }),

/***/ "./src/app/components/datedescall/datedescall.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatedescallComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_date_service__ = __webpack_require__("./src/app/services/date.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatedescallComponent = /** @class */ (function () {
    function DatedescallComponent(_DateService) {
        this._DateService = _DateService;
    }
    DatedescallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._DateService.getDateDescAll()
            .subscribe(function (resDateData) { return _this.datedescall = resDateData; });
    };
    DatedescallComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-datedescall',
            template: __webpack_require__("./src/app/components/datedescall/datedescall.component.html"),
            styles: [__webpack_require__("./src/app/components/datedescall/datedescall.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_date_service__["a" /* DateService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_date_service__["a" /* DateService */]])
    ], DatedescallComponent);
    return DatedescallComponent;
}());



/***/ }),

/***/ "./src/app/components/datedesceone/datedesceone.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 50px;\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n   \r\n}\r\nh1\r\n{   color:cyan;\r\n    text-align: center;\r\n}\r\n.head{\r\n    color: black;\r\n    text-align: center;\r\n}\r\n.tab{\r\n    border:2px solid gray;\r\n    border-bottom: none;\r\n    border-top: 5px solid greenyellow;\r\n    width: 400px;\r\n    margin-left:240px;\r\n}\r\nh1:hover{\r\n   color: lime;\r\n    cursor: pointer;\r\n}\r\n.datefield{\r\n    color: red;\r\n    background-color: lightcyan;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/datedesceone/datedesceone.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n  <div class = \"container-fluid\">\n  <h1> Roofs Sorted By Distance Descending</h1><br><br>\n<table class =\"table table-hover tab\">\n\n    <thead class=\"head\">\n      <th>DateOfComplition</th> \n    </thead>\n\n    <tbody>\n       <tr *ngFor =\"let ddesc of dateonedesc\">\n         <td class= \"datefield\">{{ddesc.DateOfComplition}}</td>\n      </tr>\n    </tbody>\n    \n<table>\n  \n\n      \n      \n      \n      \n          \n"

/***/ }),

/***/ "./src/app/components/datedesceone/datedesceone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatedesceoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dateone_service__ = __webpack_require__("./src/app/services/dateone.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatedesceoneComponent = /** @class */ (function () {
    function DatedesceoneComponent(_DateoneService) {
        this._DateoneService = _DateoneService;
    }
    DatedesceoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._DateoneService.getDateOneDesc()
            .subscribe(function (resdateonedescData) { return _this.dateonedesc = resdateonedescData; });
    };
    DatedesceoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-datedesceone',
            template: __webpack_require__("./src/app/components/datedesceone/datedesceone.component.html"),
            styles: [__webpack_require__("./src/app/components/datedesceone/datedesceone.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_dateone_service__["a" /* DateoneService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_dateone_service__["a" /* DateoneService */]])
    ], DatedesceoneComponent);
    return DatedesceoneComponent;
}());



/***/ }),

/***/ "./src/app/components/distance/distance.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 50px;\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n}\r\nh1\r\n{   color:cyan;\r\n    text-align: center;\r\n    \r\n}\r\n.head{\r\n    color: black;\r\n}\r\n.tab{\r\n    border:2px solid gray;\r\n    border-bottom: none;\r\n    border-top: 5px solid greenyellow;\r\n}\r\nh1:hover{\r\n   color: lime;\r\n    cursor: pointer;\r\n}\r\n.distancefield{\r\n    color: red;\r\n    background-color: lightcyan;\r\n}"

/***/ }),

/***/ "./src/app/components/distance/distance.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class = \"container-fluid\">\n  <h1>Roofs Sorted By Distance</h1><br><br>\n<table class =\"table table-hover tab\">\n\n    <thead class =\"head\">\n      <th>Distance</th> \n      <th>Rate</th> \n      <th>ProjectSize</th> \n      <th>DateOfComplition</th> \n    </thead>\n\n    <tbody>\n       <tr *ngFor =\"let D of Distance\">\n         <td class=\"distancefield\">{{D.Distance}}</td>\n         <td>{{D.Rate}}</td>\n         <td>{{D.ProjectSize}}</td>\n         <td>{{D.DateOfComplition}}</td>\n       </tr>\n    </tbody>\n    \n<table>\n  \n\n  \n\n      \n      \n      \n      \n          \n"

/***/ }),

/***/ "./src/app/components/distance/distance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_distance_service__ = __webpack_require__("./src/app/services/distance.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DistanceComponent = /** @class */ (function () {
    function DistanceComponent(_DistanceService) {
        this._DistanceService = _DistanceService;
    }
    DistanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._DistanceService.getDistance()
            .subscribe(function (resDistanceData) { return _this.Distance = resDistanceData; });
    };
    DistanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-distance',
            template: __webpack_require__("./src/app/components/distance/distance.component.html"),
            styles: [__webpack_require__("./src/app/components/distance/distance.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_distance_service__["a" /* DistanceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_distance_service__["a" /* DistanceService */]])
    ], DistanceComponent);
    return DistanceComponent;
}());



/***/ }),

/***/ "./src/app/components/distasceone/distasceone.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 50px;\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n   \r\n}\r\nh1\r\n{   color:cyan;\r\n    text-align: center;\r\n    \r\n}\r\n.head{\r\n    color: black;\r\n    text-align: center;\r\n}\r\n.tab{\r\n    border:2px solid gray;\r\n    border-bottom: none;\r\n    border-top: 5px solid greenyellow;\r\n    width: 400px;\r\n    margin-left:240px;\r\n}\r\nh1:hover{\r\n   color: lime;\r\n    cursor: pointer;\r\n}\r\n.disfield{\r\n    color: red;\r\n    background-color: lightcyan;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/distasceone/distasceone.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class = \"container-fluid\">\n  <h1> Roofs Sorted By Distance</h1><br><br>\n<table class =\"table table-hover tab\">\n\n    <thead class= \"head\">\n      <th>Distance</th> \n    </thead>\n\n    <tbody>\n       <tr *ngFor =\"let disone of distoneasce\">\n         <td class=\"disfield\">{{disone.Distance}}</td>\n      </tr>\n    </tbody>\n    \n<table>\n  \n\n      \n      \n      \n      \n          \n"

/***/ }),

/***/ "./src/app/components/distasceone/distasceone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistasceoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_distanceone_service__ = __webpack_require__("./src/app/services/distanceone.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DistasceoneComponent = /** @class */ (function () {
    function DistasceoneComponent(_DistanceoneService) {
        this._DistanceoneService = _DistanceoneService;
    }
    DistasceoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._DistanceoneService.getDistanceOneAsce()
            .subscribe(function (resdistoneasceData) { return _this.distoneasce = resdistoneasceData; });
    };
    DistasceoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-distasceone',
            template: __webpack_require__("./src/app/components/distasceone/distasceone.component.html"),
            styles: [__webpack_require__("./src/app/components/distasceone/distasceone.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_distanceone_service__["a" /* DistanceoneService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_distanceone_service__["a" /* DistanceoneService */]])
    ], DistasceoneComponent);
    return DistasceoneComponent;
}());



/***/ }),

/***/ "./src/app/components/distdescall/distdescall.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 50px;\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n}\r\nh1\r\n{   color:cyan;\r\n    text-align: center;\r\n    \r\n}\r\n.head{\r\n    color: black;\r\n}\r\n.tab{\r\n    border:2px solid gray;\r\n    border-bottom: none;\r\n    border-top: 5px solid greenyellow;\r\n}\r\nh1:hover{\r\n   color: lime;\r\n    cursor: pointer;\r\n}\r\n.disfield{\r\n    color: red;\r\n    background-color: lightcyan;\r\n}"

/***/ }),

/***/ "./src/app/components/distdescall/distdescall.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class = \"container-fluid\">\n  <h1>Roofs Sorted By Distance Descending Order</h1><br><br>\n<table class =\"table table-hover tab\">\n\n    <thead class = \"head\">\n      <th>Distance</th> \n      <th>Rate</th> \n      <th>ProjectSize</th> \n      <th>DateOfComplition</th> \n    </thead>\n\n    <tbody>\n       <tr *ngFor =\"let desc of distdescall\">\n         <td class = \"disfield\">{{desc.Distance}}</td>\n         <td>{{desc.Rate}}</td>\n         <td>{{desc.ProjectSize}}</td>\n         <td>{{desc.DateOfComplition}}</td>\n       </tr>\n    </tbody>\n    \n<table>\n  \n\n      \n      \n      \n      \n          \n"

/***/ }),

/***/ "./src/app/components/distdescall/distdescall.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistdescallComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_distance_service__ = __webpack_require__("./src/app/services/distance.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DistdescallComponent = /** @class */ (function () {
    function DistdescallComponent(_DistanceService) {
        this._DistanceService = _DistanceService;
    }
    DistdescallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._DistanceService.getDistDescAll()
            .subscribe(function (resDistanceData) { return _this.distdescall = resDistanceData; });
    };
    DistdescallComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-distdescall',
            template: __webpack_require__("./src/app/components/distdescall/distdescall.component.html"),
            styles: [__webpack_require__("./src/app/components/distdescall/distdescall.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_distance_service__["a" /* DistanceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_distance_service__["a" /* DistanceService */]])
    ], DistdescallComponent);
    return DistdescallComponent;
}());



/***/ }),

/***/ "./src/app/components/distdescone/distdescone.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 50px;\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n   \r\n}\r\nh1\r\n{   color:cyan;\r\n    text-align: center;\r\n    \r\n}\r\n.head{\r\n    color: black;\r\n    text-align: center;\r\n}\r\n.tab{\r\n    border:2px solid gray;\r\n    border-bottom: none;\r\n    border-top: 5px solid greenyellow;\r\n    width: 400px;\r\n    margin-left:240px;\r\n}\r\nh1:hover{\r\n   color: lime;\r\n    cursor: pointer;\r\n}\r\n.disfield{\r\n    color: red;\r\n    background-color: lightcyan;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/distdescone/distdescone.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n  <div class = \"container-fluid\">\n  <h1> Roofs Sorted By Distance Descending Order</h1><br><br>\n<table class =\"table table-hover tab\">\n\n    <thead class=\"head\">\n      <th>Distance</th> \n    </thead>\n\n    <tbody>\n       <tr *ngFor =\"let disonedesc of distonedesc\">\n         <td class=\"disfield\">{{disonedesc.Distance}}</td>\n      </tr>\n    </tbody>\n    \n<table>\n  \n"

/***/ }),

/***/ "./src/app/components/distdescone/distdescone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistdesconeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_distanceone_service__ = __webpack_require__("./src/app/services/distanceone.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DistdesconeComponent = /** @class */ (function () {
    function DistdesconeComponent(_DistanceoneService) {
        this._DistanceoneService = _DistanceoneService;
    }
    DistdesconeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._DistanceoneService.getDistanceOneDesc()
            .subscribe(function (resdistonedescData) { return _this.distonedesc = resdistonedescData; });
    };
    DistdesconeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-distdescone',
            template: __webpack_require__("./src/app/components/distdescone/distdescone.component.html"),
            styles: [__webpack_require__("./src/app/components/distdescone/distdescone.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_distanceone_service__["a" /* DistanceoneService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_distanceone_service__["a" /* DistanceoneService */]])
    ], DistdesconeComponent);
    return DistdesconeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid\r\n{\r\n    padding: 100px;\r\n    background-color: whitesmoke;\r\n    margin-top: 50px;\r\n    text-align: center;\r\n\r\n}\r\nh1,h2{\r\n    color:greenyellow;\r\n    margin-top: 20px;\r\n}\r\nli\r\n{\r\n    padding:5px;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n\r\n}\r\nul{\r\n    list-style: none;\r\n    font-size: 22px;\r\n    color:green;\r\n}\r\np{\r\n    font-family:Arial, Helvetica, sans-serif;\r\n    font-size: 22px;\r\n}\r\nfooter{\r\n    color:greenyellow;\r\n    background-color: lightsteelblue;\r\n    text-align: center;\r\n    font-size: 24px;\r\n    font-family: sans-serif;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color:purple;\r\n    cursor: pointer;\r\n}\r\na:hover{\r\n    color:lightseagreen;\r\n}\r\nh1:hover\r\n{\r\n    color:cyan;\r\n    cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class = \"container-fluid\">\n  <h1>About The Company</h1><br><br>\n<p>\n  Get Me Roof aims to make property purchase experience hassle free with insights and updates which can be useful for Buyers.\n\nWhile property purchase life cycle has multiple phases – discovery, shortlisting, comparisons, negotiations, financing and closure, at each step we aspire to help Buyers make informed decisions before they close on their dream property. Read our well crafted Home Buying Guide for step by step guidance around home buying.\n</p>\n<h2>Follow us on following platforms for regular updates</h2>\n\n<ul>\n<li><a href =\"https://www.facebook.com/getmeroof\">FaceBook</a></li>\n<li><a href =\"https://twitter.com/getmeroof\">Twitter</a></li>\n<li><a href =\"https://www.quora.com/Get-Me-Roof\">Quora</a></li>\n<li><a href =\"https://medium.com/@getmeroof\">Medium</a></li>\n<li><a href =\"https://www.linkedin.com/company/get-me-roof\">LinkedIn</a></li> \n</ul>\n</div>\n\n"

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

module.exports = ".droplabel{\r\n   color: lime;\r\n   text-align: center;\r\n   padding: 2px;\r\n}\r\n.line{\r\n    margin-top: 5px;\r\n    color:red;\r\n}\r\n.main:a{\r\n    color: lime;\r\n    font-weight: bold;\r\n}\r\n.line{\r\n    color: red;\r\n    size:2px;\r\n}\r\n.content{\r\n    color:black;\r\n    padding: 2px;\r\n}\r\n.content a :hover{\r\n    background-color: lightgreen;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n     <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n      <a class=\"navbar-brand main\" href=\"/home\">GetMeRoof</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li [routerLinkActive] = \"['active']\" class=\"nav-item \">\n            <a  [routerLink]=\"['/home']\" class=\"nav-link\" href=\"/home\">HOME</a>\n          </li>\n\n          <!--multi sort  start-->\n     <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown03\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">CustomSort Multi</a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdown03\">\n                <label class = \"droplabel label\">SortByAscending</label> <hr class = \"line\">\n              <a  [routerLink]=\"['/distance/asce/all']\"class=\"dropdown-item content\" href=\"/distance/asce/all\">SortByDistance</a>\n              <a [routerLink]=\"['/rate/asce/all']\" class=\"dropdown-item content\" href=\"/rate/asce/all\">SortByRate</a>\n              <a [routerLink]=\"['/size/asce/all']\" class=\"dropdown-item content\" href=\"size/asce/all\">SortBySize</a>\n              <a  [routerLink]=\"['/date/asce/all']\" class=\"dropdown-item content\" href=\"/date/asce/all\">SortByDate</a>\n              \n              \n              <label class = \"droplabel\">SortByDescending</label> <hr class = \"line\">\n              <a  [routerLink]=\"['/distance/desc/all']\"class=\"dropdown-item content\" href=\"/distance/desc/all\">SortByDistance</a>\n              <a [routerLink]=\"['/rate/desc/all']\" class=\"dropdown-item content\" href=\"/rate/desc/all\">SortByRate</a>\n              <a [routerLink]=\"['/size/desc/all']\" class=\"dropdown-item content\" href=\"size/desc/all\">SortBySize</a>\n              <a  [routerLink]=\"['/date/desc/all']\" class=\"dropdown-item content\" href=\"/date/desc/all\">SortByDate</a>\n            </div>\n          </li>\n          <!--multi sort  end-->\n\n<!--single sort  start-->\n      <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown03\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">CustomSort Single</a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdown03\">\n                <label class = \"droplabel\">SortByAscending</label><hr class = \"line\">\n              <a  [routerLink]=\"['/distance/asce/one']\"class=\"dropdown-item content\" href=\"/distance/asce/one\">SortByDistance</a>\n              <a [routerLink]=\"['/rate/asce/one']\" class=\"dropdown-item content\" href=\"/rate/asce/one\">SortByRate</a>\n              <a [routerLink]=\"['/size/asce/one']\" class=\"dropdown-item content\" href=\"size/asce/one\">SortBySize</a>\n              <a  [routerLink]=\"['/date/asce/one']\" class=\"dropdown-item content\" href=\"/date/asce/one\">SortByDate</a>\n\n               \n              <label class = \"droplabel\">SortByDescending</label><hr class = \"line\">\n              <a  [routerLink]=\"['/distance/desc/one']\"class=\"dropdown-item content\" href=\"/distance/desc/one\">SortByDistance</a>\n              <a [routerLink]=\"['/rate/desc/one']\" class=\"dropdown-item content\" href=\"/rate/desc/one\">SortByRate</a>\n              <a [routerLink]=\"['/size/desc/one']\" class=\"dropdown-item content\" href=\"size/desc/one\">SortBySize</a>\n              <a  [routerLink]=\"['/date/desc/one']\" class=\"dropdown-item content\" href=\"/date/desc/one\">SortByDate</a>\n            </div>\n          </li>\n        <!--single sort  end-->  \n\n\n      </ul>\n\n          <ul class = \"nav navbar-nav navbar-right\">\n          <li [routerLinkActive] = \"['active']\" class=\"nav-item\">\n            <a [routerLink]=\"['/projects']\" class=\"nav-link\" href=\"/projects\">PROJECTS</a>\n          </li>\n          <li [routerLinkActive] = \"['active']\" class=\"nav-item\">\n            <a [routerLink]=\"['/register']\" class=\"nav-link\" href=\"/register\">REGISTER</a>\n          </li>\n          \n         </ul>\n          </div>\n    </nav>"

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

/***/ "./src/app/components/projects/projects.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 50px;\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n}\r\nh1\r\n{   color:cyan;\r\n    text-align: center;\r\n    \r\n}\r\n.head{\r\n    color: black;\r\n}\r\n.tab{\r\n    border:2px solid gray;\r\n  border-bottom: none;\r\n    border-top: 5px solid greenyellow;\r\n}\r\nh1:hover{\r\n   color: lime;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/components/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class = \"container-fluid\">\n  <h1>Registered Roofs</h1><br><br>\n<table class =\"table table-hover tab\">\n\n    <thead class =\"head\">\n      <th>Distance</th> \n      <th>Rate</th> \n      <th>ProjectSize</th> \n      <th>DateOfComplition</th> \n    </thead>\n\n    <tbody>\n       <tr *ngFor =\"let project of projects\">\n         <td>{{project.Distance}}</td>\n         <td>{{project.Rate}}</td>\n         <td>{{project.ProjectSize}}</td>\n         <td>{{project.DateOfComplition}}</td>\n       </tr>\n    </tbody>\n    \n<table>\n  \n\n      \n      \n      \n      \n          \n"

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service__ = __webpack_require__("./src/app/services/projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(_projectsService) {
        this._projectsService = _projectsService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._projectsService.getProjects()
            .subscribe(function (resProjectsData) { return _this.projects = resProjectsData; });
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("./src/app/components/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/components/projects/projects.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_projects_service__["a" /* ProjectsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_projects_service__["a" /* ProjectsService */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/rate/rate.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 50px;\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n}\r\nh1\r\n{   color:cyan;\r\n    text-align: center;\r\n    \r\n}\r\n.head{\r\n    color: black;\r\n}\r\n.tab{\r\n    border:2px solid gray;\r\n    border-bottom: none;\r\n    border-top: 5px solid greenyellow;\r\n}\r\nh1:hover{\r\n   color: lime;\r\n    cursor: pointer;\r\n}\r\n.ratefield{\r\n    color: red;\r\n    background-color: lightcyan;\r\n}"

/***/ }),

/***/ "./src/app/components/rate/rate.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class = \"container-fluid\">\n  <h1>Roofs Sorted By Rate</h1><br><br>\n<table class =\"table table-hover tab\">\n\n    <thead class = \"head\">\n      <th>Distance</th> \n      <th>Rate</th> \n      <th>ProjectSize</th> \n      <th>DateOfComplition</th> \n    </thead>\n\n    <tbody>\n       <tr *ngFor =\"let R of Rate\">\n         <td>{{R.Distance}}</td>\n         <td class=\"ratefield\">{{R.Rate}}</td>\n         <td>{{R.ProjectSize}}</td>\n         <td>{{R.DateOfComplition}}</td>\n       </tr>\n    </tbody>\n    \n<table>\n  "

/***/ }),

/***/ "./src/app/components/rate/rate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_rate_service__ = __webpack_require__("./src/app/services/rate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RateComponent = /** @class */ (function () {
    function RateComponent(_RateService) {
        this._RateService = _RateService;
    }
    RateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._RateService.getRate()
            .subscribe(function (resRateData) { return _this.Rate = resRateData; });
    };
    RateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rate',
            template: __webpack_require__("./src/app/components/rate/rate.component.html"),
            styles: [__webpack_require__("./src/app/components/rate/rate.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_rate_service__["a" /* RateService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_rate_service__["a" /* RateService */]])
    ], RateComponent);
    return RateComponent;
}());



/***/ }),

/***/ "./src/app/components/rateasceone/rateasceone.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 50px;\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n   \r\n}\r\nh1\r\n{   color:cyan;\r\n    text-align: center;\r\n    \r\n}\r\n.head{\r\n    color: black;\r\n    text-align: center;\r\n}\r\n.tab{\r\n    border:2px solid gray;\r\n    border-bottom: none;\r\n    border-top: 5px solid greenyellow;\r\n    width: 400px;\r\n    margin-left:240px;\r\n}\r\nh1:hover{\r\n   color: lime;\r\n    cursor: pointer;\r\n}\r\n.ratefield{\r\n    color: red;\r\n    background-color: lightcyan;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/rateasceone/rateasceone.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n  <div class = \"container-fluid\">\n  <h1>Roofs Sorted By Rate Ascending Order</h1><br><br>\n<table class =\"table table-hover tab\">\n\n    <thead class=\"head\">\n      <th>Rate</th> \n    </thead>\n\n    <tbody>\n       <tr *ngFor =\"let rateoneasce of rateoneasce\">\n         <td class=\"ratefield\">{{rateoneasce.Rate}}</td>\n      </tr>\n    </tbody>\n    \n<table>\n  \n\n      \n      \n      \n      \n          \n"

/***/ }),

/***/ "./src/app/components/rateasceone/rateasceone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateasceoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_rateone_service__ = __webpack_require__("./src/app/services/rateone.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RateasceoneComponent = /** @class */ (function () {
    function RateasceoneComponent(_RateoneService) {
        this._RateoneService = _RateoneService;
    }
    RateasceoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._RateoneService.getRateOneAsce()
            .subscribe(function (resrateoneasceData) { return _this.rateoneasce = resrateoneasceData; });
    };
    RateasceoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rateasceone',
            template: __webpack_require__("./src/app/components/rateasceone/rateasceone.component.html"),
            styles: [__webpack_require__("./src/app/components/rateasceone/rateasceone.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_rateone_service__["a" /* RateoneService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_rateone_service__["a" /* RateoneService */]])
    ], RateasceoneComponent);
    return RateasceoneComponent;
}());



/***/ }),

/***/ "./src/app/components/ratedescall/ratedescall.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 50px;\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n}\r\nh1\r\n{   color:cyan;\r\n    text-align: center;\r\n    \r\n}\r\n.head{\r\n    color: black;\r\n}\r\n.tab{\r\n    border:2px solid gray;\r\n    border-bottom: none;\r\n    border-top: 5px solid greenyellow;\r\n}\r\nh1:hover{\r\n   color: lime;\r\n    cursor: pointer;\r\n}\r\n.ratefield{\r\n    color: red;\r\n    background-color: lightcyan;\r\n}"

/***/ }),

/***/ "./src/app/components/ratedescall/ratedescall.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container-fluid\">\n  <h1>Roofs Sorted By Rate Descending Order</h1><br><br>\n<table class =\"table table-hover tab\">\n\n    <thead class=\"head\">\n      <th>Distance</th> \n      <th>Rate</th> \n      <th>ProjectSize</th> \n      <th>DateOfComplition</th> \n    </thead>\n\n    <tbody>\n       <tr *ngFor =\"let descR of ratedescall\">\n         <td>{{descR.Distance}}</td>\n         <td class= \"ratefield\">{{descR.Rate}}</td>\n         <td>{{descR.ProjectSize}}</td>\n         <td>{{descR.DateOfComplition}}</td>\n       </tr>\n    </tbody>\n    \n<table>\n  "

/***/ }),

/***/ "./src/app/components/ratedescall/ratedescall.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatedescallComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_rate_service__ = __webpack_require__("./src/app/services/rate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatedescallComponent = /** @class */ (function () {
    function RatedescallComponent(_RateService) {
        this._RateService = _RateService;
    }
    RatedescallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._RateService.getRateDescAll()
            .subscribe(function (resRateData) { return _this.ratedescall = resRateData; });
    };
    RatedescallComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ratedescall',
            template: __webpack_require__("./src/app/components/ratedescall/ratedescall.component.html"),
            styles: [__webpack_require__("./src/app/components/ratedescall/ratedescall.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_rate_service__["a" /* RateService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_rate_service__["a" /* RateService */]])
    ], RatedescallComponent);
    return RatedescallComponent;
}());



/***/ }),

/***/ "./src/app/components/ratedescone/ratedescone.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 50px;\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n   \r\n}\r\nh1\r\n{   color:cyan;\r\n    text-align: center;\r\n    \r\n}\r\n.head{\r\n    color: black;\r\n    text-align: center;\r\n}\r\n.tab{\r\n    border:2px solid gray;\r\n    border-bottom: none;\r\n    border-top: 5px solid greenyellow;\r\n    width: 400px;\r\n    margin-left:240px;\r\n}\r\nh1:hover{\r\n   color: lime;\r\n    cursor: pointer;\r\n}\r\n.ratefield{\r\n    color: red;\r\n    background-color: lightcyan;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/ratedescone/ratedescone.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n  <div class = \"container-fluid\">\n  <h1> Roofs Sorted By Rate Descending Order</h1><br><br>\n<table class =\"table table-hover tab\">\n\n    <thead class=\"head\">\n      <th>Rate</th> \n    </thead>\n\n    <tbody>\n       <tr *ngFor =\"let rateonedesc of rateonedesc\">\n         <td class=\"ratefield\">{{rateonedesc.Rate}}</td>\n      </tr>\n    </tbody>\n    \n<table>\n  \n\n      \n      \n      \n      \n          \n"

/***/ }),

/***/ "./src/app/components/ratedescone/ratedescone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatedesconeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_rateone_service__ = __webpack_require__("./src/app/services/rateone.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatedesconeComponent = /** @class */ (function () {
    function RatedesconeComponent(_RateoneService) {
        this._RateoneService = _RateoneService;
    }
    RatedesconeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._RateoneService.getRateOneDesc()
            .subscribe(function (resrateonedescData) { return _this.rateonedesc = resrateonedescData; });
    };
    RatedesconeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ratedescone',
            template: __webpack_require__("./src/app/components/ratedescone/ratedescone.component.html"),
            styles: [__webpack_require__("./src/app/components/ratedescone/ratedescone.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_rateone_service__["a" /* RateoneService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_rateone_service__["a" /* RateoneService */]])
    ], RatedesconeComponent);
    return RatedesconeComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n\r\n\r\n}\r\nlabel{\r\n    \r\n      color:purple;\r\n}\r\nlabel:hover{\r\n     color:red;\r\n     cursor: pointer;\r\n}\r\nh2{\r\n    color:lime;\r\n\r\n}\r\nh2:hover{\r\n    color:cyan;\r\n    cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class = \"container\">\n<h2 class =\"paeg-header\">Register</h2>\n\n<form (submit)=\"onRegisterSubmit()\">\n  <div class = \"form-group\">\n    <label>Distance:</label>\n    <input type=\"number\" [(ngModel)]= \"Distance\" name = \"Distance\" class = \"form-control\">\n  </div>\n\n  <div class = \"form-group\">\n    <label>Rate:</label>\n    <input type=\"number\"  [(ngModel)]= \"Rate\" name = \"Rate\" class = \"form-control\">\n  </div>\n\n  <div class = \"form-group\">\n    <label>ProjectSize:</label>\n    <input type=\"number\"  [(ngModel)]= \"ProjectSize\" name = \"ProjectSize\" class = \"form-control\">\n  </div>\n\n  <div class = \"form-group\">\n    <label>DateOfComplition:</label>\n    <input type=\"date\"  [(ngModel)]= \"DateOfComplition\" name = \"DateOfComplition\" class = \"form-control\">\n  </div>\n\n  <input type = \"submit\" class = \"btn btn-primary \" value = \"Submit\">\n</form>\n</div>\n"

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
                _this.router.navigate(['/home']);
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

/***/ "./src/app/components/size/size.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 50px;\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n}\r\nh1\r\n{   color:cyan;\r\n    text-align: center;\r\n    \r\n}\r\n.head{\r\n    color: black;\r\n}\r\n.tab{\r\n    border:2px solid gray;\r\n    border-bottom: none;\r\n    border-top: 5px solid greenyellow;\r\n}\r\nh1:hover{\r\n   color: lime;\r\n    cursor: pointer;\r\n}\r\n.sizefield{\r\n    color: red;\r\n    background-color: lightcyan;\r\n}"

/***/ }),

/***/ "./src/app/components/size/size.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n\n<div class = \"container-fluid\">\n  <h1> Roofs Sorted By ProjectSize</h1><br><br>\n<table class =\"table table-hover tab\">\n\n    <thead class = \"head\">\n      <th>Distance</th> \n      <th>Rate</th> \n      <th>ProjectSize</th> \n      <th>DateOfComplition</th> \n    </thead>\n\n    <tbody>\n       <tr *ngFor =\"let length of size\">\n         <td>{{length.Distance}}</td>\n         <td>{{length.Rate}}</td>\n         <td class=\"sizefield\">{{length.ProjectSize}}</td>\n         <td>{{length.DateOfComplition}}</td>\n       </tr>\n    </tbody>\n    \n<table>\n  \n      \n      \n      \n      \n          \n"

/***/ }),

/***/ "./src/app/components/size/size.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_size_service__ = __webpack_require__("./src/app/services/size.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SizeComponent = /** @class */ (function () {
    function SizeComponent(_sizeService) {
        this._sizeService = _sizeService;
    }
    SizeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sizeService.getSize()
            .subscribe(function (resSizeData) { return _this.size = resSizeData; });
    };
    SizeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-size',
            template: __webpack_require__("./src/app/components/size/size.component.html"),
            styles: [__webpack_require__("./src/app/components/size/size.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_size_service__["a" /* SizeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_size_service__["a" /* SizeService */]])
    ], SizeComponent);
    return SizeComponent;
}());



/***/ }),

/***/ "./src/app/components/sizeasceone/sizeasceone.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 50px;\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n   \r\n}\r\nh1\r\n{   color:cyan;\r\n    text-align: center;\r\n    \r\n}\r\n.head{\r\n    color: black;\r\n    text-align: center;\r\n}\r\n.tab{\r\n    border:2px solid gray;\r\n    border-bottom: none;\r\n    border-top: 5px solid greenyellow;\r\n    width: 400px;\r\n    margin-left:240px;\r\n}\r\nh1:hover{\r\n   color: lime;\r\n    cursor: pointer;\r\n}\r\n.sizefield{\r\n    color: red;\r\n    background-color: lightcyan;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/sizeasceone/sizeasceone.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n  <div class = \"container-fluid\">\n  <h1> Roofs Sorted By ProjectSize Ascending Order</h1><br><br>\n<table class =\"table table-hover tab\">\n\n    <thead class=\"head\">\n      <th>ProjectSize</th> \n    </thead>\n\n    <tbody>\n       <tr *ngFor =\"let s of sizeoneasce\">\n         <td class=\"sizefield\">{{s.ProjectSize}}</td>\n      </tr>\n    </tbody>\n    \n<table>\n  \n\n      \n      \n      \n      \n          \n"

/***/ }),

/***/ "./src/app/components/sizeasceone/sizeasceone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizeasceoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sizeone_service__ = __webpack_require__("./src/app/services/sizeone.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SizeasceoneComponent = /** @class */ (function () {
    function SizeasceoneComponent(_sizeoneService) {
        this._sizeoneService = _sizeoneService;
    }
    SizeasceoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sizeoneService.getSizeOneAsce()
            .subscribe(function (ressizeoneasceData) { return _this.sizeoneasce = ressizeoneasceData; });
    };
    SizeasceoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sizeasceone',
            template: __webpack_require__("./src/app/components/sizeasceone/sizeasceone.component.html"),
            styles: [__webpack_require__("./src/app/components/sizeasceone/sizeasceone.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_sizeone_service__["a" /* SizeoneService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sizeone_service__["a" /* SizeoneService */]])
    ], SizeasceoneComponent);
    return SizeasceoneComponent;
}());



/***/ }),

/***/ "./src/app/components/sizedescall/sizedescall.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 50px;\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n}\r\nh1\r\n{   color:cyan;\r\n    text-align: center;\r\n    \r\n}\r\n.head{\r\n    color: black;\r\n}\r\n.tab{\r\n    border:2px solid gray;\r\n    border-bottom: none;\r\n    border-top: 5px solid greenyellow;\r\n}\r\nh1:hover{\r\n   color: lime;\r\n    cursor: pointer;\r\n}\r\n.sizefield{\r\n    color: red;\r\n    background-color: lightcyan;\r\n}"

/***/ }),

/***/ "./src/app/components/sizedescall/sizedescall.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class = \"container-fluid\">\n  <h1>Roofs Sorted by ProjectSize Descending Order</h1><br><br>\n<table class =\"table table-hover tab\">\n\n    <thead class=\"head\">\n      <th>Distance</th> \n      <th>Rate</th> \n      <th>ProjectSize</th> \n      <th>DateOfComplition</th> \n    </thead>\n\n    <tbody>\n       <tr *ngFor =\"let descS of sizedescall\">\n         <td>{{descS.Distance}}</td>\n         <td>{{descS.Rate}}</td>\n         <td class=\"sizefield\">{{descS.ProjectSize}}</td>\n         <td>{{descS.DateOfComplition}}</td>\n       </tr>\n    </tbody>\n    \n<table>\n  \n      \n      \n      \n      \n          \n"

/***/ }),

/***/ "./src/app/components/sizedescall/sizedescall.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizedescallComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_size_service__ = __webpack_require__("./src/app/services/size.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SizedescallComponent = /** @class */ (function () {
    function SizedescallComponent(_sizeService) {
        this._sizeService = _sizeService;
    }
    SizedescallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sizeService.getSizeDescAll()
            .subscribe(function (resSizeData) { return _this.sizedescall = resSizeData; });
    };
    SizedescallComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sizedescall',
            template: __webpack_require__("./src/app/components/sizedescall/sizedescall.component.html"),
            styles: [__webpack_require__("./src/app/components/sizedescall/sizedescall.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_size_service__["a" /* SizeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_size_service__["a" /* SizeService */]])
    ], SizedescallComponent);
    return SizedescallComponent;
}());



/***/ }),

/***/ "./src/app/components/sizedesceone/sizedesceone.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 50px;\r\n    padding:100px;\r\n    background-color: whitesmoke;\r\n   \r\n}\r\nh1\r\n{   color:cyan;\r\n    text-align: center;\r\n    \r\n}\r\n.head{\r\n    color: black;\r\n    text-align: center;\r\n}\r\n.tab{\r\n    border:2px solid gray;\r\n    border-bottom: none;\r\n    border-top: 5px solid greenyellow;\r\n    width: 400px;\r\n    margin-left:240px;\r\n}\r\nh1:hover{\r\n   color: lime;\r\n    cursor: pointer;\r\n}\r\n.sizefield{\r\n    color: red;\r\n    background-color: lightcyan;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/sizedesceone/sizedesceone.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n    <div class = \"container-fluid\">\n  <h1> Roofs Sorted By ProjectSizeDescending Order</h1><br><br>\n<table class =\"table table-hover tab\">\n\n    <thead class=\"head\">\n      <th>ProjectSize</th> \n    </thead>\n\n    <tbody>\n       <tr *ngFor =\"let sd of sizeonedesc\">\n         <td class=\"sizefield\">{{sd.ProjectSize}}</td>\n      </tr>\n    </tbody>\n    \n<table>\n  \n\n      \n      \n      \n      \n          \n\n      \n      \n      \n          \n"

/***/ }),

/***/ "./src/app/components/sizedesceone/sizedesceone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizedesceoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sizeone_service__ = __webpack_require__("./src/app/services/sizeone.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SizedesceoneComponent = /** @class */ (function () {
    function SizedesceoneComponent(_sizeoneService) {
        this._sizeoneService = _sizeoneService;
    }
    SizedesceoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sizeoneService.getSizeOneDesc()
            .subscribe(function (ressizeonedescData) { return _this.sizeonedesc = ressizeonedescData; });
    };
    SizedesceoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sizedesceone',
            template: __webpack_require__("./src/app/components/sizedesceone/sizedesceone.component.html"),
            styles: [__webpack_require__("./src/app/components/sizedesceone/sizedesceone.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_sizeone_service__["a" /* SizeoneService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sizeone_service__["a" /* SizeoneService */]])
    ], SizedesceoneComponent);
    return SizedesceoneComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/date.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateService; });
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



var DateService = /** @class */ (function () {
    function DateService(_http) {
        this._http = _http;
        this._getUrl = "roofs/date/asce/all";
        this._url = "roofs/date/desc/all";
    }
    //asce
    DateService.prototype.getDate = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    //desc
    DateService.prototype.getDateDescAll = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); });
    };
    DateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DateService);
    return DateService;
}());



/***/ }),

/***/ "./src/app/services/dateone.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateoneService; });
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



var DateoneService = /** @class */ (function () {
    function DateoneService(_http) {
        this._http = _http;
        this._getUrl = "roofs/date/asce/one";
        this._url = "/roofs/date/desc/one";
    }
    //asce
    DateoneService.prototype.getDateOneAsce = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    //desc
    DateoneService.prototype.getDateOneDesc = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); });
    };
    DateoneService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DateoneService);
    return DateoneService;
}());



/***/ }),

/***/ "./src/app/services/distance.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistanceService; });
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



var DistanceService = /** @class */ (function () {
    function DistanceService(_http) {
        this._http = _http;
        this._getUrl = "roofs/distance/asce/all";
        this._url = "roofs/distance/desc/all";
    }
    //ascending method
    DistanceService.prototype.getDistance = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    //descending method
    DistanceService.prototype.getDistDescAll = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); });
    };
    DistanceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DistanceService);
    return DistanceService;
}());



/***/ }),

/***/ "./src/app/services/distanceone.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistanceoneService; });
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



var DistanceoneService = /** @class */ (function () {
    function DistanceoneService(_http) {
        this._http = _http;
        this._getUrl = "roofs/distance/asce/one";
        this._url = "roofs/distance/desc/one";
    }
    DistanceoneService.prototype.getDistanceOneAsce = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    DistanceoneService.prototype.getDistanceOneDesc = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); });
    };
    DistanceoneService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DistanceoneService);
    return DistanceoneService;
}());



/***/ }),

/***/ "./src/app/services/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
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



var ProjectsService = /** @class */ (function () {
    function ProjectsService(_http) {
        this._http = _http;
        this._getUrl = "Roofs/projects";
    }
    ProjectsService.prototype.getProjects = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    ProjectsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/services/rate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateService; });
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



var RateService = /** @class */ (function () {
    function RateService(_http) {
        this._http = _http;
        this._getUrl = "roofs/rate/asce/all";
        this._url = "roofs/rate/desc/all";
    }
    //ascending
    RateService.prototype.getRate = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    //descnding order
    RateService.prototype.getRateDescAll = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); });
    };
    RateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RateService);
    return RateService;
}());



/***/ }),

/***/ "./src/app/services/rateone.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateoneService; });
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



var RateoneService = /** @class */ (function () {
    function RateoneService(_http) {
        this._http = _http;
        this._getUrl = "roofs/rate/asce/one";
        this._url = "roofs/rate/desc/one";
    }
    //ascending
    RateoneService.prototype.getRateOneAsce = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    //desc
    RateoneService.prototype.getRateOneDesc = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); });
    };
    RateoneService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RateoneService);
    return RateoneService;
}());



/***/ }),

/***/ "./src/app/services/size.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizeService; });
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



var SizeService = /** @class */ (function () {
    function SizeService(_http) {
        this._http = _http;
        this._getUrl = "roofs/size/asce/all";
        this._url = "roofs/size/desc/all";
    }
    //ascending
    SizeService.prototype.getSize = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    //desc
    SizeService.prototype.getSizeDescAll = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); });
    };
    SizeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SizeService);
    return SizeService;
}());



/***/ }),

/***/ "./src/app/services/sizeone.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizeoneService; });
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



var SizeoneService = /** @class */ (function () {
    function SizeoneService(_http) {
        this._http = _http;
        this._getUrl = "roofs/size/asce/one";
        this._url = "roofs/size/desc/one";
    }
    //ascending
    SizeoneService.prototype.getSizeOneAsce = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    //descending
    SizeoneService.prototype.getSizeOneDesc = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); });
    };
    SizeoneService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SizeoneService);
    return SizeoneService;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
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