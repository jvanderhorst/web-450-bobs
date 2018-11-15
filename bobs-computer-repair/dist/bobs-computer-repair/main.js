(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    background-color: #12afb5;\r\n    color: rgb(58, 57, 57);\r\n    margin: 0 auto;\r\n    width: 80%;\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    padding-right: 40px;\r\n    padding-bottom: 10px;\r\n    padding-left: 40px;\r\n    border-top-right-radius: 5px;\r\n    border-top-left-radius: 5px;\r\n}\r\n\r\nimg {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    text-align: center;\r\n    -o-object-fit: fill;\r\n       object-fit: fill;\r\n    border-bottom-left-radius: 20px;\r\n    border-top-right-radius: 20px;\r\n    border-top-left-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n}\r\n\r\n#tech {\r\n    display: block;\r\n    width: 50%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    text-align: center;\r\n    -o-object-fit: fill;\r\n       object-fit: fill;\r\n    border-bottom-left-radius: 20px;\r\n    border-top-right-radius: 20px;\r\n    border-top-left-radius: 20px;\r\n    border-bottom-right-radius: 20px; \r\n}\r\n\r\np {\r\n    text-align: center;\r\n    font-size: 18px;\r\n}\r\n\r\n.formGroup2 {\r\n    color: black;\r\n    background-color: white;\r\n    margin: 0 auto;\r\n    width: 80%;\r\n    position: initial;\r\n    padding-top: 50px;\r\n    padding-right: 30px;\r\n    padding-bottom: 10px;\r\n    padding-left: 50px;\r\n    border-bottom-right-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n}\r\n\r\nh3 {\r\n    background-color: rgb(24, 23, 23);\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    color: white;\r\n    margin: 0 auto;\r\n    width: 80%;\r\n    position: initial;\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    padding-right: 40px;\r\n    padding-bottom: 10px;\r\n    padding-left: 40px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.icons {\r\n    font-size: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.button {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>About Us</h1>\r\n<form class=\"formGroup2\">\r\n    <div class=\"topSection\">\r\n    <img src=\"../../assets/aboutUs_image1.jpg\"><br />\r\n    <p><i>\"When you believe in your capabilities, the possibilities are endless.\"</i><br>-Robert Levi</p>\r\n    </div><hr />\r\n        \r\n          <h3>Our mission : </h3><br><p>Founded in 1996 by a devoted man named \r\n          Robert Levi, he launched the company's first online repair and \r\n          service shop.  What started as a side business, begun flourishing \r\n          into what is now a high-end deliverable repair and service business.  \r\n          Top-certified technicians are available both on-side and \r\n          over the phone to provide the upmost customer service to \r\n          their customers.  Bob's Repair Shop stays up-to-date on \r\n          all procedures and products.  Our outstanding staff \r\n          specializes in speedy recovery, guaranteed!</p><hr />\r\n\r\n          <h3>What we have to offer :</h3><br />\r\n          <img id=\"tech\" src=\"../../assets/ourMission_.jpg\"><br />\r\n          <p>Bob's Computer Repair Shop sells not only the best repair \r\n          products on the market but also proves top-notch, certified \r\n          technicians who specialize in many computer services you may \r\n          need.  Whether it be spyware removal, a computer tune-up, or \r\n          simply a password reset, we've got you covered!  Receive \r\n          low-rate services available when you need it.</p>\r\n          <hr />\r\n           \r\n          <br /><h3>Our technician services :</h3><br />\r\n          <img id=\"tech\" src=\"../../assets/servicesOffer.jpg\"><br />\r\n          <div class=\"icons\">\r\n          <mat-icon>enhanced_encryption</mat-icon> Password Reset <br>\r\n          Spyware Removal <mat-icon>block</mat-icon><br>\r\n          <mat-icon>unarchive</mat-icon> RAM Upgrade<br>\r\n          Software Installation <mat-icon>settings_system_daydream</mat-icon><br>\r\n          <mat-icon>cast_connected</mat-icon> Computer Tune-Up  <br>\r\n          Keyboard Cleaning <mat-icon>keyboard</mat-icon> <br>\r\n          <mat-icon>save</mat-icon>Disk Clean-up <br>\r\n          </div>\r\n          <hr />\r\n          <div class=\"button\">\r\n          <button class=\"button2\" mat-raised-button (click)=\"login()\">View Products</button><br>\r\n          </div>\r\n          <br />\r\n</form>\r\n<br />"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/amt-total/amt-total.component.css":
/*!***************************************************!*\
  !*** ./src/app/amt-total/amt-total.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/amt-total/amt-total.component.html":
/*!****************************************************!*\
  !*** ./src/app/amt-total/amt-total.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"node_modules/chart.js/src/chart.js\"></script>\r\n\\"

/***/ }),

/***/ "./src/app/amt-total/amt-total.component.ts":
/*!**************************************************!*\
  !*** ./src/app/amt-total/amt-total.component.ts ***!
  \**************************************************/
/*! exports provided: AmtTotalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmtTotalComponent", function() { return AmtTotalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AmtTotalComponent = /** @class */ (function () {
    function AmtTotalComponent() {
    }
    AmtTotalComponent.prototype.ngOnInit = function () {
    };
    AmtTotalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-amt-total',
            template: __webpack_require__(/*! ./amt-total.component.html */ "./src/app/amt-total/amt-total.component.html"),
            styles: [__webpack_require__(/*! ./amt-total.component.css */ "./src/app/amt-total/amt-total.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AmtTotalComponent);
    return AmtTotalComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./security-questions/security-questions.component */ "./src/app/security-questions/security-questions.component.ts");
/* harmony import */ var _management_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./management/management.component */ "./src/app/management/management.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _amt_total_amt_total_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./amt-total/amt-total.component */ "./src/app/amt-total/amt-total.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _internal_server_error_internal_server_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./internal-server-error/internal-server-error.component */ "./src/app/internal-server-error/internal-server-error.component.ts");
/* harmony import */ var _service_repair_service_repair_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service-repair/service-repair.component */ "./src/app/service-repair/service-repair.component.ts");
/* harmony import */ var _role_manager_role_manager_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./role-manager/role-manager.component */ "./src/app/role-manager/role-manager.component.ts");
/* harmony import */ var _log_file_log_file_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./log-file/log-file.component */ "./src/app/log-file/log-file.component.ts");
/* harmony import */ var _question_manager_question_manager_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./question-manager/question-manager.component */ "./src/app/question-manager/question-manager.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'amt-total', component: _amt_total_amt_total_component__WEBPACK_IMPORTED_MODULE_9__["AmtTotalComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] },
    { path: 'management', component: _management_management_component__WEBPACK_IMPORTED_MODULE_6__["ManagementComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'reset-password', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordComponent"] },
    { path: 'security-questions', component: _security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_5__["SecurityQuestionsComponent"] },
    { path: 'management', component: _management_management_component__WEBPACK_IMPORTED_MODULE_6__["ManagementComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'service-repair', component: _service_repair_service_repair_component__WEBPACK_IMPORTED_MODULE_12__["ServiceRepairComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'not-found-page', component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundPageComponent"] },
    { path: 'internal-server-error', component: _internal_server_error_internal_server_error_component__WEBPACK_IMPORTED_MODULE_11__["InternalServerErrorComponent"] },
    { path: 'role-manager', component: _role_manager_role_manager_component__WEBPACK_IMPORTED_MODULE_13__["RoleManagerComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'log-file', component: _log_file_log_file_component__WEBPACK_IMPORTED_MODULE_14__["LogFileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'question-manager', component: _question_manager_question_manager_component__WEBPACK_IMPORTED_MODULE_15__["QuestionManagerComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: '**', redirectTo: 'not-found-page' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Body Styles*/\r\nbody {\r\n    color: white;\r\n    margin: 0;\r\n    padding: 0;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    top: 0;\r\n}\r\n.wrapper {\r\n    width: 80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-top: 100px;\r\n}\r\n/*Toolbar*/\r\n.menu {\r\n    background-color: rgb(24, 23, 23);\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100% !important;\r\n}\r\n.container a {\r\n     text-decoration: none;\r\n     color: #fff;\r\n     \r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"mat-app-background\">\r\n  <div class=\"container\">\r\n    <mat-toolbar class=\"menu\" role=\"header\" color=\"primary\">\r\n      <mat-toolbar-row>\r\n        <a [routerLink]=\"['/']\">Bob's Online Computer Repair Shop</a>\r\n        <div fxFlex></div>\r\n        <button *ngIf=\"authService.isLoggedIn()\" mat-button class=\"button1\" [matMenuTriggerFor]=\"manage\">Manage</button><br />&nbsp;&nbsp;\r\n        <mat-menu #manage=\"matMenu\">\r\n            <button mat-menu-item [routerLink]=\"['/management']\">Users</button>\r\n            <button mat-menu-item [routerLink]=\"['/question-manager']\">Questions</button>\r\n            <button mat-menu-item [routerLink]=\"['/role-manager']\">Roles</button>\r\n            <button mat-menu-item [routerLink]=\"['/log-file']\">Logs</button>\r\n        </mat-menu>\r\n        <button mat-button class=\"button2\" [routerLink]=\"['/service-repair']\">Services</button><br />&nbsp;&nbsp;\r\n        <button mat-button class=\"button1\" [routerLink]=\"['/about']\">About Us</button><br/>&nbsp;&nbsp;\r\n        <button mat-button class=\"button2\" [routerLink]=\"['/contact']\">Contact Info</button><br />&nbsp;&nbsp;\r\n        <button *ngIf=\"authService.isLoggedIn()\" mat-button class=\"button1\" (click)=\"logout()\">Log Out</button><br />&nbsp;&nbsp;\r\n        </mat-toolbar-row>\r\n      </mat-toolbar>\r\n      <!--component view wrapper-->\r\n      <div class=\"wrapper\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n  </div>  \r\n\r\n</body>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, userService, router) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.logout = function () {
        this.authService.deleteToken();
        this.router.navigate(['']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./security-questions/security-questions.component */ "./src/app/security-questions/security-questions.component.ts");
/* harmony import */ var _management_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./management/management.component */ "./src/app/management/management.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _internal_server_error_internal_server_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./internal-server-error/internal-server-error.component */ "./src/app/internal-server-error/internal-server-error.component.ts");
/* harmony import */ var _service_repair_service_repair_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service-repair/service-repair.component */ "./src/app/service-repair/service-repair.component.ts");
/* harmony import */ var _role_manager_role_manager_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./role-manager/role-manager.component */ "./src/app/role-manager/role-manager.component.ts");
/* harmony import */ var _log_file_log_file_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./log-file/log-file.component */ "./src/app/log-file/log-file.component.ts");
/* harmony import */ var _amt_total_amt_total_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./amt-total/amt-total.component */ "./src/app/amt-total/amt-total.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _question_manager_question_manager_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./question-manager/question-manager.component */ "./src/app/question-manager/question-manager.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_7__["SecurityQuestionsComponent"],
                _management_management_component__WEBPACK_IMPORTED_MODULE_8__["ManagementComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _amt_total_amt_total_component__WEBPACK_IMPORTED_MODULE_16__["AmtTotalComponent"],
                _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundPageComponent"],
                _internal_server_error_internal_server_error_component__WEBPACK_IMPORTED_MODULE_12__["InternalServerErrorComponent"],
                _service_repair_service_repair_component__WEBPACK_IMPORTED_MODULE_13__["ServiceRepairComponent"],
                _role_manager_role_manager_component__WEBPACK_IMPORTED_MODULE_14__["RoleManagerComponent"],
                _log_file_log_file_component__WEBPACK_IMPORTED_MODULE_15__["LogFileComponent"],
                _question_manager_question_manager_component__WEBPACK_IMPORTED_MODULE_28__["QuestionManagerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_26__["UserService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    background-color: #12afb5;\r\n    color: rgb(58, 57, 57);\r\n    margin: 0 auto;\r\n    width: 70%;\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    padding-right: 40px;\r\n    padding-bottom: 10px;\r\n    padding-left: 40px;\r\n    border-top-right-radius: 5px;\r\n    border-top-left-radius: 5px;\r\n}\r\n\r\n.formGroup2 {\r\n    color: black;\r\n    background-color: white;\r\n    margin: auto;\r\n    width: 70%;\r\n    position: initial;\r\n    padding-top: 30px;\r\n    padding-right: 30px;\r\n    padding-bottom: 30px;\r\n    padding-left: 50px;\r\n    border-bottom-right-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n}\r\n\r\n.contactForm {\r\n  \r\n  text-align: center;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  left: 54%;\r\n  margin-left: -3px;\r\n  top: 36%;\r\n}\r\n\r\nimg {\r\n    width: 44%;\r\n    margin: auto;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    border-bottom-left-radius: 8px;\r\n    border-top-right-radius: 8px;\r\n    border-top-left-radius: 8px;\r\n    border-bottom-right-radius: 8px;\r\n    padding: 5px;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none;\r\n\r\n}\r\n\r\n.fa-facebook {\r\n    background: white;\r\n    color: black;\r\n  }\r\n\r\n.fa-twitter {\r\n    background: white;\r\n    color: black;\r\n  }\r\n\r\n.fa-linkedin {\r\n    background: white;\r\n    color: black;\r\n  }\r\n\r\n.fa-instagram {\r\n    background: white;\r\n    color: black;\r\n  }"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Contact Us</h1>\r\n<form class=\"formGroup2\"><br /><br>\r\n  <div class=\"image\">\r\n  <img src=\"../../assets/contact_.jpg\">\r\n  </div>\r\n\r\n  <br /><div class=\"contactForm\">\r\n  Bob's Computer Repair Shop <br />\r\n  bob@bcrs.com <br />\r\n  1-800-662-2222 <br />\r\n  <a href=\"https://www.linkedin.com/\" class=\"fa fa-linkedin\"></a>&nbsp;&nbsp;\r\n  <a href=\"https://www.instagram.com/\" class=\"fa fa-instagram\"></a>&nbsp;&nbsp;\r\n  <a href=\"https://www.facebook.com/\" class=\"fa fa-facebook\"></a>&nbsp;&nbsp;\r\n  <a href=\"https://twitter.com/?lang=en\" class=\"fa fa-twitter\"></a>&nbsp;&nbsp;\r\n  <br />\r\n  1001 Einstein Way <br>\r\n  Hill Valley, CA 11111\r\n  </div>\r\n  </form>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/internal-server-error/internal-server-error.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/internal-server-error/internal-server-error.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-wrapper {\r\n    background-image: url('500error-justin-little-650865-unsplash.jpg');\r\n    background-size: cover;\r\n    background-repeat: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 70px;\r\n    left: 0;\r\n}\r\n\r\n.message-wrapper {\r\n    width: 40%;\r\n    height: 100%;\r\n    background: rgba(255, 255, 255, 0.2);\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.message {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.message h1 {\r\n    font-weight: 900;\r\n    font-size: 10em;\r\n}\r\n\r\n.message h3 {\r\n    font-weight: 400;\r\n    font-size: 3em;\r\n}"

/***/ }),

/***/ "./src/app/internal-server-error/internal-server-error.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/internal-server-error/internal-server-error.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n    <div class=\"message-wrapper\">\r\n    <div class=\"message\">\r\n      <h1>error</h1>\r\n      <h3>internal server</h3>\r\n    </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/internal-server-error/internal-server-error.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/internal-server-error/internal-server-error.component.ts ***!
  \**************************************************************************/
/*! exports provided: InternalServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalServerErrorComponent", function() { return InternalServerErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InternalServerErrorComponent = /** @class */ (function () {
    function InternalServerErrorComponent() {
    }
    InternalServerErrorComponent.prototype.ngOnInit = function () {
    };
    InternalServerErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-internal-server-error',
            template: __webpack_require__(/*! ./internal-server-error.component.html */ "./src/app/internal-server-error/internal-server-error.component.html"),
            styles: [__webpack_require__(/*! ./internal-server-error.component.css */ "./src/app/internal-server-error/internal-server-error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InternalServerErrorComponent);
    return InternalServerErrorComponent;
}());



/***/ }),

/***/ "./src/app/log-file/log-file.component.css":
/*!*************************************************!*\
  !*** ./src/app/log-file/log-file.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/log-file/log-file.component.html":
/*!**************************************************!*\
  !*** ./src/app/log-file/log-file.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Log Files</h3>\r\n<table class=\"table table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">Logs</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr >\r\n      <th scope=\"row\">{{data}}</th>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/log-file/log-file.component.ts":
/*!************************************************!*\
  !*** ./src/app/log-file/log-file.component.ts ***!
  \************************************************/
/*! exports provided: LogFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogFileComponent", function() { return LogFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogFileComponent = /** @class */ (function () {
    function LogFileComponent(http) {
        this.http = http;
    }
    LogFileComponent.prototype.ngOnInit = function () {
        this.getLog;
    };
    LogFileComponent.prototype.getLog = function () {
        this.http.get('/api/log').subscribe(function (data) {
            console.log(data);
        });
    };
    LogFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-file',
            template: __webpack_require__(/*! ./log-file.component.html */ "./src/app/log-file/log-file.component.html"),
            styles: [__webpack_require__(/*! ./log-file.component.css */ "./src/app/log-file/log-file.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LogFileComponent);
    return LogFileComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 80%;\r\n}\r\n\r\n.mat-form-field-empty.mat-form-field-label {\r\n  color:#020024;\r\n  background-color: red;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n.register {\r\n  color: teal;\r\n  font-size: 16px;\r\n  position: initial;\r\n  width: 300px;\r\n  height: 100px;\r\n }\r\n\r\n.button {\r\n   text-align: right;\r\n   font-size: 16px;\r\n   color: gray;\r\n }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\r\n<h2>Login</h2>\r\n<form class=\"formGroup\" #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit(signInForm)\">\r\n  <div class=\"example-container\">\r\n    <mat-form-field>\r\n      <input \r\n      #username=\"ngModel\"\r\n      [(ngModel)]=\"login.username\"\r\n      type=\"text\" \r\n      matInput \r\n      placeholder\r\n      value=\"username\"\r\n      name=\"username\"  \r\n      required\r\n      >\r\n      <mat-icon>person</mat-icon> &nbsp; \r\n    </mat-form-field><br />\r\n    <mat-form-field>\r\n      <input \r\n      #password=\"ngModel\"\r\n      [(ngModel)]=\"login.password\"\r\n      type=\"password\" \r\n      matInput \r\n      placeholder\r\n      value=\"password\"\r\n      name=\"password\"  \r\n      required\r\n      >\r\n      <mat-icon>vpn_key</mat-icon> &nbsp; \r\n    </mat-form-field><br />\r\n    <button class=\"button2\" mat-raised-button type=\"submit\" >Submit</button><br><br />\r\n  </div>\r\n  <div class=\"register\">\r\n    <p>Not a member? <a [routerLink]=\"['/register']\">Register</a> now!</p>\r\n    <p>Forgot password? <a [routerLink]=\"['/security-questions']\">Recover</a> here!</p>\r\n  </div>\r\n</form><br><br>\r\n\r\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\r\n  {{serverErrorMessages}}\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.login = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn())
            this.router.navigateByUrl('/service-repair');
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.authService.login(form.value).subscribe(function (res) {
            _this.authService.setToken(res['token']);
            _this.router.navigateByUrl('/service-repair');
        }, function (err) {
            _this.serverErrorMessages = err.error.message;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/management/management.component.css":
/*!*****************************************************!*\
  !*** ./src/app/management/management.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    color: black;\r\n    background-color: white;\r\n    opacity: 50%;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n  }\r\n\r\nh3 {\r\n    background-color: #19ccd0;\r\n    color: rgb(58, 57, 57);\r\n    opacity: 50%;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 10px;\r\n}"

/***/ }),

/***/ "./src/app/management/management.component.html":
/*!******************************************************!*\
  !*** ./src/app/management/management.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>User Management</h3>\r\n<table class=\"table table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">ID</th>\r\n            <th scope=\"col\">User</th>\r\n            <th scope=\"col\">Email</th>\r\n            <th scope=\"col\">Role</th>\r\n            <th scope=\"col\">Last Updated</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let user of users\">\r\n            <th scope=\"row\">{{user.userId}}</th>\r\n            <td>{{user.firstName}} {{user.lastName}}</td>\r\n            <td>{{user.email}}</td>\r\n            <td>Admin</td>\r\n            <td>{{user.dateCreated | date: 'MMM d, y'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <form>\r\n        <button class=\"button1\" mat-raised-button (click)=\"'Submit'\" [routerLink]=\"['/management']\">Add User</button>&nbsp;\r\n        <button class=\"button1\" mat-raised-button (click)=\"'Submit'\" [routerLink]=\"['/management']\">Edit User</button>&nbsp;\r\n        <button class=\"button3\" mat-raised-button (click)=\"'Submit'\" [routerLink]=\"['/management']\">Delete User</button>&nbsp;\r\n<br>\r\n<br>\r\n<br>\r\n      </form>\r\n      \r\n"

/***/ }),

/***/ "./src/app/management/management.component.ts":
/*!****************************************************!*\
  !*** ./src/app/management/management.component.ts ***!
  \****************************************************/
/*! exports provided: ManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementComponent", function() { return ManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManagementComponent = /** @class */ (function () {
    function ManagementComponent(userService) {
        this.userService = userService;
    }
    ManagementComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    ManagementComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (users) { return _this.users = users; });
    };
    ManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-management',
            template: __webpack_require__(/*! ./management.component.html */ "./src/app/management/management.component.html"),
            styles: [__webpack_require__(/*! ./management.component.css */ "./src/app/management/management.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], ManagementComponent);
    return ManagementComponent;
}());



/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-wrapper {\r\n    background-image: url('404error-david-kovalenko-414249-unsplash.jpg');\r\n    background-size: cover;\r\n    background-repeat: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 70px;\r\n    left: 0;\r\n}\r\n\r\n.message-wrapper {\r\n    width: 40%;\r\n    height: 100%;\r\n    background: rgba(255, 255, 255, 0.2);\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.message {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.message h1 {\r\n    font-weight: 900;\r\n    font-size: 10em;\r\n}\r\n\r\n.message h3 {\r\n    font-weight: 400;\r\n    font-size: 3em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n  <div class=\"message-wrapper\">\r\n  <div class=\"message\">\r\n    <h1>404</h1>\r\n    <h3>That's not what you're looking,<br> but how did that happen?</h3>\r\n  </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.ts ***!
  \************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found-page',
            template: __webpack_require__(/*! ./not-found-page.component.html */ "./src/app/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__(/*! ./not-found-page.component.css */ "./src/app/not-found-page/not-found-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/question-manager/question-manager.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/question-manager/question-manager.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 75%;\r\n  }\r\n  \r\n  .mat-form-field-empty.mat-form-field-label {\r\n    color:#020024;\r\n    background-color: red;\r\n    position: absolute;\r\n    width: 100%;\r\n  }\r\n  \r\n  table {\r\n    color: black;\r\n    background-color: white;\r\n    opacity: 50%;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  h3 {\r\n    background-color: #19ccd0;\r\n    color: rgb(58, 57, 57);\r\n    opacity: 50%;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 10px;\r\n}"

/***/ }),

/***/ "./src/app/question-manager/question-manager.component.html":
/*!******************************************************************!*\
  !*** ./src/app/question-manager/question-manager.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Add New Question</h2>\r\n  <form class=\"formGroup\" #addQuestionForm=\"ngForm\" (ngSubmit)=\"addQuestionForm.valid && onSubmit(addQuestionForm)\">\r\n    <div class=\"example-container\">\r\n      <mat-form-field>\r\n        <input\r\n        type=\"text\"\r\n        #questionId=\"ngModel\"\r\n        [(ngModel)]=\"questionService.selectedQuestion.questionId\"\r\n        name=\"questionId\"\r\n        placeholder=\"Question Id\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :addQuestionForm.submitted && !questionId.valid }\">\r\n      </mat-form-field><br />\r\n      <mat-form-field>\r\n        <input\r\n        type=\"text\"\r\n        #lastName=\"ngModel\"\r\n        [(ngModel)]=\"questionService.selectedQuestion.questionName\"\r\n        name=\"questionName\"\r\n        placeholder=\"Question Name\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :addQuestionForm.submitted && !questionName.valid }\">\r\n      </mat-form-field><br />\r\n      <br />\r\n      \r\n      \r\n  </div> \r\n  \r\n    <button class=\"button1\" mat-raised-button type=\"submit\">Add Question</button>\r\n    <br />\r\n    \r\n    <div class=\"success\" *ngIf=\"showSucessMessage\">\r\n      Saved successfully\r\n    </div>\r\n    \r\n    <!-- Error message -->\r\n    <div class=\"alert\" *ngIf=\"serverErrorMessages\">\r\n      {{serverErrorMessages}}\r\n    </div>\r\n\r\n  </form>\r\n\r\n<h3>Question Management</h3>\r\n<table class=\"table table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">Question ID</th>\r\n            <th scope=\"col\">Question Name</th>\r\n            <th scope=\"col\">Last Updated</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let question of questions\">\r\n            <th scope=\"row\">{{question.questionId}}</th>\r\n            <td>{{question.questionName}}</td>\r\n            <td>{{question.dateUpdated | date: 'MMM d, y'}}</td>\r\n            <td><button (click)=\"onDelete(question.questionId, addQuestionForm)\"><mat-icon>delete</mat-icon></button></td>\r\n            <td><button (click)=\"onEdit(question)\"><mat-icon>edit</mat-icon></button></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <form>\r\n        \r\n        <button class=\"button1\" mat-raised-button (click)=\"'Submit'\" [routerLink]=\"['/management']\">Edit User</button>&nbsp;\r\n        <button class=\"button3\" mat-raised-button (click)=\"'Submit'\" [routerLink]=\"['/management']\">Delete User</button>&nbsp;\r\n<br>\r\n<br>\r\n<br>\r\n      </form>"

/***/ }),

/***/ "./src/app/question-manager/question-manager.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/question-manager/question-manager.component.ts ***!
  \****************************************************************/
/*! exports provided: QuestionManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionManagerComponent", function() { return QuestionManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/question.service */ "./src/app/services/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionManagerComponent = /** @class */ (function () {
    function QuestionManagerComponent(questionService) {
        this.questionService = questionService;
    }
    QuestionManagerComponent.prototype.ngOnInit = function () {
        this.getAllQuestions();
    };
    QuestionManagerComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.questionService.postQuestion(form.value).subscribe(function (res) {
            _this.showSucessMessage = true;
            setTimeout(function () { return _this.showSucessMessage = false; }, 4000);
            _this.resetForm(form);
        }, function (err) {
            if (err.status === 422) {
                _this.serverErrorMessages = err.error.join('<br/>');
            }
            else
                _this.serverErrorMessages = 'Something went wrong.Please try again';
        });
    };
    QuestionManagerComponent.prototype.resetForm = function (form) {
        this.questionService.selectedQuestion = {
            questionId: '',
            questionName: ''
        };
        form.resetForm();
        this.serverErrorMessages = '';
    };
    QuestionManagerComponent.prototype.getAllQuestions = function () {
        var _this = this;
        this.questionService.getAllQuestions()
            .subscribe(function (questions) { return _this.questions = questions; });
    };
    QuestionManagerComponent.prototype.onDelete = function (questionName, form) {
        var _this = this;
        if (confirm('Are you sure you want to delete this question?') == true) {
            this.questionService.deleteQuestion(questionName).subscribe(function (res) {
                _this.getAllQuestions();
                alert('Deleted successfully');
            });
        }
    };
    QuestionManagerComponent.prototype.onEdit = function (question) {
        this.questionService.selectedQuestion = question;
        this.getAllQuestions();
    };
    QuestionManagerComponent.prototype.refreshquestionList = function () {
        var _this = this;
        this.questionService.getAllQuestions().subscribe(function (res) {
            _this.questionService.questions = res;
        });
    };
    QuestionManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-manager',
            template: __webpack_require__(/*! ./question-manager.component.html */ "./src/app/question-manager/question-manager.component.html"),
            styles: [__webpack_require__(/*! ./question-manager.component.css */ "./src/app/question-manager/question-manager.component.css")]
        }),
        __metadata("design:paramtypes", [_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]])
    ], QuestionManagerComponent);
    return QuestionManagerComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  background-size: 0;\r\n}\r\n\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 80%;\r\n}\r\n\r\n.vl {\r\n    border-left: 1px solid rgb(193, 194, 193);\r\n    height: 400px;\r\n    position: absolute;\r\n    left: 50%;\r\n    margin-left: -3px;\r\n    top: 30%;\r\n    padding-right: 30px;\r\n    padding-left: 30px;\r\n  }\r\n\r\n.example-container2 {\r\n    font-size: 16px;\r\n    padding-left: 40px;\r\n    margin: 0;\r\n  }\r\n\r\n.example-container2 > * {\r\n    padding-right: 20px;\r\n    width: 90%;\r\n  }\r\n\r\np {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n  }\r\n\r\n.mat-form-field-empty.mat-form-field-label {\r\n    color:#020024;\r\n    background-color: red;\r\n    position: absolute;\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register Here</h2>\r\n  <form class=\"formGroup\" #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\">\r\n    <div class=\"example-container\">\r\n      <mat-form-field>\r\n        <input\r\n        type=\"text\"\r\n        #firstName=\"ngModel\"\r\n        [(ngModel)]=\"authService.selectedUser.firstName\"\r\n        name=\"firstName\"\r\n        placeholder=\"First name\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !firstName.valid }\">\r\n        <div *ngIf=\"signUpForm.submitted && !firstName.valid\">\r\n          <label class=\"validation-message\">This field is required.</label>\r\n        </div>\r\n      </mat-form-field><br>\r\n      <mat-form-field>\r\n        <input\r\n        type=\"text\"\r\n        #lastName=\"ngModel\"\r\n        [(ngModel)]=\"authService.selectedUser.lastName\"\r\n        name=\"lastName\"\r\n        placeholder=\"Last name\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !lastName.valid }\">\r\n        <div *ngIf=\"signUpForm.submitted && !lastName.valid\">\r\n          <label class=\"validation-message\">This field is required.</label>\r\n        </div>\r\n      </mat-form-field><br />\r\n      <mat-form-field>\r\n        <input\r\n        type=\"text\"\r\n        #email=\"ngModel\"\r\n        [(ngModel)]=\"authService.selectedUser.email\"\r\n        name=\"email\"\r\n        placeholder=\"email\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !email.valid }\">\r\n        <div *ngIf=\"signUpForm.submitted && !email.valid\">\r\n          <label class=\"validation-message\">This field is required.</label>\r\n        </div>\r\n      </mat-form-field><br />\r\n      \r\n      <mat-form-field>\r\n        <input\r\n        type=\"text\"\r\n        #phoneNumber=\"ngModel\"\r\n        [(ngModel)]=\"authService.selectedUser.phoneNumber\"\r\n        name=\"phoneNumber\"\r\n        placeholder=\"phone number\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !phoneNumber.valid }\">\r\n        <div *ngIf=\"signUpForm.submitted && !phoneNumber.valid\">\r\n          <label class=\"validation-message\">This field is required.</label>\r\n        </div>\r\n      </mat-form-field><br />\r\n      <mat-form-field>\r\n        <input\r\n        type=\"text\"\r\n        #streetAddress=\"ngModel\"\r\n        [(ngModel)]=\"authService.selectedUser.streetAddress\"\r\n        name=\"streetAddress\"\r\n        placeholder=\"Street Address\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !streetAddress.valid }\">\r\n        <div *ngIf=\"signUpForm.submitted && !streetAddress.valid\">\r\n          <label class=\"validation-message\">This field is required.</label>\r\n        </div>\r\n      </mat-form-field><br />\r\n      <mat-form-field>\r\n        <input\r\n        type=\"text\"\r\n        #city=\"ngModel\"\r\n        [(ngModel)]=\"authService.selectedUser.city\"\r\n        name=\"city\"\r\n        placeholder=\"city\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !city.valid }\">\r\n        <div *ngIf=\"signUpForm.submitted && !city.valid\">\r\n          <label class=\"validation-message\">This field is required.</label>\r\n        </div>\r\n      </mat-form-field><br />\r\n      <mat-form-field>\r\n        <input\r\n        type=\"text\"\r\n        #state=\"ngModel\"\r\n        [(ngModel)]=\"authService.selectedUser.state\"\r\n        name=\"state\"\r\n        placeholder=\"state\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !state.valid }\">\r\n        <div *ngIf=\"signUpForm.submitted && !state.valid\">\r\n          <label class=\"validation-message\">This field is required.</label>\r\n        </div>\r\n      </mat-form-field><br />\r\n      <mat-form-field>\r\n        <input\r\n        type=\"text\"\r\n        #zipCode=\"ngModel\"\r\n        [(ngModel)]=\"authService.selectedUser.zipCode\"\r\n        name=\"zipCode\"\r\n        placeholder=\"zip code\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !zipCode.valid }\">\r\n        <div *ngIf=\"signUpForm.submitted && !zipCode.valid\">\r\n          <label class=\"validation-message\">This field is required.</label>\r\n        </div>\r\n      </mat-form-field><br />\r\n      <mat-form-field>\r\n        <input\r\n        type=\"text\"\r\n        #username=\"ngModel\"\r\n        [(ngModel)]=\"authService.selectedUser.username\"\r\n        name=\"username\"\r\n        placeholder=\"username\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !username.valid }\">\r\n        <div *ngIf=\"signUpForm.submitted && !username.valid\">\r\n          <label class=\"validation-message\">This field is required.</label>\r\n        </div>\r\n      </mat-form-field><br />\r\n      <mat-form-field>\r\n        <input\r\n        type=\"text\"\r\n        #password=\"ngModel\"\r\n        [(ngModel)]=\"authService.selectedUser.password\"\r\n        name=\"password\"\r\n        placeholder=\"password\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\">\r\n        <div *ngIf=\"signUpForm.submitted && !password.valid\">\r\n          <label class=\"validation-message\">This field is required.</label>\r\n        </div>\r\n      </mat-form-field><br />\r\n      <!--<mat-form-field>\r\n        <input\r\n        type=\"text\"\r\n        #password=\"ngModel\"\r\n        [(ngModel)]=\"authService.selectedUser.password\"\r\n        name=\"password\"\r\n        placeholder=\"confirm password\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\">\r\n        <div *ngIf=\"signUpForm.submitted && !password.valid\">\r\n          <label class=\"validation-message\">This field is required.</label>\r\n        </div>\r\n      </mat-form-field><br />\r\n      <mat-form-field >\r\n        <mat-select   placeholder=\"security question 1\">\r\n        <mat-option *ngFor=\"let question of question.questionName\"\r\n        type=\"text\"\r\n        #questionOne=\"ngModel\"\r\n        [(ngModel)]=\"authService.selectedUser.questionOne\"\r\n        name=\"questionOne\"\r\n        placeholder=\"security question\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !questionOne.valid }\">{{question.questionName}}\r\n      </mat-option>\r\n        <div *ngIf=\"signUpForm.submitted && !questionOne.valid\">\r\n          <label class=\"validation-message\">This field is required.</label>\r\n        </div>\r\n        </mat-select>\r\n      </mat-form-field><br />\r\n      <mat-form-field>\r\n          <mat-select placeholder=\"security question 2\">\r\n        <mat-option\r\n        type=\"text\"\r\n        #questionTwo=\"ngModel\"\r\n        [(ngModel)]=\"authService.selectedUser.questionTwo\"\r\n        name=\"questionTwo\"\r\n        placeholder=\"security question\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !questionTwo.valid }\">{{question.questionName}}\r\n      </mat-option>\r\n        <div *ngIf=\"signUpForm.submitted && !questionTwo.valid\">\r\n          <label class=\"validation-message\">This field is required.</label>\r\n        </div>\r\n        </mat-select>\r\n      </mat-form-field><br />\r\n      <mat-form-field>\r\n          <mat-select placeholder=\"security question 3\">\r\n        <mat-option\r\n        type=\"text\"\r\n        #questionThree=\"ngModel\"\r\n        [(ngModel)]=\"authService.selectedUser.questionThree\"\r\n        name=\"questionThree\"\r\n        placeholder=\"security question\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !questionThree.valid }\">{{question.questionName}}\r\n      </mat-option>\r\n        <div *ngIf=\"signUpForm.submitted && !questionThree.valid\">\r\n          <label class=\"validation-message\">This field is required.</label>\r\n        </div>\r\n          </mat-select>\r\n      </mat-form-field>--><br />\r\n  </div> \r\n  \r\n    <button class=\"button1\" mat-raised-button type=\"submit\">Register</button>\r\n    <br />\r\n    \r\n    <div class=\"success\" *ngIf=\"showSucessMessage\">\r\n      Saved successfully\r\n    </div>\r\n    \r\n    <!--Error message-->\r\n    <div class=\"alert\" *ngIf=\"serverErrorMessages\">\r\n      {{serverErrorMessages}}\r\n    </div>\r\n\r\n  </form>\r\n  \r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/question.service */ "./src/app/services/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, questionService) {
        this.authService = authService;
        this.questionService = questionService;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.getAllQuestions();
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.authService.postUser(form.value).subscribe(function (res) {
            _this.showSucessMessage = true;
            setTimeout(function () { return _this.showSucessMessage = false; }, 4000);
            _this.resetForm(form);
        }, function (err) {
            if (err.status === 422) {
                _this.serverErrorMessages = err.error.join('<br/>');
            }
            else
                _this.serverErrorMessages = 'Something went wrong.Please try again';
        });
    };
    /*checkPasswords(form: NgForm){
      let password = group.controls.password.value;
      let confirmPassword = group.controls.confirmPassword.value;
  
      return password === confirmPassword ? null : { notSame: true }
    }*/
    RegisterComponent.prototype.resetForm = function (form) {
        this.authService.selectedUser = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            streetAddress: '',
            city: '',
            state: '',
            zipCode: '',
            username: '',
            password: '',
            confirmPassword: '',
            questionOne: {
                questionName: '',
                answer: ''
            },
            questionTwo: {
                questionName: '',
                answer: ''
            },
            questionThree: {
                questionName: '',
                answer: ''
            },
            role: 'standard'
        };
        form.resetForm();
        this.serverErrorMessages = '';
    };
    RegisterComponent.prototype.getAllQuestions = function () {
        var _this = this;
        this.questionService.getAllQuestions()
            .subscribe(function (questions) { return _this.questions = questions; });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formGroup {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n}\r\n\r\n.formGroup button {\r\n    width: 25%;\r\n}\r\n\r\n.mat-submit {\r\n    background-color: green;\r\n    color: #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Reset Your Password </h2>\r\n<form class=\"formGroup\">\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">New Password: </label>\r\n    <input \r\n      type=\"password\" \r\n      id=\"password\" \r\n      class=\"form-control\" >    \r\n  </div><br>\r\n  <div class=\"form-group\">\r\n    <label for=\"confirmPassword\">Confirm Password: </label>\r\n    <input \r\n      type=\"password\" \r\n      class=\"form-control\" \r\n      id=\"confirmPassword\">\r\n  </div>\r\n</form><br>\r\n\r\n<a mat-raised-button=\"'cancel'\" [routerLink]=\"['/']\">Cancel</a>\r\n<a mat-raised-button [color]=\"'submit'\" [routerLink]=\"['/']\">Submit</a>"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent() {
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/role-manager/role-manager.component.css":
/*!*********************************************************!*\
  !*** ./src/app/role-manager/role-manager.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 75%;\r\n  }\r\n  \r\n  .mat-form-field-empty.mat-form-field-label {\r\n    color:#020024;\r\n    background-color: red;\r\n    position: absolute;\r\n    width: 100%;\r\n  }\r\n  \r\n  table {\r\n    color: black;\r\n    background-color: white;\r\n    opacity: 50%;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  h3 {\r\n    background-color: #19ccd0;\r\n    color: rgb(58, 57, 57);\r\n    opacity: 50%;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 10px;\r\n}"

/***/ }),

/***/ "./src/app/role-manager/role-manager.component.html":
/*!**********************************************************!*\
  !*** ./src/app/role-manager/role-manager.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create New Role</h2>\r\n  <form class=\"formGroup\" #addRoleForm=\"ngForm\" (ngSubmit)=\"addRoleForm.valid && onSubmit(addRoleForm)\">\r\n    <div class=\"example-container\">\r\n      <mat-form-field>\r\n        <input\r\n        type=\"text\"\r\n        #roleId=\"ngModel\"\r\n        [(ngModel)]=\"roleService.selectedRole.roleId\"\r\n        name=\"roleId\"\r\n        placeholder=\"Role Id\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :addRoleForm.submitted && !roleId.valid }\">\r\n      </mat-form-field><br />\r\n      <mat-form-field>\r\n        <input\r\n        type=\"text\"\r\n        #lastName=\"ngModel\"\r\n        [(ngModel)]=\"roleService.selectedRole.roleName\"\r\n        name=\"roleName\"\r\n        placeholder=\"Role Name\" \r\n        required\r\n        [ngClass]=\"{'invalid-textbox' :addRoleForm.submitted && !roleName.valid }\">\r\n      </mat-form-field><br />\r\n      <br />\r\n      \r\n      \r\n  </div> \r\n  \r\n    <button class=\"button1\" mat-raised-button type=\"submit\">Add Role</button>\r\n    <br />\r\n    \r\n    <div class=\"success\" *ngIf=\"showSucessMessage\">\r\n      Saved successfully\r\n    </div>\r\n    \r\n    <!-- Error message -->\r\n    <div class=\"alert\" *ngIf=\"serverErrorMessages\">\r\n      {{serverErrorMessages}}\r\n    </div>\r\n\r\n  </form>\r\n\r\n<h3>Role Management</h3>\r\n<table class=\"table table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">Role ID</th>\r\n            <th scope=\"col\">Role Name</th>\r\n            <th scope=\"col\">Last Updated</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let role of roles\">\r\n            <th scope=\"row\">{{role.roleId}}</th>\r\n            <td>{{role.roleName}}</td>\r\n            <td>{{role.dateUpdated | date: 'MMM d, y'}}</td>\r\n            <td><button (click)=\"onDelete(role.roleId, addRoleForm)\"><mat-icon>delete</mat-icon></button></td>\r\n            <td><button (click)=\"onEdit(role)\"><mat-icon>edit</mat-icon></button></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <form>\r\n        \r\n        <button class=\"button1\" mat-raised-button (click)=\"'Submit'\" [routerLink]=\"['/management']\">Edit User</button>&nbsp;\r\n        <button class=\"button3\" mat-raised-button (click)=\"'Submit'\" [routerLink]=\"['/management']\">Delete User</button>&nbsp;\r\n<br>\r\n<br>\r\n<br>\r\n      </form>\r\n\r\n\r\n      "

/***/ }),

/***/ "./src/app/role-manager/role-manager.component.ts":
/*!********************************************************!*\
  !*** ./src/app/role-manager/role-manager.component.ts ***!
  \********************************************************/
/*! exports provided: RoleManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagerComponent", function() { return RoleManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/role.service */ "./src/app/services/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoleManagerComponent = /** @class */ (function () {
    function RoleManagerComponent(roleService) {
        this.roleService = roleService;
    }
    RoleManagerComponent.prototype.ngOnInit = function () {
        this.getAllRoles();
        this.refreshRoleList();
        this.resetForm();
    };
    RoleManagerComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.roleService.postRole(form.value).subscribe(function (res) {
            _this.refreshRoleList();
            _this.resetForm();
            _this.getAllRoles();
            alert('Saved successfully');
        }, function (err) {
            if (err.status === 422) {
                _this.serverErrorMessages = err.error.join('<br/>');
            }
            else
                _this.serverErrorMessages = 'Something went wrong.Please try again';
        });
    };
    RoleManagerComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.roleService.selectedRole = {
            roleId: '',
            roleName: ''
        };
    };
    RoleManagerComponent.prototype.getAllRoles = function () {
        var _this = this;
        this.roleService.getAllRoles()
            .subscribe(function (roles) { return _this.roles = roles; });
    };
    RoleManagerComponent.prototype.onDelete = function (roleName, form) {
        var _this = this;
        if (confirm('Are you sure you want to delete this role?') == true) {
            this.roleService.deleteRole(roleName).subscribe(function (res) {
                _this.getAllRoles();
                alert('Deleted successfully');
            });
        }
    };
    RoleManagerComponent.prototype.onEdit = function (role) {
        this.roleService.selectedRole = role;
        this.getAllRoles();
    };
    RoleManagerComponent.prototype.refreshRoleList = function () {
        var _this = this;
        this.roleService.getAllRoles().subscribe(function (res) {
            _this.roleService.roles = res;
        });
    };
    RoleManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-manager',
            template: __webpack_require__(/*! ./role-manager.component.html */ "./src/app/role-manager/role-manager.component.html"),
            styles: [__webpack_require__(/*! ./role-manager.component.css */ "./src/app/role-manager/role-manager.component.css")]
        }),
        __metadata("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_1__["RoleService"]])
    ], RoleManagerComponent);
    return RoleManagerComponent;
}());



/***/ }),

/***/ "./src/app/security-questions/security-questions.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/security-questions/security-questions.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.button {\r\n        font-size: 16px;\r\n        position: relative;\r\n        left: 160px;\r\n        bottom: 10px;\r\n        padding-top: 10px;\r\n        padding-bottom: 10px;\r\n}\r\n\r\n.example-container {\r\n    font-size: 20px;\r\n    padding-top: 10px;\r\n    padding-left: 40px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n.example-container > * {\r\n    padding-right: 100px;\r\n    width: 100%;\r\n  }\r\n  \r\n"

/***/ }),

/***/ "./src/app/security-questions/security-questions.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/security-questions/security-questions.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Form\">\r\n    <h2>Security Questions</h2>\r\n    <form class=\"formGroup\">\r\n      <h4>Select each question below and provide an answer :</h4>\r\n      <div class=\"example-container\"><br />\r\n<mat-form-field>\r\n  <select matNativeControl>\r\n    <option>Question One</option>\r\n    <option value=\"q1a1\">What's the name of your first pet?</option>\r\n    <option value=\"q1a2\">What is your father's middle name?</option>\r\n    <option value=\"q1a3\">What is your favorite movie?</option>\r\n  </select>\r\n</mat-form-field>\r\n<mat-form-field>\r\n    <input type=\"text\" placeholder=\"Your Answer\" onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Enter Here'\" required=\"true\"/>        \r\n</mat-form-field><br />\r\n<br>\r\n<mat-form-field>\r\n   <select matNativeControl>\r\n     <option>Question Two</option>\r\n     <option value=\"q2a1\">Which town did you grow up in?</option>\r\n     <option value=\"q2a2\">Who was your first grade teacher?</option>\r\n     <option value=\"q2a3\">What was the name of your high school?</option>\r\n  </select>\r\n</mat-form-field>\r\n<mat-form-field>\r\n    <input type=\"text\" placeholder=\"Your Answer\" onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Enter Here'\" required=\"true\"/>\r\n  </mat-form-field><br />\r\n<br>\r\n<mat-form-field>\r\n   <select matNativeControl>\r\n      <option>Question Three</option>\r\n      <option value=\"q3a1\">Where is your favorite place to eat?</option>\r\n      <option value=\"q3a2\">What is a nickname you have?</option>\r\n      <option value=\"q3a3\">Who is your favorite singer/artist?</option>\r\n  </select>\r\n</mat-form-field>\r\n<mat-form-field>\r\n    <input type=\"text\" placeholder=\"Your Answer\" onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Enter Here'\" required=\"true\"/>\r\n</mat-form-field>\r\n<br>\r\n</div><br><br>\r\n<div class=\"button\">\r\n    <button class=\"button1\" mat-raised-button (click)=\"'Submit'\" [routerLink]=\"['/login']\">Cancel</button>&nbsp;\r\n    <button class=\"button2\" mat-raised-button (click)=\"'Submit'\" [routerLink]=\"['/about']\">Submit</button>\r\n  <br /> <br />\r\n</div>\r\n  </form>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/security-questions/security-questions.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/security-questions/security-questions.component.ts ***!
  \********************************************************************/
/*! exports provided: SecurityQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityQuestionsComponent", function() { return SecurityQuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecurityQuestionsComponent = /** @class */ (function () {
    function SecurityQuestionsComponent() {
    }
    SecurityQuestionsComponent.prototype.ngOnInit = function () {
    };
    SecurityQuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-security-questions',
            template: __webpack_require__(/*! ./security-questions.component.html */ "./src/app/security-questions/security-questions.component.html"),
            styles: [__webpack_require__(/*! ./security-questions.component.css */ "./src/app/security-questions/security-questions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SecurityQuestionsComponent);
    return SecurityQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/service-repair/service-repair.component.css":
/*!*************************************************************!*\
  !*** ./src/app/service-repair/service-repair.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nh2 {\r\n    background-color: #12afb5;\r\n    color: rgb(58, 57, 57);\r\n   \r\n    width: 100%;\r\n    \r\n    \r\n    border-top-right-radius: 5px;\r\n    border-top-left-radius: 5px;\r\n  }\r\n  \r\n  body{\r\n    background-size: 0;\r\n  }\r\n  \r\n  .services-page {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .example-container {\r\n      color: black;\r\n      background-color: white;\r\n      border-top-right-radius: 5px;\r\n      border-top-left-radius: 5px;\r\n      border-bottom-right-radius: 5px;\r\n      border-bottom-left-radius: 5px;\r\n    }\r\n  \r\n  .vl {\r\n      border-left: 1px solid rgb(193, 194, 193);\r\n      height: 400px;\r\n      position: absolute;\r\n      left: 50%;\r\n      margin-left: -3px;\r\n      top: 30%;\r\n      padding-right: 30px;\r\n      padding-left: 30px;\r\n    }\r\n  \r\n  .example-container2 {\r\n      \r\n      padding-left: 40px;\r\n      margin: 0;\r\n    }\r\n  \r\n  .example-container2 > * {\r\n      padding-right: 20px;\r\n      width: 90%;\r\n    }\r\n  \r\n  p {\r\n      \r\n      font-weight: bold;\r\n    }\r\n  \r\n  li {\r\n        list-style: none;\r\n        cursor: pointer;\r\n        padding-bottom: 25px;\r\n    }\r\n  \r\n  .button {\r\n      padding: 10px;\r\n      margin: 10px;\r\n    }\r\n  \r\n  .select-service {\r\n      padding: 10px;\r\n      margin: 10px;\r\n    }\r\n  \r\n  .review-service {\r\n      padding: 10px;\r\n      margin: 10px;\r\n    }"

/***/ }),

/***/ "./src/app/service-repair/service-repair.component.html":
/*!**************************************************************!*\
  !*** ./src/app/service-repair/service-repair.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"services-page\">\r\n  <div class=\"example-container\">\r\n      <h2>Available Services</h2>\r\n    <div class=\"select-service\">\r\n      <p>Please select from the following sevices and repairs</p>\r\n      <ul class=\"services\">\r\n        <li *ngFor=\"let repair of repairs\" (click)=\"selectedService(repair)\"> {{repair.repairName}} <span class=\"badge\">{{repair.price}}</span></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n    <br>\r\n    <br>\r\n    <div class=\"example-container\">\r\n        <h2>Selected Services</h2>\r\n      <div class=\"review-service\">\r\n        <br>\r\n        <div >\r\n        <h3 *ngIf=\"user\">{{user.firstName}}</h3>\r\n        </div>\r\n        <ul>\r\n          <li *ngFor=\"let selectedService of cart\"><button class=\"button1\" (click)=\"removeService(repair)\">remove</button>  {{selectedService.repairName}}: {{selectedService.price}}</li>\r\n        </ul>\r\n        <p>Labor: $50.00</p>\r\n        <p>Subtotal: </p>\r\n        <button class=\"button2\" mat-raised-button (click)=\"'Submit'\" >Submit</button>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/service-repair/service-repair.component.ts":
/*!************************************************************!*\
  !*** ./src/app/service-repair/service-repair.component.ts ***!
  \************************************************************/
/*! exports provided: ServiceRepairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceRepairComponent", function() { return ServiceRepairComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_repair_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/repair.service */ "./src/app/services/repair.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceRepairComponent = /** @class */ (function () {
    //currentUser: User;
    function ServiceRepairComponent(repairService, authService) {
        this.repairService = repairService;
        this.authService = authService;
        this.recentService = "";
        this.cart = [];
    }
    ServiceRepairComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllRepairs();
        //this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
        this.authService.getUserProfile().subscribe(function (user) {
            _this.user = user;
        }, function (err) {
            console.log(err);
        });
    };
    ServiceRepairComponent.prototype.getAllRepairs = function () {
        var _this = this;
        this.repairService.getAllRepairs()
            .subscribe(function (repairs) { return _this.repairs = repairs; });
    };
    ServiceRepairComponent.prototype.selectedService = function (repair) {
        this.recentService = repair;
        this.cart.push(repair);
    };
    ServiceRepairComponent.prototype.removeService = function (repair, index) {
        this.cart.splice(index, 1);
    };
    ServiceRepairComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service-repair',
            template: __webpack_require__(/*! ./service-repair.component.html */ "./src/app/service-repair/service-repair.component.html"),
            styles: [__webpack_require__(/*! ./service-repair.component.css */ "./src/app/service-repair/service-repair.component.css")]
        }),
        __metadata("design:paramtypes", [_services_repair_service__WEBPACK_IMPORTED_MODULE_1__["RepairService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ServiceRepairComponent);
    return ServiceRepairComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.selectedUser = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            streetAddress: '',
            city: '',
            state: '',
            zipCode: '',
            username: '',
            password: '',
            confirmPassword: '',
            questionOne: {
                questionName: '',
                answer: ''
            },
            questionTwo: {
                questionName: '',
                answer: ''
            },
            questionThree: {
                questionName: '',
                answer: ''
            },
            role: 'standard'
        };
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'NoAuth': 'True' }) };
        this.loggedIn = false;
        this.registerUrl = '/api/register';
        this.loginUrl = '/api/login';
        this.userUrl = '/api/user';
        this.profileUrl = '/api/profile';
        this.tokenUrl = '/api/token';
    }
    //create new users
    AuthService.prototype.postUser = function (user) {
        return this.http.post('/api/register', user);
    };
    //get all users
    AuthService.prototype.getUser = function () {
        return this.http.get(this.userUrl);
    };
    AuthService.prototype.login = function (authCredentials) {
        return this.http.post(this.loginUrl, authCredentials, this.noAuthHeader);
    };
    AuthService.prototype.getUserProfile = function () {
        return this.http.get(this.profileUrl);
    };
    AuthService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
        this.token = token;
    };
    AuthService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('token');
        }
        return this.token;
    };
    AuthService.prototype.deleteToken = function () {
        this.token = '';
        window.localStorage.removeItem('token');
        this.router.navigateByUrl('/');
    };
    AuthService.prototype.getUserPayload = function () {
        var token = this.getToken();
        var userPayload;
        if (token) {
            userPayload = token.split('.')[1];
            userPayload = window.atob(userPayload);
            return JSON.parse(userPayload);
        }
        else {
            return null;
        }
    };
    AuthService.prototype.isLoggedIn = function () {
        var user = this.getUserPayload();
        if (user) {
            return user !== null;
        }
        else {
            return false;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/question.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/question.service.ts ***!
  \**********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionService = /** @class */ (function () {
    function QuestionService(http) {
        this.http = http;
        this.selectedQuestion = {
            questionId: '',
            questionName: ''
        };
    }
    //get all questions
    QuestionService.prototype.getAllQuestions = function () {
        return this.http.get('/api/question');
    };
    QuestionService.prototype.postQuestion = function (question) {
        return this.http.post('/api/addQuestion', question);
    };
    QuestionService.prototype.deleteQuestion = function (questionId) {
        return this.http.delete('/api/removeQuestion/:questionId');
    };
    QuestionService.prototype.updateQuestion = function (question) {
        return this.http.put('/api/updateQuestion/:questionId', question);
    };
    QuestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/services/repair.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/repair.service.ts ***!
  \********************************************/
/*! exports provided: RepairService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepairService", function() { return RepairService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RepairService = /** @class */ (function () {
    function RepairService(http) {
        this.http = http;
    }
    //get all roles
    RepairService.prototype.getAllRepairs = function () {
        return this.http.get('/api/repair');
    };
    RepairService.prototype.postRepair = function (repair) {
        return this.http.post('/api/addRepair', repair);
    };
    RepairService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RepairService);
    return RepairService;
}());



/***/ }),

/***/ "./src/app/services/role.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/role.service.ts ***!
  \******************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this.selectedRole = {
            roleId: '',
            roleName: ''
        };
    }
    //get all roles
    RoleService.prototype.getAllRoles = function () {
        return this.http.get('/api/role');
    };
    RoleService.prototype.postRole = function (role) {
        return this.http.post('/api/addRole', role);
    };
    RoleService.prototype.deleteRole = function (roleId) {
        return this.http.delete('/api/removeRole/:roleId');
    };
    RoleService.prototype.updateRole = function (role) {
        return this.http.put('/api/updateRole/:roleId', role);
    };
    RoleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.selectedUser = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            streetAddress: '',
            city: '',
            state: '',
            zipCode: '',
            username: '',
            password: '',
            confirmPassword: '',
            questionOne: {
                questionName: '',
                answer: ''
            },
            questionTwo: {
                questionName: '',
                answer: ''
            },
            questionThree: {
                questionName: '',
                answer: ''
            },
            role: 'standard'
        };
        //private registerUrl = '/api/register';
        this.userUrl = '/api/user';
    }
    //create new users
    UserService.prototype.postUser = function (user) {
        return this.http.post('/api/register', user);
    };
    //get all users
    UserService.prototype.getUser = function () {
        return this.http.get(this.userUrl);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Johnny\bu-webdev\web-450-bobs\bobs-computer-repair\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map